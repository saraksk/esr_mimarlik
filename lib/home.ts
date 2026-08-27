export type HeroHeadlinePart = {
  text: string;
  highlight?: boolean;
};

export type HeroCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type ServiceCategoryIcon =
  | "architecture"
  | "interior"
  | "aluminum"
  | "pvc"
  | "facade"
  | "glass"
  | "door"
  | "screen"
  | "winter-garden"
  | "steel-structure"
  | "application";

export type ServiceCategory = {
  label: string;
  icon: ServiceCategoryIcon;
};

export const homeContent = {
  hero: {
    headline: [
      { text: "MİMARİDE " },
      { text: "ESTETİK", highlight: true },
      { text: ". TEKNOLOJİDE " },
      { text: "MÜKEMMELLİK", highlight: true },
      { text: "." },
    ] satisfies HeroHeadlinePart[],
    description:
      "Mimarlık, iç mimarlık ve yapı sistemlerinde estetik, fonksiyonel ve sürdürülebilir çözümler sunuyoruz.",
    ctas: [
      {
        label: "Projeleri İncele",
        href: "#projects",
        variant: "primary",
      },
      {
        label: "İletişime Geç",
        href: "#contact",
        variant: "secondary",
      },
    ] satisfies HeroCta[],
    image: {
      src: "/images/hero-architecture.jpg",
      alt: "Modern cam cepheli mimari bina — placeholder görsel",
    },
  },
  serviceCategories: {
    heading: "Hizmet Kategorileri",
    items: [
      { label: "MİMARLIK", icon: "architecture" },
      { label: "İÇ MİMARLIK", icon: "interior" },
      { label: "ALÜMİNYUM", icon: "aluminum" },
      { label: "PVC", icon: "pvc" },
      { label: "CEPHE", icon: "facade" },
      { label: "CAM", icon: "glass" },
      { label: "KAPI", icon: "door" },
      { label: "SİNEKLİK", icon: "screen" },
      { label: "KIŞ BAHÇESİ", icon: "winter-garden" },
      { label: "ÇELİK YAPI & GÜÇLENDİRME", icon: "steel-structure" },
      { label: "UYGULAMA", icon: "application" },
    ] satisfies ServiceCategory[],
  },
} as const;
