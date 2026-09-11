import Image from "next/image";
import Link from "next/link";
import { SolutionAreaIconComponent } from "@/components/icons/ServiceCategoryIcons";
import type { SolutionArea } from "@/lib/site";

type SolutionAreaCardProps = {
  area: SolutionArea;
};

function CardContent({ area }: SolutionAreaCardProps) {
  return (
    <>
      <div className="relative mx-auto aspect-[4/3] h-44 w-auto overflow-hidden bg-navy-50">
        <Image
          src={area.image.src}
          alt={area.image.alt}
          fill
          sizes="235px"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-hero-bg/45 via-transparent to-transparent transition-opacity duration-300 group-hover:from-hero-bg/55"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col px-4 py-5 sm:px-5 sm:py-6">
        <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent-gold/30 text-accent-gold transition-colors duration-300 group-hover:border-accent-gold/60 group-hover:bg-accent-gold/10">
          <SolutionAreaIconComponent
            name={area.icon}
            className="h-5 w-5"
          />
        </span>
        <h3 className="text-sm font-semibold uppercase leading-snug tracking-[0.1em] text-navy-900 transition-colors duration-300 group-hover:text-accent-700">
          {area.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
          {area.description}
        </p>
      </div>
    </>
  );
}

export default function SolutionAreaCard({ area }: SolutionAreaCardProps) {
  const baseClasses =
    "group flex h-full flex-col overflow-hidden border border-navy-100 bg-white transition-all duration-300";

  if (area.slug) {
    return (
      <Link
        href={`/cozumler/${area.slug}`}
        className={`${baseClasses} hover:border-accent-gold/40 hover:shadow-[0_8px_30px_-12px_rgba(26,35,50,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold`}
      >
        <CardContent area={area} />
      </Link>
    );
  }

  return (
    <article className={baseClasses}>
      <CardContent area={area} />
    </article>
  );
}
