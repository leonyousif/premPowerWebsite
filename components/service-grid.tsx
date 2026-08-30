import { ArrowUpRight, Building2, House, Settings2 } from 'lucide-react';
import { site } from '@/content/site';

const icons = { home: House, building: Building2, settings: Settings2 };

export function ServiceGrid() {
  return (
    <div className="service-grid">
      {site.services.map((service, index) => {
        const Icon = icons[service.icon];
        return (
          <a
            className="service-card"
            key={service.slug}
            href={`/services/${service.slug}`}
          >
            <span className="service-number">0{index + 1}</span>
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
