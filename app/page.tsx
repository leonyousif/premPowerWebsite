import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Check,
  Handshake,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
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
  'CCTV Installation & Security Cameras',
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
              <span className="gold-line" /> SECURITY, WITH A HIGHER STANDARD
            </span>
            <h1 id="hero-heading">
              Protect what
              <br />
              matters.
              <br />
              <span>See the difference.</span>
            </h1>
            <p>
              Thoughtfully designed CCTV systems for your home and business.
              Clearer vision. Smarter security. Complete peace of mind.
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
          <div className="hero-visual">
            <img
              src="/images/cctv-camera.jpg"
              alt="White outdoor CCTV security camera professionally mounted on a textured wall"
              width="1400"
              height="933"
              fetchPriority="high"
              className="hero-image"
            />
            <div className="image-corner corner-top" />
            <div className="image-corner corner-bottom" />
            <div className="hero-image-label">
              <span className="status-dot" /> A CLEARER VIEW. EVERY DAY.
            </div>
            <div className="camera-note">
              <span className="note-icon">
                <ShieldCheck size={24} />
              </span>
              <div>
                <strong>A little more peace of mind.</strong>
                <span>Protection, professionally considered.</span>
              </div>
            </div>
            <span className="image-credit">Illustrative photography</span>
          </div>
        </section>
        <div className="benefit-strip">
          <div className="container benefit-grid">
            <span>
              <Camera /> CCTV installation
            </span>
            <span>
              <ShieldCheck /> Home & business security
            </span>
            <span>
              <Smartphone /> Remote viewing setup
            </span>
            <span>
              <Check /> Ongoing care & support
            </span>
          </div>
        </div>
        <section className="section container" id="services">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR SERVICES</span>
              <h2>Security that fits your world.</h2>
            </div>
            <p>
              From your front door to your business floor,
              <br />
              the right solution starts with your needs.
            </p>
          </div>
          <ServiceGrid />
          <p className="services-footnote">
            Every property is different. Your security should be, too.
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
                Good security.
                <br />
                Great attention
                <br />
                <span>to the details.</span>
              </h2>
              <p>
                It’s about more than installing cameras. It’s about
                understanding your space, making the right recommendations, and
                helping you feel confident using your system.
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
              <h2 id="process-heading">Four steps. One less worry.</h2>
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
            <h2 id="local-heading">Your local security specialists.</h2>
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
