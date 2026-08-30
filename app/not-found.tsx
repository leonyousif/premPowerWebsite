import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main id="main-content" className="container not-found">
      <span className="eyebrow">404 · A LITTLE OUT OF VIEW</span>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>
        We couldn’t find that page. Explore our services or head back to the
        home page.
      </p>
      <a href="/" className="button button-gold">
        Back to home <ArrowUpRight size={18} />
      </a>
    </main>
  );
}
