import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import PdfDocumentGrid from "@/components/PdfDocumentGrid";
import SolutionDetailBanner from "@/components/SolutionDetailBanner";
import {
  getAllSolutionSlugs,
  getSolutionDetail,
} from "@/lib/solutions";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getSolutionDetail(slug);

  if (!detail) {
    return { title: siteConfig.metadata.title };
  }

  return {
    title: `${detail.title} | ${siteConfig.company.name}`,
    description: `${detail.title} — teknik dokümanlar ve kataloglar.`,
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getSolutionDetail(slug);

  if (!detail) {
    notFound();
  }

  return (
    <>
      <main>
        <SolutionDetailBanner
          src={detail.banner.src}
          alt={detail.banner.alt}
        />

        <section className="bg-white py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="mx-auto max-w-3xl text-center">
              <h1 className="font-sans text-3xl font-semibold tracking-[0.1em] text-navy-900 sm:text-4xl">
                {detail.title}
              </h1>
              <div
                className="mx-auto mt-4 h-px w-16 bg-accent-gold"
                aria-hidden="true"
              />
            </header>

            <div className="mt-10 sm:mt-12">
              <PdfDocumentGrid documents={detail.documents} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
