import SolutionAreaCard from "@/components/SolutionAreaCard";
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
              <SolutionAreaCard area={area} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
