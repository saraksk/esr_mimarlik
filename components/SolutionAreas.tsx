import Image from "next/image";
import { SolutionAreaIconComponent } from "@/components/icons/ServiceCategoryIcons";
import { siteConfig } from "@/lib/site";

export default function SolutionAreas() {
  const { heading, items } = siteConfig.solutionAreas;

  return (
    <section
      id="solutions"
      aria-labelledby="solution-areas-heading"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="solution-areas-heading"
            className="font-sans text-3xl font-semibold tracking-[0.12em] text-navy-900 sm:text-4xl"
          >
            {heading}
          </h2>
          <div
            className="mx-auto mt-4 h-px w-16 bg-accent-gold"
            aria-hidden="true"
          />
        </header>

        <ul
          className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 xl:gap-6"
          role="list"
        >
          {items.map((area) => (
            <li key={area.title}>
              <article className="flex h-full flex-col overflow-hidden border border-navy-100 bg-white">
                <div className="relative mx-auto aspect-[4/3] h-44 w-auto overflow-hidden bg-navy-50">
                  <Image
                    src={area.image.src}
                    alt={area.image.alt}
                    fill
                    sizes="235px"
                    className="object-cover object-center"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-hero-bg/45 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-1 flex-col px-4 py-5 sm:px-5 sm:py-6">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent-gold/30 text-accent-gold">
                    <SolutionAreaIconComponent
                      name={area.icon}
                      className="h-5 w-5"
                    />
                  </span>
                  <h3 className="text-sm font-semibold uppercase leading-snug tracking-[0.1em] text-navy-900">
                    {area.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                    {area.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
