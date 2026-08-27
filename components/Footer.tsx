import Link from "next/link";
import { siteConfig } from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export default function Footer() {
  const { company, footer } = siteConfig;
  const copyright = footer.copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return (
    <footer
      id="contact"
      aria-labelledby="footer-heading"
      className="border-t border-accent-gold/20 bg-hero-bg"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <h2 id="footer-heading" className="sr-only">
          {footer.heading}
        </h2>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-6">
          <Link
            href={company.homeHref}
            className="group flex flex-col leading-none justify-self-start"
          >
            <span className="font-sans text-2xl font-semibold tracking-[0.18em] text-hero-text transition-colors group-hover:text-accent-gold sm:text-[1.65rem]">
              {company.name}
            </span>
            <span className="mt-1 font-sans text-[0.6rem] font-medium uppercase tracking-[0.28em] text-hero-muted sm:text-[0.65rem]">
              {company.subtitle}
            </span>
          </Link>

          <a
            href={`mailto:${footer.email.address}`}
            className="group inline-flex items-center gap-3 justify-self-start text-hero-text transition-colors hover:text-accent-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold md:justify-self-center"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-gold/30 text-accent-gold transition-colors group-hover:border-accent-gold/60 group-hover:bg-accent-gold/10">
              <MailIcon className="h-5 w-5" />
            </span>
            <span className="flex flex-col items-start gap-0.5 text-left">
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-hero-muted">
                {footer.email.label}
              </span>
              <span className="text-sm font-semibold tracking-wide sm:text-base">
                {footer.email.address}
              </span>
            </span>
          </a>

          <a
            href={footer.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={footer.instagram.label}
            className="inline-flex items-center gap-2.5 justify-self-start rounded-sm border border-accent-gold/40 bg-accent-gold/10 px-5 py-2.5 text-sm font-semibold tracking-wide text-accent-gold transition-colors hover:border-accent-gold hover:bg-accent-gold/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold md:justify-self-end"
          >
            <InstagramIcon className="h-5 w-5" />
            esrmimarlik
          </a>
        </div>

        <div
          className="mt-10 border-t border-accent-gold/15 pt-6 text-center sm:mt-12 sm:pt-8"
          aria-label="Telif hakkı"
        >
          <p className="text-xs tracking-wide text-hero-muted sm:text-sm">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
