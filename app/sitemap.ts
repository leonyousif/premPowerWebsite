import type { MetadataRoute } from 'next';
import { launch } from '@/content/launch';
import { site } from '@/content/site';
import { trustedOrigin } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = trustedOrigin(launch.origin);
  if (!launch.indexable || !origin) return [];
  return [
    '/',
    ...site.services.map((service) => `/services/${service.slug}`),
    '/privacy',
    '/terms',
  ].map((path) => ({ url: `${origin}${path}` }));
}
