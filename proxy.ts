import { NextResponse, type NextRequest } from 'next/server';
import {
  createContentSecurityPolicy,
  hasReservedSecurityHeaders,
  securityHeaders,
} from '@/lib/security';
import { launch } from '@/content/launch';

export function proxy(request: NextRequest) {
  const development = process.env.NODE_ENV !== 'production';
  // Vinext reads the original request CSP before the overridden request headers.
  // Reject forged security headers before rendering, so its nonce cannot differ
  // from the fresh nonce in our response policy.
  if (hasReservedSecurityHeaders(request.headers)) {
    return new NextResponse('Invalid request.', {
      status: 400,
      headers: {
        ...securityHeaders,
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'private, no-store',
        'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }
  const nonce = btoa(
    String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))),
  );
  const policy = createContentSecurityPolicy(nonce, development);
  const requestHeaders = new Headers(request.headers);
  // Pass the fresh nonce to server components and framework-generated scripts.
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
  matcher: ['/((?!assets/|_next/|favicon.svg).*)'],
};
