"use client";

import { useState } from "react";

const newsItems = [
  {
    href: "/news/tarapro-september-expo-tour-2025",
    img: "/images/news/2025/sep/event/feature-image.jpg",
    title: "Tarapro Sets the Standard in FR Workwear at Major Industry Showcases this September",
    date: "30 September 2025",
    excerpt: "September was a busy month for Tarapro, as we successfully showcased our next-generation FR solutions at three flagship industry events. The month underscored the company's commitment to raising workplace safety standards and building strategic industry connections across multiple sectors.",
  },
  {
    href: "/news/tarapro-india-steel-expo-25",
    img: "/images/news/2025/april/india-steel/india-steel-featured-image.jpg",
    title: "Tarapro Shines at India Steel 2025 with Innovation, Purpose and Passion",
    date: "30 April 2025",
    excerpt: "Tarapro marked a powerful presence at India Steel 2025, held at the Mumbai Exhibition Centre from April 24 to 26, delivering three days packed with innovation, meaningful conversations and industry collaboration.",
  },
  {
    href: "/news/icfarefcon-exhibition-steel-mettalurgy",
    img: "/images/news/2025/march/icfarefcon/icfarefcon-featured-image.jpg",
    title: "ICFAREFCON",
    date: "13 March 2025",
    excerpt: "We were proud to be part of ICFAREFCON 2025, an incredible two-day event that brought together pioneers from the steel and refractory industries.",
  },
  {
    href: "/news/tarapro-shines-elecrama-25",
    img: "/images/news/2025/feb/elecrama/Elecrama-featured-image.jpg",
    title: "Tarapro Shines at Elecrama 2025: Advancing Electrical Safety & Innovation",
    date: "01 March 2025",
    excerpt: "Tarapro proudly participated in Elecrama 2025, the 16th edition of the world's largest electrical industry exhibition organized by IEEMA, held from February 22-26 at the India Exposition Mart, Greater Noida, Delhi NCR.",
  },
  {
    href: "/news/tarapro-iim-atm-flame-resistant",
    img: "/images/news/2024/nov/iim-atm/IIM-ATM-featured-image.jpg",
    title: "Tarapro Shines at IIM-ATM 2024 with Cutting-Edge Flame Resistant Solutions",
    date: "20 Nov 2024",
    excerpt: "IIM-ATM 2024, the 78th Annual Technical Meeting of the Indian Institute of Metals, held from the 20th to the 22nd of November at GKVK in Bangalore, has been an incredible experience, bringing together...",
  },
  {
    href: "/news/fire-india-exhibition-2024",
    img: "/images/news/2024/sep/fire-exhibition/fire-India-featured-image.jpg",
    title: "Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display",
    date: "01 October 2024",
    excerpt: "Tarapro recently participated in Fire India 2024 International Conference & Exhibition organized by Institution of Fire Engineers (India) from September 26-28 at Dwarka, New Delhi.",
  },
  {
    href: "/news/cii-18th-safety-symposium-exposition",
    img: "/images/news/2024/aug/cii-safety/cii-safety-featured-image.jpg",
    title: "Championing Innovation in Safety at CII 18th Safety Symposium & Exposition",
    date: "25 August 2024",
    excerpt: "The 18th edition of the CII Safety Symposium & Exposition, held on August 22-23, 2024, at ITC Sonar, Kolkata provided a wonderful platform for industry leaders to discuss the future of safety in the digital age.",
  },
  {
    href: "/news/tarapro-showcases-cutting-edge-flame-resistant-innovations-osh-india-south-2024",
    img: "/images/news/2024/july/osh-india/osh-india-featured-image.jpg",
    title: "Tarapro Showcases Cutting-Edge Flame-Resistant Innovations at OSH India South 2024",
    date: "15 July 2024",
    excerpt: "Tarapro proudly presented its latest flame-resistant (FR) protective wear and Arc Flash Protective Clothing at the 9th Edition of OSH India South, held on June 27-28 at the Bengaluru International Exhibition Centre.",
  },
  {
    href: "/news/tarapro-showcases-FR-gear-hindalco-9th-annual-safety-conclave",
    img: "/images/news/2024/march/hindalco/hindalco-featured-image.jpg",
    title: "Tarapro Showcases FR Gear at Hindalco's 9th Annual Safety Conclave",
    date: "18 March 2024",
    excerpt: "In a significant stride towards enhancing industrial safety standards, Tarapro participated in Hindalco's prestigious 9th Annual Safety Conclave, held on March 14th and 15th, 2024, in Hirakud, Orissa.",
  },
  {
    href: "/news/tarapro-makes-waves-CII-enterprise-odisha-world-safety-summit",
    img: "/images/news/2024/feb/symposium/symposium-featured-image.jpg",
    title: "Tarapro Makes Waves at CII Enterprise Odisha and World of Safety Summit",
    date: "12 February 2024",
    excerpt: "Tarapro recently participated in two major events - the CII Enterprise at Jharsuguda, Odisha, and the World of Safety Summit & Expo 2024 at Goregaon, Mumbai...",
  },
  {
    href: "/news/tarapro-pioneering-safety-solutions-innovations",
    img: "/images/news/2023/november/pioneering/pioneering-expo-image.jpg",
    title: "Tarapro's November Expo Tour: Pioneering Safety Solutions and Innovations",
    date: "27 November 2023",
    excerpt: "At Tarapro, November was an exceptionally dynamic, busy and fruitful month for us as we seamlessly navigated from one exhibition to another highlighting our commitment to safety and innovation in flame-resistant workwear.",
  },
  {
    href: "/news/tarapro-17th-safety-symposium-exposition",
    img: "/images/news/2023/august/symposium/symposium-expo-image.webp",
    title: "Empowering Safety and Sustainability: Tarapro at 17th Safety Symposium & Exposition",
    date: "25 August 2023",
    excerpt: "Tarapro took center stage as the Gold Sponsor at the 17th Safety Symposium & Exposition organised by the Confederation of Indian Industry (CII), Eastern Region, at ITC Sonar, Kolkata.",
  },
  {
    href: "/news/tarapro-innovative-FR-clothing-solutions-steal-show-summit-expo",
    img: "/images/news/2023/may/summit-expo/summit-expo-image.webp",
    title: "Tarapro's Innovative FR Clothing Solutions Steal the Show at Summit and Expo 2023 - World of Safety",
    date: "02 May 2023",
    excerpt: "Tarapro recently showcased its cutting-edge range of Arc Flash Protective Clothing at the Summit and Expo 2023 - World of Safety, organized by SAMA with Nesco Events.",
  },
  {
    href: "/news/tarapro-cutting-edge-FR-Workwear-solutions-shines-shecon-expo-2023",
    img: "/images/news/2023/march/shecon-expo/shecon-expo-image.webp",
    title: "Tarapro Cutting-Edge FR Workwear Solutions Shines at SHECON Expo 2023",
    date: "19 March 2023",
    excerpt: "Tarapro, one of India's leading flame-resistant clothing brands, showcased its latest collection at the 13th National Conference on Safety, Health, and Environment (SHE) organized by the National Safety Council, India.",
  },
  {
    href: "/news/tarapro-showcases-innovative-flame-resistant-clothing-range-hindalco-8th-annual-safety-conclave",
    img: "/images/news/2023/feb/hindalco-safety/hindalco-safety-feature-image.webp",
    title: "Tarapro showcases its Innovative Flame-Resistant Clothing Range at Hindalco's 8th Annual Safety Conclave",
    date: "17 February 2023",
    excerpt: "Tarapro recently showcased its latest range of flame-resistant and arc-rated clothing at the 8th Annual Safety Conclave hosted by Hindalco, at Mahan Aluminium in Singrauli, MP.",
  },
  {
    href: "/news/tarapro-participates-6th-edition-of-india-hse-summit",
    img: "/images/news/2022/december/safety-talks/safety-talks-image.webp",
    title: "Tarapro participates in the 6th edition of India HSE Summit and Awards 2022",
    date: "18 December 2022",
    excerpt: "Tarapro recently had the pleasure of attending the 6th edition of the India Health, Safety, and Environment (HSE) Summit and Awards 2022 at Hotel Radisson Blu, Dwarka, New Delhi.",
  },
  {
    href: "/news/tarapro-attends-the-first-edition-safety-talks-jharkhand",
    img: "/images/news/2022/november/jharkand-image/jharkand-image-feature.webp",
    title: "Tarapro attends the first edition of Safety Talks Jharkhand",
    date: "12 November 2022",
    excerpt: "Tarapro recently participated in the first edition of Safety Talks Jharkhand, organized by The Confederation of Indian Industry, on 10 November 2022 at The Alcor Hotel, Jamshedpur.",
  },
  {
    href: "/news/tarapro-participates-mmmm-new-delhi",
    img: "/images/news/2022/august/m-delhi/m-delhi-image.webp",
    title: "Tarapro participates in MMMM 2022 in New Delhi",
    date: "29 August 2022",
    excerpt: "Tarapro participated in the 13th edition of Minerals, Metals, Metallurgy and Materials 2022 (MMMM) held from 25th to 27th August 2022 in New Delhi.",
  },
  {
    href: "/news/tarapro-showcases-smart-fr-solutions-cii-safety-symposium-exposition",
    img: "/images/news/2022/august/cii-exposition/cii-exposition-image.webp",
    title: "Tarapro showcases smart FR solutions at CII's 16th Safety Symposium & Exposition",
    date: "07 August 2022",
    excerpt: "Tarapro recently participated in the 16th Safety Symposium & Exposition organized by the Confederation of Indian Industry (CII) on 4th and 5th of August 2022 at ITC Sonar, Kolkata.",
  },
];

