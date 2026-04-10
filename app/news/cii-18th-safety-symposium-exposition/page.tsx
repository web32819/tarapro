import CeUlCertifiedClothing from "./CeUlCertifiedClothing";

export const metadata = {
  title: "News - Championing Innovation in Safety at CII 18th Safety Symposium & Exposition", 
  
  description: "The 18th edition of the CII Safety Symposium & Exposition, held on August 22-23, 2024, at ITC Sonar, Kolkata provided a wonderful platform for industry leaders to discuss the future of safety in the digital age",

  keywords: [ "", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Championing Innovation in Safety at CII 18th Safety Symposium & Exposition",
	
    description: "The 18th edition of the CII Safety Symposium & Exposition, held on August 22-23, 2024, at ITC Sonar, Kolkata provided a wonderful platform for industry leaders to discuss the future of safety in the digital age",
	
    url: "/news/cii-18th-safety-symposium-exposition",
	
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