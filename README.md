# Premier Power

A responsive, light-only electrical and security website built with TypeScript, React and Vinext. It presents four service areas: residential electrical, commercial electrical, CCTV and security, and electrical maintenance. Business details and marketing content are deliberately placeholders. Grey boxes marked “placeholder” stand in for all photos and logos in the site preview.

## Development

Use Node.js 22.13 or newer and the committed npm lockfile.

```sh
npm ci
npm run dev
npm run typecheck
npm test
npm run build
```

`npm run format` formats the code. The build uses the Cloudflare Workers Vite adapter. Vinext is a beta framework; review framework releases and test updates before production changes.

## Temporary preview hosting

After `npm ci`, run `npm run build` and `npm run start` to preview the production build locally through Wrangler. To deploy the built Worker to a Cloudflare account, authenticate Wrangler and run `npx wrangler deploy --config dist/server/wrangler.json`. Cloudflare account setup and access controls are managed outside this repository; never commit API tokens or `.dev.vars` files.

## Structure

- `content/site.ts`: business placeholders, navigation and service records.
- `content/home.ts`: sample home page copy, process and FAQs.
- `content/launch.ts`: trusted canonical origin and search indexing switch. The origin is currently unset for local-only previewing.
- `app/`: home, data-driven service pages, privacy, terms, 404, robots and sitemap.
- `components/`: reusable site sections. Only forms, navigation and FAQs need client JavaScript.
- `components/ui/`: the five shadcn primitives currently used. Add more through the existing shadcn configuration when needed.
- `lib/`: small, pure validation, SEO and security helpers.
- `proxy.ts`: per-response security policy with a fresh cryptographic script nonce.
- `tests/`: validation, malicious input, URL trust and security policy tests.

Add a service record to `content/site.ts`; its detail route, navigation, service cards and sitemap entry are derived automatically. Also add the matching selectable name in `lib/quote.ts` if it should appear in the enquiry form. Keep content separate from layout, and avoid adding a database or global state until needed.

## Placeholder and enquiry behaviour

The preview banner and terms identify sample copy. Phone, email, service area, hours, licences and ABN use explicit bracketed placeholders. There are no invented reviews, certifications, prices, completed-project claims or customer counts. Grey placeholder boxes stand in for photos and the logo.

The form validates and displays an **enquiry preview only**. It does not send a request, store data, create a booking, trigger email, log form contents, or use browser storage. It stays disabled until JavaScript is ready. The CSP also blocks native form submissions. Edit and reset controls are included. Reloading the page clears the in-memory preview; browser autofill remains controlled by the visitor's browser.

To activate live enquiries, implement a server endpoint, independently validate unknown inputs, impose body and field limits, check request origin, add rate limiting and appropriate abuse protection, send messages only via a server-side provider, and use environment secrets. Only show delivery success after an actual successful provider response. Update the form copy, privacy policy and `form-action` directive at the same time. Do not put provider credentials in client code.

## SEO

Each page has its own title, description, canonical URL when configured, and Open Graph/X metadata without social preview images. The home page includes safe WebSite JSON-LD; service pages include Service JSON-LD without fake ratings, addresses or licence claims. Semantic headings, descriptive links and a sitemap/robots implementation are included.

`launch.indexable` is intentionally `false` while details are placeholders. Both the HTML metadata and HTTP header say noindex, robots disallows crawling, and the sitemap is empty. Canonical URLs come only from the configured HTTPS origin, never visitor-controlled host headers. A temporary preview is publicly accessible to anyone with its URL unless you configure separate access controls; `noindex` is a search hint, not access protection. SEO foundations are implemented; this does not guarantee rankings or search inclusion.

Before a public business launch:

1. Replace and verify every business placeholder and sample service statement. Confirm qualifications and service area; do not publish unverified claims.
2. Supply a verified HTTPS domain in `content/launch.ts`. Configure hosting/domain access separately.
3. Connect and test real enquiry delivery with the protections above.
4. Replace preview privacy/terms content with reviewed business policies.
5. Remove or adapt the concept notices only after the copy is real. Switch `launch.indexable` to `true`, rebuild and verify metadata, robots and sitemap at the final domain.
6. Verify public access deliberately, submit the sitemap through the business's search-console account, and create accurate local-business structured data from verified facts if appropriate.

## Security and accessibility

- Production scripts use a fresh per-request CSP nonce, with no script `unsafe-inline` or `unsafe-eval`. Style attributes remain allowed because the UI primitives/framework use them.
- CSP restricts images/fonts/connections, blocks objects, framing and native form submissions. HSTS is added in production; responses prevent sniffing, limit referrer data, and disable camera, microphone, geolocation and payment APIs.
- HTML is private/no-store so nonces are not shared through a cache. The request proxy rejects forged incoming nonce/CSP headers before rendering.
- Structured data escapes HTML-sensitive characters; form values render as React text.
- The app adds no tracking, external embeds, uploads, authentication system, database or payment surface. The hosting platform separately manages preview authentication and may maintain its own logs/cookies.
- Keyboard focus, a skip link, form labels/error association, touch-friendly controls, responsive layouts and reduced-motion handling are included. The theme always remains light, including on devices that prefer dark mode.

No implementation can guarantee absolute security. Dependency audit, type checks, focused tests and production HTTP verification are part of the delivery checks. Browser interaction/visual testing is separate and should be performed before a public business launch.

## Design references and assets

Original styling uses warm white, muted gold and charcoal type. The service-led structure, separate residential and commercial paths, maintenance support and visible quote actions were informed by [CJM Electrical](https://www.cjmelectrical.com.au/), [Intellectrical](https://intellectrical.com.au/) and [ECA Electrix](https://ecaelectrix.com.au/). Their text, logos and website code were not copied.

- No photo or logo files are included in the published tree; grey placeholder boxes stand in for all image areas.

No secret values belong in this repository. Local `.env*` and `.dev.vars*` files are ignored. Keep Cloudflare credentials in Wrangler's supported local authentication or deployment secret store, never in source files.
