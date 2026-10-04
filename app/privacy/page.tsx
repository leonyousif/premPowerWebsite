import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';
import { launch } from '@/content/launch';
import { site } from '@/content/site';

export const metadata = createPageMetadata(
  'Privacy Policy',
  'Privacy policy and personal information handling for Premier Power.',
  '/privacy',
  launch.origin,
);

export default function PrivacyPage() {
  return (
    <main id="main-content" className="container legal-page">
      <Link href="/" className="text-link">
        ← Back to home
      </Link>
      <span className="eyebrow">{site.name.toUpperCase()}</span>
      <h1>Privacy Policy</h1>
      <p className="legal-intro">
        Premier Power is committed to safeguarding your privacy. This policy
        outlines how we collect, use, and protect your personal information when
        you interact with our website and electrical services.
      </p>
      <h2>Information We Collect</h2>
      <p>
        When you submit an enquiry or request a quote, we collect contact details
        necessary to respond to your request, including your name, email address,
        phone number, suburb, and details regarding your electrical or security project.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        Your information is used strictly to provide quotations, schedule on-site
        electrical and security assessments, carry out contracted work, and
        communicate with you regarding your service enquiries. We do not sell, rent,
        or distribute your personal details to third parties for marketing purposes.
      </p>
      <h2>Data Security</h2>
      <p>
        We employ industry-standard technical and operational safeguards to protect
        your data against unauthorized access, disclosure, or misuse.
      </p>
      <h2>Cookies and Hosting</h2>
      <p>
        Our hosting infrastructure may record standard server logs (such as IP
        addresses and browser types) solely for performance monitoring, security,
        and diagnostic purposes. We do not use third-party tracking pixels or intrusive
        advertising cookies.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions regarding this Privacy Policy or how your
        information is handled, please contact us at{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </main>
  );
}
