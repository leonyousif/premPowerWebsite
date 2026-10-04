'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
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
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  useEffect(() => {
    if (reviewing) summaryRef.current?.focus();
  }, [reviewing]);

  function reviewEnquiry(event: {
    preventDefault(): void;
    currentTarget: HTMLFormElement;
  }) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const read = (name: string) => {
      const value = values.get(name);
      return typeof value === 'string' ? value : '';
    };
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
      </div>
      <p className="form-intro">
        Request a detailed quote or consultation for your electrical or security project.
      </p>
      <noscript>
        <p className="form-notice">
          Please enable JavaScript to submit this enquiry form.
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
                placeholder="Property type, electrical work, existing cameras, or anything you’d like us to know…"
                {...fieldProps('details')}
              />
              {errorFor('details')}
            </div>
          </div>
          <p className="form-note">
            Your details are kept confidential and protected under our privacy policy.
          </p>
          <Button className="button button-gold form-submit" type="submit">
            Submit quote request <ArrowUpRight size={18} />
          </Button>
        </fieldset>
      </form>
      {reviewing && summary && (
        <div
          className="enquiry-summary"
          tabIndex={-1}
          ref={summaryRef}
          aria-live="polite"
        >
          <span className="summary-icon">
            <CheckCheck size={25} />
          </span>
          <h3>Enquiry received.</h3>
          <p>
            Thank you! We have received your project details and will review your request promptly.
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
        <LockKeyhole size={12} /> Your information is protected.{' '}
        <Link href="/privacy">Privacy Policy</Link>
      </p>
    </div>
  );
}
