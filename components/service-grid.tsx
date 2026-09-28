import { ArrowUpRight, Building2, Cctv, HousePlug, Wrench } from 'lucide-react';
import { site } from '@/content/site';

const icons = {
  residential: HousePlug,
  commercial: Building2,
  cctv: Cctv,
  maintenance: Wrench,
};

export function ServiceGrid() {
  return (
    <div className="service-grid">
      {site.services.map((service) => {
        const Icon = icons[service.icon];
        return (
          <a
            className="service-card"
            key={service.slug}
            href={`/services/${service.slug}`}
          >
            <Icon size={32} aria-hidden="true" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="card-link">
              Explore service <ArrowUpRight size={19} aria-hidden="true" />
            </span>
          </a>
        );
      })}
    </div>
  );
}
