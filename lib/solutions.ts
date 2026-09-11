export type SolutionDocument = {
  name: string;
  file: string;
  size: string;
};

export type SolutionDetail = {
  slug: string;
  title: string;
  banner: {
    src: string;
    alt: string;
  };
  documents: SolutionDocument[];
};

export const solutionDetails = {
  aluminyum: {
    slug: "aluminyum",
    title: "Alüminyum Sistemleri",
    banner: {
      src: "/images/solutions/aluminyum.jpg?v=2",
      alt: "Alüminyum pencere sistemleri banner görseli",
    },
    documents: [
      {
        name: "Masterline",
        file: "/documents/aluminyum/Reynaers_Aluminium_MasterLine_Doors_Leaflet_2023.pdf",
        size: "1.6 MB",
      },
      {
        name: "Concept System 77",
        file: "/documents/aluminyum/Product_Brochure_ConceptSystem_77_Version1_Digital.pdf",
        size: "371 KB",
      },
      {
        name: "Concept System 130",
        file: "/documents/aluminyum/CP130.pdf",
        size: "2.6 MB",
      },
      {
        name: "Slimline 38",
        file: "/documents/aluminyum/SL38.pdf",
        size: "1.6 MB",
      },
      {
        name: "Hifinity",
        file: "/documents/aluminyum/hifinity.pdf",
        size: "15.1 MB",
      },
    ],
  },
  cephe: {
    slug: "cephe",
    title: "Cephe Sistemleri",
    banner: {
      src: "/images/solutions/cephe.jpg?v=2",
      alt: "Cam cepheli bina banner görseli",
    },
    documents: [
      {
        name: "CW 50",
        file: "/documents/cephe/cw50.pdf",
        size: "2.8 MB",
      },
      {
        name: "CW 60",
        file: "/documents/cephe/cw60.pdf",
        size: "1.9 MB",
      },
    ],
  },
} satisfies Record<string, SolutionDetail>;

export type SolutionSlug = keyof typeof solutionDetails;

export function getSolutionDetail(slug: string): SolutionDetail | undefined {
  return solutionDetails[slug as SolutionSlug];
}

export function getAllSolutionSlugs(): SolutionSlug[] {
  return Object.keys(solutionDetails) as SolutionSlug[];
}
