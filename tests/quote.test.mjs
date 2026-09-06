import assert from 'node:assert/strict';
import test from 'node:test';
import { validateQuote } from '../lib/quote.ts';

const example = {
  name: 'Alex Taylor',
  email: 'alex@example.com',
  phone: '',
  suburb: 'Example suburb',
  service: 'Residential Electrical',
  details: '',
};

test('valid enquiry allows optional fields and trims whitespace', () => {
  const result = validateQuote({
    ...example,
    name: '  Alex Taylor  ',
    details: ' A sample project. ',
  });
  assert.deepEqual(result.errors, {});
  assert.equal(result.data.name, 'Alex Taylor');
  assert.equal(result.data.details, 'A sample project.');
});

test('whitespace-only required fields fail without losing other valid values', () => {
  const result = validateQuote({ ...example, name: '  ', suburb: '\n\t' });
  assert.ok(result.errors.name);
  assert.ok(result.errors.suburb);
  assert.equal(result.data.email, example.email);
});

test('email validation rejects malformed values and header injection', () => {
  for (const email of [
    'alex',
    'alex@',
    'alex@example',
    'a b@example.com',
    'alex@example.com\r\nBcc: x@example.com',
    'a'.repeat(255) + '@example.com',
  ])
    assert.ok(validateQuote({ ...example, email }).errors.email);
});

test('phone validation accepts international formatting and rejects arbitrary text', () => {
  assert.deepEqual(
    validateQuote({ ...example, phone: '+61 (0) 400 000 000' }).errors,
    {},
  );
  assert.ok(
    validateQuote({ ...example, phone: 'call me tomorrow' }).errors.phone,
  );
});

test('service tampering and excessively long requests are rejected', () => {
  const result = validateQuote({
    ...example,
    service: 'Unexpected service',
    name: 'a'.repeat(101),
    suburb: 'a'.repeat(101),
    details: 'x'.repeat(1501),
  });
  for (const key of ['service', 'name', 'suburb', 'details'])
    assert.ok(result.errors[key]);
});

test('international names and exact limits are supported', () => {
  assert.deepEqual(
    validateQuote({ ...example, name: 'Zoë 李', details: 'x'.repeat(1500) })
      .errors,
    {},
  );
});
