import type { Metadata } from 'next';

/** Never derive canonical URLs from Host or X-Forwarded-Host request headers. */
export function trustedOrigin(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (
      url.protocol !== 'https:' ||
      url.username ||
      url.password ||
      url.pathname !== '/' ||
      url.search ||
      url.hash
    )
      return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  origin?: string,
  image = '/og.png',
): Metadata {
  const base = trustedOrigin(origin);
  const imageUrl = base ? new URL(image, base).toString() : undefined;
  return {
    title,
    description,
    alternates: base
      ? { canonical: new URL(path, base).toString() }
      : undefined,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_AU',
      siteName: 'Premier Power',
      url: base ? new URL(path, base).toString() : undefined,
      images: imageUrl ? [{ url: imageUrl, alt: title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

/** JSON embedded into HTML must not be able to close its script element. */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