const ITEMS_PER_PAGE = 5;

export default function NewsClient() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = newsItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="bannerSection innrbr newsbnnr">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 no-pad">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5 col-sm-5 no-pad">
                          <div className="bannrTxtbox mobilebnnr">
                            <div className="bannrBox">
                              <h1>News</h1>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                    <img src="/images/news-banner.webp" className="img-responsive visible-lg visible-md" alt="" />
                    <img src="/images/news-banner-ipad.webp" className="img-responsive visible-sm" alt="" />
                    <img src="/images/news-banner-mb.webp" className="img-responsive visible-xs" alt="" />
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="rngsctn prdctbxdtls">
        <div className="container">
          <div className="row">
            <div className="col-md-12 no-pad">

              {currentItems.map((item, index) => (
                <div key={item.href}>
                  <div className="newsbx">
                    <div className="col-md-3 col-sm-6">
                      <div className="nwsimgbx">
                        <a href={item.href}>
                          <img src={item.img} className="img-responsive" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-6">
                      <div className="nwstxtbx">
                        <h3><a href={item.href}>{item.title}</a></h3>
                        <p><a href={item.href}>{item.date}</a></p>
                        <p><a href={item.href}>{item.excerpt}</a></p>
                        <a href={item.href} className="dscvrtxt hvr-sweep-to-right">Read More</a>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  {index < currentItems.length - 1 && <hr className="hr" />}
                </div>
              ))}

              {/* Pagination */}
              <div className="clearfix"></div>
			  
				<div className="bttnpagination">

					<button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&laquo; Prev</button>

					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					  <button className="bttncd" key={page} onClick={() => handlePageChange(page)} >{page} </button>
					))}

					<button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} > Next &raquo; </button>
				</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
