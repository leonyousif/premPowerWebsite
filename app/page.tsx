import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Cctv,
  Check,
  Handshake,
  HousePlug,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { ServiceGrid } from '@/components/service-grid';
import { FaqSection } from '@/components/faq-section';
import { ContactSection } from '@/components/contact-section';
import { StructuredData } from '@/components/structured-data';
import { reasons, processSteps } from '@/content/home';
import { site } from '@/content/site';
import { launch } from '@/content/launch';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Electricians, CCTV & Electrical Maintenance',
  site.description,
  '/',
  launch.origin,
);
const reasonIcons = {
  scan: ScanLine,
  sparkles: Sparkles,
  smartphone: Smartphone,
  handshake: Handshake,
};

export default function Home() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: site.name,
          description: site.description,
          ...(launch.origin ? { url: launch.origin } : {}),
        }}
      />
      <main id="main-content">
        <section className="hero container" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="gold-line" /> ELECTRICAL &amp; SECURITY, DONE
              PROPERLY
            </span>
            <h1 id="hero-heading">
              Power for today.
              <br />
              <span>Ready for tomorrow.</span>
            </h1>
            <p>
              Residential and commercial electrical work, CCTV installation and
              ongoing maintenance—planned around your property and the way you
              use it.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#contact">
                Get a free quote <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#services">
                Explore our services <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-assurances">
              <span>
                <Check /> Designed around you
              </span>
              <span>
                <Check /> Support from start to finish
              </span>
            </div>
          </div>
          <div
            className="hero-visual image-placeholder"
          >
            placeholder
          </div>
        </section>
        <div className="benefit-strip">
          <div className="container benefit-grid">
            <span>
              <HousePlug /> Residential electrical
            </span>
            <span>
              <Building2 /> Commercial electrical
            </span>
            <span>
              <Cctv /> CCTV &amp; security
            </span>
            <span>
              <Wrench /> Maintenance &amp; repairs
            </span>
          </div>
        </div>
        <section className="section container" id="services">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR SERVICES</span>
              <h2>Four ways we keep things running.</h2>
            </div>
            <p>
              From home upgrades to commercial projects,
              <br />
              start with the service that fits your needs.
            </p>
          </div>
          <ServiceGrid />
          <p className="services-footnote">
            Every property is different. The right scope starts with a clear
            conversation.
          </p>
        </section>
        <section
          className="why-section"
          id="why-us"
          aria-labelledby="why-heading"
        >
          <div className="section container why-grid">
            <div className="why-copy">
              <span className="eyebrow">THE PREMIER POWER APPROACH</span>
              <h2 id="why-heading">
                Good electrical work.
                <br />
                Great attention
                <br />
                <span>to the details.</span>
              </h2>
              <p>
                We start by understanding the property, the people using it and
                the result you need. That leads to clearer recommendations,
                tidier work and a more useful handover.
              </p>
              <a href="#process" className="text-link">
                Get to know our process <ArrowUpRight size={17} />
              </a>
              <div className="why-signature">
                <span /> THOUGHTFUL FROM START TO FINISH
              </div>
            </div>
            <div className="reasons-grid">
              {reasons.map((reason) => {
                const Icon = reasonIcons[reason.icon];
                return (
                  <div className="reason" key={reason.title}>
                    <Icon size={27} aria-hidden="true" />
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section
          className="section container"
          id="process"
          aria-labelledby="process-heading"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">FROM FIRST HELLO TO PEACE OF MIND</span>
              <h2 id="process-heading">Four clear steps.</h2>
            </div>
            <p>
              A straightforward process,
              <br />
              with you in the picture at every step.
            </p>
          </div>
          <ol className="process-grid">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>
        <section
          className="local-banner container"
          aria-labelledby="local-heading"
        >
          <span className="local-icon">
            <ShieldCheck size={33} />
          </span>
          <div>
            <span className="eyebrow">CLOSE TO HOME</span>
            <h2 id="local-heading">
              Your local electrical &amp; security team.
            </h2>
            <p>Servicing {site.location}</p>
          </div>
          <a href="#contact" className="button button-outline">
            Let’s talk about your property <ArrowUpRight size={17} />
          </a>
        </section>
        <FaqSection />
        <ContactSection />
      </main>
    </>
  );
}
