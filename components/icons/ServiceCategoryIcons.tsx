import type { ReactElement } from "react";
import type { ServiceCategoryIcon } from "@/lib/home";

type IconProps = {
  className?: string;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function ArchitectureIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M4 20h16" />
      <path d="M6 20V10l6-6 6 6v10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

function InteriorIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M4 18V8l8-4 8 4v10" />
      <path d="M4 18h16" />
      <path d="M9 18v-4h6v4" />
      <path d="M12 14V8" />
    </svg>
  );
}

function AluminumIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <rect x="5" y="4" width="14" height="16" rx="1" />
      <path d="M5 9h14M5 15h14M12 4v16" />
    </svg>
  );
}

function PvcIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <rect x="4" y="5" width="16" height="14" rx="1" />
      <path d="M8 5v14M16 5v14M4 12h16" />
    </svg>
  );
}

function FacadeIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M3 20h18" />
      <path d="M5 20V8l7-4 7 4v12" />
      <path d="M9 20v-4h6v4" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}

function GlassIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
    </svg>
  );
}

function DoorIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M7 4h10v16H7z" />
      <path d="M7 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2" />
      <circle cx="14.5" cy="12" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ScreenIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <rect x="4" y="5" width="16" height="14" rx="1" />
      <path d="M4 9h16M4 13h16M4 17h16M8 5v14M12 5v14M16 5v14" />
    </svg>
  );
}

function WinterGardenIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M3 18h18" />
      <path d="M5 18V10l7-5 7 5v8" />
      <path d="M5 10h14" />
      <path d="M12 5v13" />
      <path d="M8.5 13h7" />
    </svg>
  );
}

function SteelStructureIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M4 20h16" />
      <path d="M6 20V6l6-3 6 3v14" />
      <path d="M6 10h12M6 14h12" />
      <path d="M12 3v17" />
      <path d="M9 6h6" />
    </svg>
  );
}

function ApplicationIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M4 15h16" />
      <path d="M6 15v-3.5a6 6 0 0 1 12 0V15" />
      <path d="M12 6V4" />
      <path d="M9 15v2M15 15v2" />
    </svg>
  );
}

function ConsultingIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M12 3v4" />
      <path d="M8 7h8" />
      <rect x="5" y="9" width="14" height="11" rx="1" />
      <path d="M9 14h2M13 14h2M9 17h6" />
    </svg>
  );
}

const iconMap: Record<
  ServiceCategoryIcon | "consulting",
  (props: IconProps) => ReactElement
> = {
  architecture: ArchitectureIcon,
  interior: InteriorIcon,
  aluminum: AluminumIcon,
  pvc: PvcIcon,
  facade: FacadeIcon,
  glass: GlassIcon,
  door: DoorIcon,
  screen: ScreenIcon,
  "winter-garden": WinterGardenIcon,
  "steel-structure": SteelStructureIcon,
  application: ApplicationIcon,
  consulting: ConsultingIcon,
};

export function ServiceCategoryIconComponent({
  name,
  className,
}: {
  name: ServiceCategoryIcon;
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}

export function SolutionAreaIconComponent({
  name,
  className,
}: {
  name: ServiceCategoryIcon | "consulting";
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}
