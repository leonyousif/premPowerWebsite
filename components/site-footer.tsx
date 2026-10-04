import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PremierPowerLogo } from '@/components/premier-power-logo';
import { site, navigation } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="brand" href="/" aria-label="Premier Power home">
              <PremierPowerLogo />
              <span>
                <strong>PREMIER POWER</strong>
                <small>ELECTRICAL. DONE PROPERLY.</small>
              </span>
            </Link>
            <p>
              Powering homes and businesses.
              <br />
              Protecting what matters.
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
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
            <Link href="/#contact">
              Get a free quote <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Premier Power. All rights reserved.
          </span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Website terms</Link>
            <a href="#main-content">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
