/** Add the trusted HTTPS production origin when the public site is ready. */
export const launch = {
  // Local-only preview: no canonical host or social image URLs are published.
  origin: undefined as string | undefined,
  // Keep false while any business details are placeholders. See README.md.
  indexable: false,
  // Google Search Console meta verification token (optional if verifying via Cloudflare DNS)
  googleSiteVerification: undefined as string | undefined,
};
