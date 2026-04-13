import EventsClient from "./EventsClient";
 
export const metadata = {
  title: "Events | Tarapro",
 
  description: "Tarapro recently had the pleasure of attending the 6th edition of the India Health, Safety, and Environment (HSE) Summit and Awards 2022",
 
  keywords: ["Fire resistant Clothing", "FR Resistant Clothing", "Flame resistant Clothing", "Fire Retardant Clothing", "FR Coveralls", "FR Jackets", "Fireproof jackets", "Pants FR", "Arc Flash Suit"],
 
  authors: [{ name: "Tarapro" }],
 
  openGraph: {
    title: "Events | Tarapro",
    description: "Tarapro recently had the pleasure of attending the 6th edition of the India Health, Safety, and Environment (HSE) Summit and Awards 2022",
    url: "/events",
    siteName: "Tarapro",
    images: [{ url: "https://taralohia.com/images/banner-one-ipad.webp", width: 1200, height: 630 }],
    type: "website",
  },
};
 
export default function EventsPage() {
  return <EventsClient />;
}