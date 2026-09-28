import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  Cctv,
  Home,
  HousePlug,
  Wrench,
} from 'lucide-react';
import { site } from '@/content/site';

const serviceIcons = {
  residential: HousePlug,
  commercial: Building2,
  cctv: Cctv,
  maintenance: Wrench,
} as const;

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <div className="container not-found-inner">
        <div className="not-found-hero">
          <div className="not-found-badge">
            <span className="not-found-code">404</span>
            <span className="gold-line" aria-hidden="true" />
            <span className="eyebrow">CIRCUIT DISCONNECTED</span>
          </div>
          <h1>Looks like there’s a break in the circuit.</h1>
          <p>
            The page you are looking for might have been moved, renamed, or is
            temporarily unavailable. Let’s get your power reconnected and get you
            back on track.
          </p>

          <div className="not-found-actions">
            <Link href="/" className="button button-gold">
              <Home size={16} aria-hidden="true" />
              Back to Home
            </Link>
            <Link href="/#contact" className="button button-outline">
              Request a Quote <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="not-found-services">
          <h2>Looking for one of our electrical services?</h2>
          <div className="not-found-grid">
            {site.services.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="not-found-card"
                >
                  <div className="not-found-card-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div className="not-found-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="not-found-card-link">
                      View service <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
