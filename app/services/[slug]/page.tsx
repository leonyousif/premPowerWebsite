import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { ContactSection } from '@/components/contact-section';
import { StructuredData } from '@/components/structured-data';
import { site } from '@/content/site';
import { launch } from '@/content/launch';
import { createPageMetadata } from '@/lib/seo';

type PageProps = { params: Promise<{ slug: string }> };

function findService(slug: string) {
  return site.services.find((service) => service.slug === slug);
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();
  return createPageMetadata(
    service.title,
    service.description,
    `/services/${service.slug}`,
    launch.origin,
  );
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();
  const path = `/services/${service.slug}`;
  return (
    <main id="main-content">
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.description,
          serviceType: service.title,
          provider: { '@type': 'Organization', name: site.name },
          ...(launch.origin
            ? {
                url: `${launch.origin}${path}`,
              }
            : {}),
        }}
      />
      <div className="container">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link href="/">Home</Link>
          <ChevronRight size={12} />
          <Link href="/#services">Services</Link>
          <ChevronRight size={12} />
          <span aria-current="page">{service.title}</span>
        </nav>
      </div>
      <section className="container service-hero">
        <div>
          <span className="eyebrow">{service.eyebrow}</span>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
          <a href="#contact" className="button button-gold">
            Talk about your project <ArrowUpRight size={18} />
          </a>
          <span className="detail-disclaimer">
            Sample service information — confirm availability before launch.
          </span>
        </div>
        <div
          className="detail-image image-placeholder"
        >
          placeholder
        </div>
      </section>
      <section className="section container service-inclusions">
        <div>
          <span className="eyebrow">A PRACTICAL APPROACH</span>
          <h2>{service.detailsHeading}</h2>
          <p>{service.detailsCopy}</p>
        </div>
        <div>
          <h3>What your solution could include</h3>
          <ul className="feature-list">
            {service.features.map((feature) => (
              <li key={feature}>
                <Check size={18} />
                {feature}
              </li>
            ))}
          </ul>
          <p className="placeholder-note">
            Final equipment, inclusions, pricing and timeframes are subject to a
            property assessment and confirmed quote.
          </p>
        </div>
      </section>
      <section className="service-detail-section">
        <div className="container">
          <div className="service-detail-heading">
            <span className="eyebrow">COMMON PROJECT AREAS</span>
            <h2>A closer look at the work.</h2>
          </div>
          <div className="service-detail-grid">
            {service.highlights.map((highlight, index) => (
              <article className="service-detail-card" key={highlight.title}>
                <span>0{index + 1}</span>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="container service-navigation">
        <Link href="/#services" className="text-link">
          ← Explore all services
        </Link>
        <nav className="related-services" aria-label="Related services">
          {site.services
            .filter((item) => item.slug !== service.slug)
            .map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`}>
                {item.shortTitle}
              </Link>
            ))}
        </nav>
      </div>
      <ContactSection initialService={service.title} />
    </main>
  );
}
