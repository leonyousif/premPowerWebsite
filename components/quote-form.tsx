'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCheck, LockKeyhole, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';
import {
  serviceOptions,
  validateQuote,
  type QuoteErrors,
  type QuoteRequest,
} from '@/lib/quote';

export function QuoteForm({
  initialService = 'Not sure yet',
}: {
  initialService?: string;
}) {
  const [ready, setReady] = useState(false);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [summary, setSummary] = useState<QuoteRequest | null>(null);
  const [reviewing, setReviewing] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setReady(true);
  }, []);
  useEffect(() => {
    if (reviewing) summaryRef.current?.focus();
  }, [reviewing]);

  function reviewEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const read = (name: string) => String(values.get(name) ?? '');
    const result = validateQuote({
      name: read('name'),
      email: read('email'),
      phone: read('phone'),
      suburb: read('suburb'),
      service: read('service'),
      details: read('details'),
    });
    setErrors(result.errors);
    const firstError = Object.keys(result.errors)[0];
    if (firstError) {
      (
        event.currentTarget.elements.namedItem(firstError) as HTMLElement | null
      )?.focus();
      return;
    }
    setSummary(result.data);
    setReviewing(true);
  }

  const errorFor = (field: keyof QuoteRequest) =>
    errors[field] ? (
      <span className="field-error" id={`quote-${field}-error`}>
        {errors[field]}
      </span>
    ) : null;
  const fieldProps = (field: keyof QuoteRequest) => ({
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? `quote-${field}-error` : undefined,
  });

  return (
    <div className="quote-card">
      <div className="quote-card-heading">
        <h3>Tell us what you have in mind.</h3>
        <span className="sample-label">DEMO FORM</span>
      </div>
      <p className="form-intro">
        Try an example enquiry. Nothing is sent or saved.
      </p>
      <noscript>
        <p className="form-notice">
          Enable JavaScript to try the local enquiry preview. This demo cannot
          send messages.
        </p>
      </noscript>
      <form
        ref={formRef}
        onSubmit={reviewEnquiry}
        noValidate
        hidden={reviewing}
      >
        <fieldset disabled={!ready}>
          <legend className="sr-only">Quote enquiry details</legend>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="quote-name">
                Your name <span>*</span>
              </label>
              <Input
                id="quote-name"
                name="name"
                placeholder="e.g. Alex Taylor"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
                {...fieldProps('name')}
              />
              {errorFor('name')}
            </div>
            <div className="form-field">
              <label htmlFor="quote-email">
                Email address <span>*</span>
              </label>
              <Input
                id="quote-email"
                name="email"
                type="email"
                placeholder="e.g. alex@example.com"
                autoComplete="email"
                required
                maxLength={254}
                {...fieldProps('email')}
              />
              {errorFor('email')}
            </div>
            <div className="form-field">
              <label htmlFor="quote-phone">
                Phone <small>(optional)</small>
              </label>
              <Input
                id="quote-phone"
                name="phone"
                type="tel"
                placeholder="Your contact number"
                autoComplete="tel"
                maxLength={30}
                {...fieldProps('phone')}
              />
              {errorFor('phone')}
            </div>
            <div className="form-field">
              <label htmlFor="quote-suburb">
                Suburb <span>*</span>
              </label>
              <Input
                id="quote-suburb"
                name="suburb"
                placeholder="Your suburb"
                autoComplete="address-level2"
                required
                maxLength={100}
                {...fieldProps('suburb')}
              />
              {errorFor('suburb')}
            </div>
            <div className="form-field field-full">
              <label htmlFor="quote-service">
                How can we help? <span>*</span>
              </label>
              <NativeSelect
                id="quote-service"
                name="service"
                defaultValue={initialService}
                required
                {...fieldProps('service')}
              >
                {serviceOptions.map((option) => (
                  <NativeSelectOption key={option} value={option}>
                    {option}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
              {errorFor('service')}
            </div>
            <div className="form-field field-full">
              <label htmlFor="quote-details">
                A little about your project <small>(optional)</small>
              </label>
              <Textarea
                id="quote-details"
                name="details"
                rows={4}
                maxLength={1500}
                placeholder="Property type, existing cameras, or anything you’d like us to know…"
                {...fieldProps('details')}
              />
              {errorFor('details')}
            </div>
          </div>
          <p className="form-note">
            Please use sample details. Don’t include passwords, access codes or
            sensitive information.
          </p>
          <Button className="button button-gold form-submit" type="submit">
            Review my enquiry <ArrowUpRight size={18} />
          </Button>
        </fieldset>
      </form>
      {reviewing && summary && (
        <div
          className="enquiry-summary"
          tabIndex={-1}
          ref={summaryRef}
          role="status"
        >
          <span className="summary-icon">
            <CheckCheck size={25} />
          </span>
          <h3>Your enquiry preview is ready.</h3>
          <p>
            This is a demonstration. <strong>Nothing has been sent.</strong> A
            live enquiry service can be connected before launch.
          </p>
          <dl>
            <div>
              <dt>Name</dt>
              <dd>{summary.name}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{summary.email}</dd>
            </div>
            {summary.phone && (
              <div>
                <dt>Phone</dt>
                <dd>{summary.phone}</dd>
              </div>
            )}
            <div>
              <dt>Suburb</dt>
              <dd>{summary.suburb}</dd>
            </div>
            <div>
              <dt>Service</dt>
              <dd>{summary.service}</dd>
            </div>
            {summary.details && (
              <div>
                <dt>Project</dt>
                <dd>{summary.details}</dd>
              </div>
            )}
          </dl>
          <div className="summary-actions">
            <Button
              variant="outline"
              className="button button-outline"
              onClick={() => {
                setReviewing(false);
                requestAnimationFrame(() =>
                  (
                    formRef.current?.elements.namedItem('name') as HTMLElement
                  )?.focus(),
                );
              }}
            >
              Edit details
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                formRef.current?.reset();
                setSummary(null);
                setReviewing(false);
                setErrors({});
                requestAnimationFrame(() =>
                  (
                    formRef.current?.elements.namedItem('name') as HTMLElement
                  )?.focus(),
                );
              }}
            >
              <RotateCcw size={15} /> Start over
            </Button>
          </div>
        </div>
      )}
      <p className="privacy-note">
        <LockKeyhole size={12} /> Kept in this page only.{' '}
        <a href="/privacy">Privacy information</a>
      </p>
    </div>
  );
}
