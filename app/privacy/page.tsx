import { createPageMetadata } from '@/lib/seo';
import { launch } from '@/content/launch';

export const metadata = createPageMetadata(
  'Privacy information',
  'How the Premier Power concept website handles enquiry previews and personal information.',
  '/privacy',
  launch.origin,
);

export default function PrivacyPage() {
  return (
    <main id="main-content" className="container legal-page">
      <a href="/" className="text-link">
        ← Back to home
      </a>
      <span className="eyebrow">CONCEPT WEBSITE</span>
      <h1>Privacy information</h1>
      <p className="legal-intro">
        This page describes the current demonstration website. Replace it with a
        reviewed business privacy policy before activating live enquiries.
      </p>
      <h2>The enquiry preview</h2>
      <p>
        The form only creates a preview within your browser tab. Form contents
        are not sent to Premier Power, emailed, written to a database, or saved
        in browser storage. Closing or reloading the page clears the preview.
        Your browser may independently remember information through its own
        autofill settings.
      </p>
      <h2>Use sample information</h2>
      <p>
        Please do not enter passwords, camera access codes or sensitive details.
        The contact information displayed on this website is placeholder
        content, and the form does not make a booking or request a callback.
      </p>
      <h2>Cookies and hosting</h2>
      <p>
        The application does not add advertising analytics, tracking pixels or
        third-party embeds. The hosting platform may process connection
        information and use authentication cookies to provide access to this
        private preview. Those platform operations are separate from the enquiry
        form.
      </p>
      <h2>Before the business website goes live</h2>
      <p>
        Add the business’s verified identity, privacy contact, actual data
        collection and retention practices, service providers and any applicable
        policy information. Review this page whenever the form, analytics or
        other data handling changes.
      </p>
      <h2>Contact</h2>
      <p>Privacy contact: [Business privacy contact email]</p>
    </main>
  );
}
