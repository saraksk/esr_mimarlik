"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { siteConfig } from "@/lib/site";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const { company, navigation, cta } = siteConfig;
  const menuId = useId();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMobileMenu]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(26,35,50,0.08),0_4px_24px_-4px_rgba(26,35,50,0.08)]" : "border-b border-navy-100/80"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        <Link
          href={company.homeHref}
          className="group flex min-w-0 flex-col leading-none"
          onClick={closeMobileMenu}
        >
          <span className="font-sans text-2xl font-semibold tracking-[0.18em] text-navy-900 transition-colors group-hover:text-accent-700 sm:text-[1.65rem]">
            {company.name}
          </span>
          <span className="mt-1 truncate font-sans text-[0.6rem] font-medium uppercase tracking-[0.28em] text-navy-500 sm:text-[0.65rem]">
            {company.subtitle}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Ana navigasyon"
        >
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium tracking-wide text-navy-700 transition-colors duration-200 hover:text-accent-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-sm bg-accent-600 px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
          >
            {cta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-navy-800 transition-colors hover:bg-navy-50 hover:text-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls={menuId}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      <div
        id={menuId}
        className={`overflow-hidden border-t border-navy-100/80 bg-white transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[calc(100dvh-var(--header-height))] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="px-5 pb-6 pt-2 sm:px-6" aria-label="Mobil navigasyon">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-sm px-1 py-3.5 text-base font-medium tracking-wide text-navy-800 transition-colors hover:text-accent-700 active:bg-navy-50"
                  onClick={closeMobileMenu}
                  tabIndex={mobileOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded-sm bg-accent-600 px-5 py-3.5 text-base font-semibold tracking-wide text-white transition-colors hover:bg-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
            onClick={closeMobileMenu}
            tabIndex={mobileOpen ? 0 : -1}
          >
            {cta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
