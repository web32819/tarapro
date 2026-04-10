import CeUlCertifiedClothing from "./CeUlCertifiedClothing";

export const metadata = {
  title: "News - ICFAREFCON exhibition by Steel & Metallurgy", 
  
  description: "We were proud to be part of ICFAREFCON 2025, an incredible two-day event that brought together pioneers from the steel and refractory industries",

  keywords: [ "", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "ICFAREFCON exhibition by Steel & Metallurgy",
	
    description: "We were proud to be part of ICFAREFCON 2025, an incredible two-day event that brought together pioneers from the steel and refractory industries",
	
    url: "/news/icfarefcon-exhibition-steel-mettalurgy",
	
    siteName: "Tarapro",
	
    images: [
      {
        url: "https://taralohia.com/images/banner-one-ipad.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return <CeUlCertifiedClothing />;
}