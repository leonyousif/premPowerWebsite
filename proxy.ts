import { NextResponse, type NextRequest } from 'next/server';
import { createContentSecurityPolicy, securityHeaders } from '@/lib/security';
import { launch } from '@/content/launch';

export function proxy(request: NextRequest) {
  const development = process.env.NODE_ENV !== 'production';
  const nonce = btoa(
    String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))),
  );
  const policy = createContentSecurityPolicy(nonce, development);
  const requestHeaders = new Headers(request.headers);
  // Replace untrusted incoming values before the renderer derives its nonce.
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', policy);
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', policy);
  response.headers.set('Cache-Control', 'private, no-store');
  for (const [key, value] of Object.entries(securityHeaders))
    response.headers.set(key, value);
  if (!development)
    response.headers.set('Strict-Transport-Security', 'max-age=31536000');
  if (!launch.indexable)
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}

export const config = {
  matcher: ['/((?!assets/|_next/|images/|favicon.svg|og.png).*)'],
};
