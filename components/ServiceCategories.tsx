import { ServiceCategoryIconComponent } from "@/components/icons/ServiceCategoryIcons";
import { homeContent } from "@/lib/home";

export default function ServiceCategories() {
  const { heading, items } = homeContent.serviceCategories;

  return (
    <section
      aria-labelledby="service-categories-heading"
      className="border-t border-accent-gold/15 bg-hero-bg"
    >
      <h2 id="service-categories-heading" className="sr-only">
        {heading}
      </h2>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          className="scrollbar-none flex gap-3 overflow-x-auto py-8 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 sm:py-10 lg:grid lg:grid-cols-11 lg:gap-2 lg:overflow-visible xl:gap-3"
          role="list"
        >
          {items.map((category) => (
            <li
              key={category.label}
              className="min-w-[5.75rem] shrink-0 snap-start sm:min-w-[6.5rem] lg:min-w-0"
            >
              <div className="flex flex-col items-center gap-3 px-2 py-2 text-center sm:gap-3.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-gold/25 bg-hero-bg text-accent-gold sm:h-14 sm:w-14">
                  <ServiceCategoryIconComponent
                    name={category.icon}
                    className="h-6 w-6 sm:h-7 sm:w-7"
                  />
                </span>
                <span className="max-w-[7.5rem] text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.12em] text-hero-text sm:max-w-[8rem] sm:text-[0.7rem] lg:max-w-none lg:text-[0.58rem] lg:tracking-[0.1em] xl:text-[0.65rem]">
                  {category.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
