'use client';

if (typeof window !== 'undefined') {
  const g = window as unknown as { process?: { env?: Record<string, string> } };
  if (!g.process) {
    g.process = { env: {} };
  } else if (!g.process.env) {
    g.process.env = {};
  }
}

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  Cctv,
  ChevronDown,
  HousePlug,
  Menu,
  Wrench,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation, site } from '@/content/site';
import { PremierPowerLogo } from '@/components/premier-power-logo';

const serviceIcons = {
  residential: HousePlug,
  commercial: Building2,
  cctv: Cctv,
  maintenance: Wrench,
} as const;

const serviceDescriptions: Record<string, string> = {
  'residential-electrician': 'Lighting, switchboards, wiring & renovations',
  'commercial-electrician': 'Fit-outs, lighting, power distribution & strata',
  'cctv-security': 'Camera systems, monitoring & property security',
  'electrical-maintenance': 'Fault finding, repairs & scheduled safety checks',
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesOpen(false);
      }
    }

    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [servicesOpen]);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const otherNavItems = navigation.filter((item) => item.label !== 'Services');

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Premier Power home">
            <PremierPowerLogo />
            <span>
              <strong>PREMIER POWER</strong>
              <small>ELECTRICAL. DONE PROPERLY.</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className={`nav-dropdown-wrapper ${servicesOpen ? 'active' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="nav-dropdown-trigger"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`nav-dropdown-chevron ${servicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <div
                className={`nav-dropdown-menu ${servicesOpen ? 'is-open' : ''}`}
                role="menu"
                aria-label="Services dropdown"
              >
                {site.services.map((service) => {
                  const Icon = serviceIcons[service.icon];
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="nav-dropdown-item"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="nav-dropdown-icon">
                        <Icon size={17} aria-hidden="true" />
                      </span>
                      <div className="nav-dropdown-text">
                        <span className="nav-dropdown-title">
                          {service.title}
                        </span>
                        <span className="nav-dropdown-desc">
                          {serviceDescriptions[service.slug] || service.eyebrow}
                        </span>
                      </div>
                    </Link>
                  );
                })}
                <div className="nav-dropdown-footer">
                  <Link
                    href="/#services"
                    className="nav-dropdown-all"
                    role="menuitem"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span>View all services overview</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Navigation Links */}
            {otherNavItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <Link className="button button-gold header-cta" href="/#contact">
            Get a free quote <ArrowUpRight size={17} />
          </Link>

          <Button
            className="menu-toggle"
            variant="outline"
            size="icon"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav container"
            aria-label="Mobile navigation"
          >
            <div className="mobile-services-section">
              <button
                type="button"
                className="mobile-services-toggle"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`mobile-chevron ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="mobile-services-list">
                  {site.services.map((service) => {
                    const Icon = serviceIcons[service.icon];
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="mobile-service-item"
                        onClick={() => setOpen(false)}
                      >
                        <Icon size={15} aria-hidden="true" />
                        <span>{service.title}</span>
                      </Link>
                    );
                  })}
                  <Link
                    href="/#services"
                    className="mobile-service-item mobile-all-services"
                    onClick={() => setOpen(false)}
                  >
                    <span>All services overview</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              )}
            </div>

            {otherNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Get a free quote <ArrowUpRight size={16} />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
