import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
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
          <span className="eyebrow">LET’S TALK SECURITY</span>
          <h2 id="contact-heading">
            A safer space
            <br />
            starts here.
            <ArrowUpRight className="contact-arrow" aria-hidden="true" />
          </h2>
          <p>
            Building, upgrading, or simply exploring your options? Tell us a
            little about your property.
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
            <div>
              <MapPin size={19} />
              <div>
                <dt>Locally focused</dt>
                <dd>{site.location}</dd>
              </div>
            </div>
            <div>
              <Clock3 size={19} />
              <div>
                <dt>Office hours</dt>
                <dd>{site.hours}</dd>
              </div>
            </div>
          </dl>
          <p className="placeholder-note">
            Contact details are placeholders. This preview does not accept
            bookings or send enquiries.
          </p>
        </div>
        <QuoteForm initialService={initialService} />
      </div>
    </section>
  );
}
