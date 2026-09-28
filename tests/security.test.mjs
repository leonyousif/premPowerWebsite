import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createContentSecurityPolicy,
  hasReservedSecurityHeaders,
  securityHeaders,
} from '../lib/security.ts';
import {
  serializeJsonLd,
  trustedOrigin,
  createPageMetadata,
} from '../lib/seo.ts';

test('production policy restricts scripts with a nonce and disables dangerous browser capabilities', () => {
  const policy = createContentSecurityPolicy('test-nonce', false);
  assert.match(policy, /script-src 'self' 'nonce-test-nonce'/);
  assert.doesNotMatch(policy, /unsafe-eval/);
  assert.doesNotMatch(
    policy.split(';').find((item) => item.trim().startsWith('script-src')),
    /unsafe-inline/,
  );
  for (const directive of [
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'none'",
    'upgrade-insecure-requests',
  ])
    assert.ok(policy.includes(directive));
  assert.equal(securityHeaders['X-Content-Type-Options'], 'nosniff');
  assert.match(securityHeaders['Permissions-Policy'], /camera=\(\)/);
});

test('development-only allowances never appear in production policy', () => {
  assert.match(createContentSecurityPolicy('example', true), /unsafe-eval/);
  assert.match(
    createContentSecurityPolicy('example', true),
    /ws:\/\/localhost/,
  );
  assert.doesNotMatch(
    createContentSecurityPolicy('example', false),
    /ws:|unsafe-eval/,
  );
});

test('structured data cannot break out of its script element', () => {
  const payload = {
    name: '</script><script>alert(1)</script>',
    description: 'x\u2028y\u2029z',
  };
  const serialized = serializeJsonLd(payload);
  assert.ok(!serialized.includes('<'));
  assert.ok(!serialized.includes('\u2028'));
  assert.deepEqual(JSON.parse(serialized), payload);
});

test('canonical origins reject insecure, credentialed and path-bearing URLs', () => {
  for (const value of [
    undefined,
    '',
    'javascript:alert(1)',
    'http://example.com',
    'https://user:pass@example.com',
    'https://example.com/path',
    'https://example.com/?x=1',
    'https://example.com/#hash',
    '//example.com',
  ])
    assert.equal(trustedOrigin(value), undefined);
  assert.equal(trustedOrigin('https://example.com/'), 'https://example.com');
});

test('page and social metadata use the trusted origin without preview images', () => {
  const data = createPageMetadata(
    'Residential Electrical',
    'Electrical work for homes.',
    '/services/residential-electrician',
    'https://example.com',
  );
  assert.equal(
    data.alternates.canonical,
    'https://example.com/services/residential-electrician',
  );
  assert.equal(data.openGraph.title, 'Residential Electrical');
  assert.equal(data.twitter.description, 'Electrical work for homes.');
  assert.equal(data.openGraph.images, undefined);
  assert.equal(data.twitter.card, 'summary');
  assert.equal(data.twitter.images, undefined);
});

test('unconfigured origin never publishes a fake canonical URL', () => {
  const data = createPageMetadata('Preview', 'Description', '/');
  assert.equal(data.alternates, undefined);
  assert.equal(data.openGraph.images, undefined);
});

test('reserved security headers are rejected case-insensitively', () => {
  for (const name of [
    'Content-Security-Policy',
    'content-security-policy-report-only',
    'X-Nonce',
  ]) {
    assert.equal(
      hasReservedSecurityHeaders(new Headers({ [name]: 'attacker' })),
      true,
    );
  }
  assert.equal(
    hasReservedSecurityHeaders(
      new Headers({
        accept: 'text/html',
        'x-forwarded-host': 'attacker.invalid',
      }),
    ),
    false,
  );
});
