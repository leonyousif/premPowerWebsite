export const serviceOptions = [
  'Home CCTV',
  'Commercial CCTV',
  'Upgrades & support',
  'Not sure yet',
] as const;
export type ServiceOption = (typeof serviceOptions)[number];

export type QuoteRequest = {
  name: string;
  email: string;
  phone: string;
  suburb: string;
  service: string;
  details: string;
};

export type QuoteErrors = Partial<Record<keyof QuoteRequest, string>>;

/** Pure validation shared by the preview UI and any future server integration. */
export function validateQuote(input: QuoteRequest): {
  data: QuoteRequest;
  errors: QuoteErrors;
} {
  const data = Object.fromEntries(
    Object.entries(input).map(([key, value]) => [key, value.trim()]),
  ) as QuoteRequest;
  const errors: QuoteErrors = {};
  if (data.name.length < 2 || data.name.length > 100)
    errors.name = 'Enter a name between 2 and 100 characters.';
  if (data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Enter a valid email address.';
  if (data.phone && !/^[+\d\s().-]{6,30}$/.test(data.phone))
    errors.phone = 'Enter a valid phone number, or leave this field empty.';
  if (data.suburb.length < 2 || data.suburb.length > 100)
    errors.suburb = 'Enter a suburb between 2 and 100 characters.';
  if (!serviceOptions.some((option) => option === data.service))
    errors.service = 'Choose a service from the list.';
  if (data.details.length > 1500)
    errors.details = 'Keep your message under 1,500 characters.';
  return { data, errors };
}
