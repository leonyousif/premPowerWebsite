import { notFound } from 'next/navigation';
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
    '/images/cctv-camera.jpg',
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
                image: `${launch.origin}/images/cctv-camera.jpg`,
              }
            : {}),
        }}
      />
      <div className="container">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <a href="/">Home</a>
          <ChevronRight size={12} />
          <a href="/#services">Services</a>
          <ChevronRight size={12} />
          <span aria-current="page">{service.title}</span>
        </nav>
      </div>
      <section className="container service-hero">
        <div>
          <span className="eyebrow">YOUR SPACE. YOUR SECURITY.</span>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <a href="#contact" className="button button-gold">
            Talk about your project <ArrowUpRight size={18} />
          </a>
          <span className="detail-disclaimer">
            Sample service information — confirm availability before launch.
          </span>
        </div>
        <div className="detail-image">
          <img
            src="/images/cctv-camera.jpg"
            alt="Outdoor CCTV camera on a light wall, illustrating security camera installation"
            width="1400"
            height="933"
            fetchPriority="high"
          />
          <span>Illustrative photography</span>
        </div>
      </section>
      <section className="section container service-inclusions">
        <div>
          <span className="eyebrow">A SYSTEM THAT MAKES SENSE</span>
          <h2>
            Considered from
            <br />
            every angle.
          </h2>
          <p>
            A good system starts with understanding your property. We consider
            coverage, light, access and everyday use to help shape an
            appropriate solution.
          </p>
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
      <div className="container service-navigation">
        <a href="/#services" className="text-link">
          ← Explore all services
        </a>
        <p>
          Looking for something else?{' '}
          <a href="#contact">Tell us what you need.</a>
        </p>
      </div>
      <ContactSection initialService={service.title} />
    </main>
  );
}
