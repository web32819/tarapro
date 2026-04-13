import NewsClient from "./NewsClient";

export const metadata = {
  title: "News | Tarapro",

  description: "Tarapro participated in MMMM 2022 in New Delhi & in 6th edition of India HSE Summit and Awards 2022",

  keywords: ["Fire resistant Clothing", "FR Coveralls", "FR Jackets", "Fireproof jackets", "Pants FR", "Arc Flash Suit", "FR Shirts", "FR Coveralls", "FR Clothing", "FR Knits"],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "News | Tarapro",
    description: "Tarapro participated in MMMM 2022 in New Delhi & in 6th edition of India HSE Summit and Awards 2022",
    url: "/news",
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

export default function NewsPage() {
  return <NewsClient/>;
}
