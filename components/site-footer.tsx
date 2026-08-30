import { ArrowUpRight } from 'lucide-react';
import { site, navigation } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a className="brand" href="/" aria-label="Premier Power home">
              <img
                src="/images/premier-power-logo.png"
                alt=""
                width="56"
                height="56"
                loading="lazy"
              />
              <span>
                <strong>PREMIER POWER</strong>
                <small>SECURITY. DONE PROPERLY.</small>
              </span>
            </a>
            <p>
              Protecting what matters.
              <br />
              Powering your future.
            </p>
          </div>
          <div className="footer-links">
            <h2>Explore</h2>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-links">
            <h2>Our services</h2>
            {site.services.map((service) => (
              <a key={service.slug} href={`/services/${service.slug}`}>
                {service.title}
              </a>
            ))}
            <a href="/#contact">
              Get a free quote <ArrowUpRight size={12} />
            </a>
          </div>
          <div className="footer-location">
            <h2>Your local security team</h2>
            <p>{site.location}</p>
            <span className="sample-label">PLACEHOLDER BUSINESS DETAILS</span>
            <p>
              Security licence: {site.licence}
              <br />
              Electrical licence: {site.electricalLicence}
              <br />
              ABN: {site.abn}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Premier Power. Concept website.
          </span>
          <div>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Website terms</a>
            <a href="#main-content">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
