import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { QuoteForm } from '@/components/quote-form';
import { site } from '@/content/site';

export function ContactSection({
  initialService,
}: {
  initialService?: string;
}) {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="section container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">LET’S TALK</span>
          <h2 id="contact-heading">
            Your next project
            <br />
            starts here.
            <ArrowUpRight className="contact-arrow" aria-hidden="true" />
          </h2>
          <p>
            Building, upgrading, fixing a fault or planning security? Tell us a
            little about your property and the work you have in mind.
          </p>
          <dl className="contact-details">
            <div>
              <Phone size={19} />
              <div>
                <dt>Give us a call</dt>
                <dd>{site.phone}</dd>
              </div>
            </div>
            <div>
              <Mail size={19} />
              <div>
                <dt>Drop us a line</dt>
                <dd>{site.email}</dd>
              </div>
            </div>
          </dl>
          <p className="contact-assurance">
            We respond promptly to all enquiries. For urgent fault repairs or
            emergencies, please contact us by phone.
          </p>
        </div>
        <QuoteForm initialService={initialService} />
      </div>
    </section>
  );
}
