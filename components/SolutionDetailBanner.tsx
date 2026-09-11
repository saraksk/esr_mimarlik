import Image from "next/image";

type SolutionDetailBannerProps = {
  src: string;
  alt: string;
};

export default function SolutionDetailBanner({
  src,
  alt,
}: SolutionDetailBannerProps) {
  return (
    <div className="relative h-48 w-full overflow-hidden sm:h-56 lg:h-64">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-hero-bg/70 via-hero-bg/45 to-hero-bg/25"
        aria-hidden="true"
      />
    </div>
  );
}
