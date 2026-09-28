import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';
import { launch } from '@/content/launch';

export const metadata = createPageMetadata(
  'Website terms',
  'Information about the Premier Power website preview, placeholder services and demonstration enquiry form.',
  '/terms',
  launch.origin,
);

export default function TermsPage() {
  return (
    <main id="main-content" className="container legal-page">
      <Link href="/" className="text-link">
        ← Back to home
      </Link>
      <span className="eyebrow">CONCEPT WEBSITE</span>
      <h1>Website terms</h1>
      <p className="legal-intro">
        This is a website concept for Premier Power. Business details and
        service descriptions are placeholders for review.
      </p>
      <h2>Demonstration only</h2>
      <p>
        This preview does not accept orders, payments, bookings or live
        enquiries. Using the enquiry preview does not send a message or
        establish a service agreement.
      </p>
      <h2>Sample service information</h2>
      <p>
        Service descriptions, process steps, availability and other marketing
        copy are illustrative. Electrical and security requirements vary by
        property, equipment and agreed scope. No performance guarantee, licence,
        accreditation, customer review or service area should be inferred from
        this preview.
      </p>
      <h2>Visual placeholders</h2>
      <p>
        Grey boxes marked “placeholder” stand in for the logo and photography
        throughout this preview.
      </p>
      <h2>Before public launch</h2>
      <p>
        Replace placeholder details, confirm services and qualifications, and
        add reviewed business terms appropriate to the actual services and
        customer agreements.
      </p>
      <p>Business contact: [Business contact details]</p>
    </main>
  );
}
