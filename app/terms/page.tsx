import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';
import { launch } from '@/content/launch';
import { site } from '@/content/site';

export const metadata = createPageMetadata(
  'Terms of Use',
  'Terms of use and service information for the Premier Power website.',
  '/terms',
  launch.origin,
);

export default function TermsPage() {
  return (
    <main id="main-content" className="container legal-page">
      <Link href="/" className="text-link">
        ← Back to home
      </Link>
      <span className="eyebrow">{site.name.toUpperCase()}</span>
      <h1>Terms of Use</h1>
      <p className="legal-intro">
        These terms govern your use of the Premier Power website. By accessing
        and using this site, you agree to comply with and be bound by the
        following terms and conditions.
      </p>
      <h2>Services &amp; Quotes</h2>
      <p>
        Any quotes, estimates, or service scopes submitted or generated through
        this website are indicative and subject to on-site assessment, safety
        inspections, and written confirmation prior to commencing any electrical or
        security installations.
      </p>
      <h2>Licensing &amp; Compliance</h2>
      <p>
        All electrical work is performed in accordance with relevant national
        and regional electrical wiring rules, Australian Standards (AS/NZS 3000),
        and workplace safety regulations by qualified trade professionals.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        All content, branding, photography, graphics, and text on this site are
        the property of Premier Power or their respective copyright holders and
        may not be reproduced without prior written permission.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        While Premier Power makes every effort to ensure the accuracy and
        currency of information provided on this site, we do not warrant that all
        information is free from error. Advice provided online is general in
        nature and should not substitute a qualified on-site electrical inspection.
      </p>
      <h2>Contact Us</h2>
      <p>
        For inquiries regarding these terms or our services, please contact us at{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </main>
  );
}
