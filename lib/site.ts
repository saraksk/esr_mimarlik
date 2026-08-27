export type NavItem = {
  label: string;
  href: string;
};

export type SolutionAreaIcon =
  | "architecture"
  | "interior"
  | "aluminum"
  | "pvc"
  | "facade"
  | "glass"
  | "door"
  | "screen"
  | "winter-garden"
  | "consulting";

export type SolutionArea = {
  title: string;
  description: string;
  icon: SolutionAreaIcon;
  image: {
    src: string;
    alt: string;
  };
};

export const siteConfig = {
  company: {
    name: "ESR",
    subtitle: "ARCHITECTURAL SYSTEMS",
    homeHref: "#home",
  },
  navigation: [
    { label: "Ana Sayfa", href: "#home" },
    { label: "Hakkımızda", href: "#about" },
    { label: "Hizmetlerimiz", href: "#services" },
    { label: "Projeler", href: "#projects" },
    { label: "Çözümler", href: "#solutions" },
    { label: "İletişim", href: "#contact" },
  ] satisfies NavItem[],
  cta: {
    label: "Teklif Al",
    href: "https://wa.me/905551819277",
  },
  metadata: {
    title: "ESR Architectural Systems",
    description:
      "Mimari sistemler ve yapı çözümlerinde profesyonel danışmanlık hizmetleri.",
  },
  solutionAreas: {
    heading: "ÇÖZÜM ALANLARIMIZ",
    items: [
      {
        title: "MİMARLIK",
        description: "Özgün ve fonksiyonel mimari projeler",
        icon: "architecture",
        image: {
          src: "/images/solutions/mimarlik.jpg?v=2",
          alt: "Modern mimari yapı — placeholder görsel",
        },
      },
      {
        title: "İÇ MİMARLIK",
        description: "Estetik ve konforlu iç mekan tasarımları",
        icon: "interior",
        image: {
          src: "/images/solutions/ic-mimarlik.jpg?v=2",
          alt: "İç mekan tasarımı — placeholder görsel",
        },
      },
      {
        title: "ALÜMİNYUM SİSTEMLERİ",
        description: "Yüksek performanslı alüminyum çözümler",
        icon: "aluminum",
        image: {
          src: "/images/solutions/aluminyum.jpg?v=2",
          alt: "Alüminyum pencere sistemleri — placeholder görsel",
        },
      },
      {
        title: "PVC SİSTEMLERİ",
        description: "Dayanıklı ve ısı yalıtımlı PVC doğrama sistemleri",
        icon: "pvc",
        image: {
          src: "/images/solutions/pvc.jpg?v=2",
          alt: "Modern konut dış cephe — placeholder görsel",
        },
      },
      {
        title: "CEPHE SİSTEMLERİ",
        description: "Modern ve estetik cephe sistemleri",
        icon: "facade",
        image: {
          src: "/images/solutions/cephe.jpg?v=2",
          alt: "Cam cepheli gökdelen — placeholder görsel",
        },
      },
      {
        title: "CAM SİSTEMLERİ",
        description: "Yalıtımlı cam ve özel cam çözümleri",
        icon: "glass",
        image: {
          src: "/images/solutions/cam.jpg?v=2",
          alt: "Cam ofis cephesi — placeholder görsel",
        },
      },
      {
        title: "KAPI SİSTEMLERİ",
        description: "Güvenli estetik ve fonksiyonel kapı sistemleri",
        icon: "door",
        image: {
          src: "/images/solutions/kapi.jpg?v=2",
          alt: "Modern giriş kapısı — placeholder görsel",
        },
      },
      {
        title: "SİNEKLİK SİSTEMLERİ",
        description: "Konforlu ve pratik sineklik çözümleri",
        icon: "screen",
        image: {
          src: "/images/solutions/sineklik.jpg?v=2",
          alt: "Açık pencere ve yaşam alanı — placeholder görsel",
        },
      },
      {
        title: "KIŞ BAHÇESİ SİSTEMLERİ",
        description: "Dört mevsim yaşam alanları",
        icon: "winter-garden",
        image: {
          src: "/images/solutions/kis-bahcesi.jpg?v=2",
          alt: "Kış bahçesi ve teras alanı — placeholder görsel",
        },
      },
      {
        title: "UYGULAMA & DANIŞMANLIK",
        description: "Profesyonel uygulama ve teknik danışmanlık",
        icon: "consulting",
        image: {
          src: "/images/solutions/danismanlik.jpg",
          alt: "Proje planlama ve danışmanlık — placeholder görsel",
        },
      },
    ] satisfies SolutionArea[],
  },
} as const;
