import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/lib/home";

function HeroHeadline({ parts }: { parts: typeof homeContent.hero.headline }) {
  return (
    <>
      {parts.map((part, index) =>
        part.highlight ? (
          <span key={index} className="text-accent-gold">
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </>
  );
}

function HeroCtaButton({
  label,
  href,
  variant,
}: {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base";

  const variantClasses =
    variant === "primary"
      ? "bg-accent-600 text-white hover:bg-accent-700 focus-visible:outline-accent-600"
      : "border border-hero-text/25 bg-transparent text-hero-text hover:border-accent-gold/60 hover:text-accent-gold focus-visible:outline-accent-gold";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {label}
    </Link>
  );
}

export default function Hero() {
  const { headline, description, ctas, image } = homeContent.hero;

  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full overflow-hidden"
    >
      <div className="grid min-h-[calc(100dvh-var(--header-height))] lg:grid-cols-2">
        <div className="flex items-center bg-hero-bg px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h1
              id="hero-heading"
              className="font-sans text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.15] tracking-[0.04em] text-hero-text"
            >
              <HeroHeadline parts={headline} />
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-hero-muted sm:mt-8 sm:text-lg sm:leading-8">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              {ctas.map((cta) => (
                <HeroCtaButton
                  key={cta.href}
                  label={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[18rem] sm:min-h-[22rem] lg:min-h-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-r from-hero-bg/35 via-hero-bg/10 to-transparent lg:from-hero-bg/25 lg:via-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
