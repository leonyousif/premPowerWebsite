import type { MetadataRoute } from 'next';
import { launch } from '@/content/launch';
import { trustedOrigin } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const origin = trustedOrigin(launch.origin);
  if (!launch.indexable || !origin)
    return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
