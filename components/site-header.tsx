'use client';

import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation } from '@/content/site';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="preview-bar">
        CONCEPT PREVIEW{' '}
        <span>Business details & service information are placeholders.</span>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="brand" aria-label="Premier Power home">
            <img
              src="/images/premier-power-logo.png"
              alt=""
              width="56"
              height="56"
            />
            <span>
              <strong>PREMIER POWER</strong>
              <small>SECURITY. DONE PROPERLY.</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button-gold header-cta" href="/#contact">
            Get a free quote <ArrowUpRight size={17} />
          </a>
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
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav container"
            aria-label="Mobile navigation"
            onKeyDown={(event) => {
              if (event.key === 'Escape') setOpen(false);
            }}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setOpen(false)}>
              Get a free quote <ArrowUpRight size={16} />
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
