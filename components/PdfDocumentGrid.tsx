import { DownloadIcon, PdfFileIcon } from "@/components/icons/PdfIcons";
import type { SolutionDocument } from "@/lib/solutions";

type PdfDocumentGridProps = {
  documents: SolutionDocument[];
};

export default function PdfDocumentGrid({ documents }: PdfDocumentGridProps) {
  return (
    <ul
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
      role="list"
    >
      {documents.map((document) => (
        <li key={document.file}>
          <a
            href={document.file}
            download
            className="group flex h-full flex-col items-center rounded-sm border border-navy-100 bg-white px-4 py-6 text-center transition-all duration-300 hover:border-accent-gold/40 hover:shadow-[0_8px_30px_-12px_rgba(26,35,50,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold sm:px-5 sm:py-7"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-gold/30 bg-navy-50 text-accent-gold transition-colors duration-300 group-hover:border-accent-gold/60 group-hover:bg-accent-gold/10">
              <PdfFileIcon className="h-7 w-7" />
            </span>

            <span className="mt-4 text-sm font-semibold leading-snug tracking-wide text-navy-900 transition-colors duration-300 group-hover:text-accent-700">
              {document.name}
            </span>

            <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-navy-500">
              <span>{document.size}</span>
              <span className="text-navy-200" aria-hidden="true">
                |
              </span>
              <span className="inline-flex items-center gap-1 text-accent-gold">
                <DownloadIcon className="h-4 w-4" />
                <span>İndir</span>
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
