"use client";

import { useState } from "react";

const eventItems = [
  {
    img: "/images/events/2025/sep/fire-india/fire-india-feature-image.jpg",
    title: "Fire India 2025",
    details: { Date: "25th – 27th September 2025", "Stall No": "D22", Location: "Bombay Exhibition Centre, Nesco, Mumbai" },
    storyHref: "/news/tarapro-september-expo-tour-2025",
  },
  
  {
    img: "/images/events/2025/sep/osh-india/osh-india-feature-image.jpg",
    title: "OSH India 2025",
    details: { Date: "16th – 18th September 2025", "Hall No.": "06", "Booth No": "G20", Location: "Bombay Exhibition Centre, Goregaon East, Mumbai" },
    storyHref: "/news/tarapro-september-expo-tour-2025",
  },
  
  {
    img: "/images/events/2025/aug/cii-safety/cii-safety-feature-image.jpg",
    title: "CII - 19th Safety Symposium & Exposition (Eastern Region)",
    details: { Date: "11th – 12th September 2025", "Stall No": "1 & 2", Location: "Mumbai Exhibition Centre, Mumbai" },
    storyHref: "/news/tarapro-india-steel-expo-25",
  },
  
  {
    img: "/images/events/2025/april/india-steel/india-steel-featured-img.jpg",
    title: "India Steel Expo",
    details: { Date: "24th - 26th April 2025", "Stall No": "A06", Location: "Mumbai Exhibition Centre, Mumbai" },
    storyHref: "/news/tarapro-india-steel-expo-25",
  },
  
  {
    img: "/images/events/2025/march/icfarefcon/icfarefcon-featured.jpg",
    title: "ICFAREFCON",
    details: { Date: "7th - 8th March 2025", "Stall No": "E1", Location: "Biswa Bangla Convention Centre, Kolkata" },
    storyHref: "/news/icfarefcon-exhibition-steel-mettalurgy",
  },
  
  {
    img: "/images/events/2025/feb/elecrama/elecrama-featured.jpg",
    title: "Elecrama 2025",
    details: { Date: "22nd - 26th February 2025", "Stall No": "B26", "Hall No.": "H1A", Location: "India Expo Mart, Greater Noida" },
    storyHref: "/news/tarapro-shines-elecrama-25",
  },
  
  {
    img: "/images/events/2024/nov/iim-atm/iim-atm-featured.jpg",
    title: "IIM - ATM 2024",
    details: { Date: "20th - 22nd November 2024", "Stall No": "13", Location: "Gandhi Krishi Vignana Kendra (GKVK), Bengaluru" },
    storyHref: "/news/tarapro-iim-atm-flame-resistant",
  },
  
  {
    img: "/images/events/2024/sep/fire-india/fire-india-featured.jpg",
    title: "Fire India 2024 Exhibition",
    details: { Date: "26th - 28th September 2024", "Stall No": "D22", Location: "Yashobhoomi, IICC, Dwarka, New Delhi" },
    storyHref: "/news/fire-india-exhibition-2024",
  },
  
  {
    img: "/images/events/2024/aug/cii-safety/Tarapro-CII-featured.jpg",
    title: "CII-18th Safety Symposium & Exposition Eastern Region",
    details: { Date: "22nd - 23rd August 2024", "Stall No": "1&2", Location: "ITC Sonar, Kolkata" },
    storyHref: "/news/cii-18th-safety-symposium-exposition",
  },
  
  {
    img: "/images/events/2024/june/osh-india/osh-india-image-featured.jpg",
    title: "OSH India South",
    details: { Date: "27th-28th June 2024", "Booth No": "A25", Location: "Bengaluru International Exhibition Centre, Bengaluru" },
    storyHref: "/news/tarapro-showcases-cutting-edge-flame-resistant-innovations-osh-india-south-2024",
  },
  
  {
    img: "/images/events/2024/feb/safety-summit/World-of-Safety-Summit-And-Expo-2024-featured.jpg",
    title: "World of Safety Summit and Expo 2024",
    details: { Date: "5th-6th February 2024", "Stall No": "C12", Location: "Nesco Centre, Goregaon (East)" },
    storyHref: "/news/tarapro-makes-waves-CII-enterprise-odisha-world-safety-summit",
  },
  
  {
    img: "/images/events/2024/jan/enterprise-odisha/enterprise-odisha-banner.jpg",
    title: "CII Enterprise Odisha",
    details: { Date: "19th-21st January 2024", "Stall No": "B3 & B4", Location: "Circuit House Road Ground, Jharsuguda" },
    storyHref: "/news/tarapro-makes-waves-CII-enterprise-odisha-world-safety-summit",
  },
  
  {
    img: "/images/events/2023/november/safety-symposium/safety-symposium-banner.jpg",
    title: "CII Jharkhand Safety Symposium and Exposition",
    details: { Date: "3rd November 2023", "Stall No": "10", Location: "The Cruze, Jamshedpur" },
    storyHref: "/news/tarapro-pioneering-safety-solutions-innovations",
  },
  
  {
    img: "/images/events/2023/november/osh-market/osh-market-banner.jpg",
    title: "OSH INDIA",
    details: { Date: "23rd - 25th November 2023", "Hall No.": "04", Location: "Bombay Exhibition Centre Goregaon" },
    storyHref: "/news/tarapro-pioneering-safety-solutions-innovations",
  },
  {
    img: "/images/events/2023/november/conference-metal/conference-metal-banner.jpg",
    title: "IIM - ATM 2023",
    details: { Date: "22nd - 24th November 2023", "Hall No.": "04", Location: "KIIT, Bhubaneswar" },
    storyHref: "/news/tarapro-pioneering-safety-solutions-innovations",
  },
  
  {
    img: "/images/events/2023/august/safety-symposium/safety-symposium-banner.jpg",
    title: "17th Safety Symposium & Exposition",
    details: { Date: "22nd - 23rd August 2023", "Stall No": "1 & 2", Location: "ITC Sonar, Kolkata" },
    storyHref: "/news/tarapro-17th-safety-symposium-exposition",
  },
  {
    img: "/images/events/2023/april/summit-expo/summit-expo-banner.webp",
    title: "Summit And Expo 2023 - World Of Safety",
    details: { Date: "27th - 28th April 2023", "Booth No": "C-24 & C-19", "Hall No.": "04", Location: "NESCO Center, Goregaon (East)" },
    storyHref: "/news/tarapro-innovative-FR-clothing-solutions-steal-show-summit-expo",
  },
  
  {
    img: "/images/events/2023/march/she-con-image/she-con-web-banner.webp",
    title: "NSCI's 13th National Conference and Exhibition on SHE",
    details: { Date: "16th - 17th March 2023", "Stall No": "07 & 08", Location: "Taleigao Community Centre, Caranzalem, Panjim, Goa" },
    storyHref: "/news/tarapro-cutting-edge-FR-Workwear-solutions-shines-shecon-expo-2023",
  },
  
  {
    img: "/images/events/2022/december/summit-award/summit-award-feature-image.webp",
    title: "India Health, Safety, and Environment (HSE) Summit and Awards",
    details: { Date: "15th - 16th December 2022", "Stall No": "09", Location: "Hotel Radisson Blu, Dwarka, New Delhi" },
    storyHref: "/news/tarapro-participates-6th-edition-of-india-hse-summit",
  },
  
  {
    img: "/images/events/2022/november/safety-jharkand/safety-jharkand-feature-image.webp",
    title: "CII Safety Talks Jharkhand",
    details: { Date: "10th November 2022", Location: "The Alcor Hotel, Jamshedpur" },
    storyHref: "/news/tarapro-attends-the-first-edition-safety-talks-jharkhand",
  },
  
  {
    img: "/images/events/2022/august/materials/materials-feature-image.webp",
    title: "Minerals, Metals, Metallurgy and Materials (MMMM)",
    details: { Date: "25th - 27th August 2022", "Stall No": "M-130 (Hall 03)", Location: "Pragati Maidan, New Delhi" },
    storyHref: "/news/tarapro-participates-mmmm-new-delhi",
  },
  
  {
    img: "/images/events/2022/august/exposition/exposition-feature-image.webp",
    title: "16th Safety Symposium & Exposition",
    details: { Date: "4th - 5th August 2022", "Stall No": "02", Location: "ITC Sonar, Kolkata" },
    storyHref: "/news/tarapro-showcases-smart-fr-solutions-cii-safety-symposium-exposition",
  },
];

const ITEMS_PER_PAGE = 4;

export default function EventsClient() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(eventItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = eventItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
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
                              <h1>Events</h1>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                    <img src="/images/events-banner.webp" className="img-responsive visible-lg visible-md" alt="" />
                    <img src="/images/events-banner-ipad.webp" className="img-responsive visible-sm" alt="" />
                    <img src="/images/events-banner-mb.webp" className="img-responsive visible-xs" alt="" />
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

              {currentItems.map((event, index) => (
                <div key={index}>
                  <div className="newsbx">
                    <div className="col-md-3 col-sm-6">
                      <div className="nwsimgbx">
                        <img src={event.img} className="img-responsive" alt="" />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-6">
                      <div className="nwstxtbx">
                        <h3><strong>{event.title}</strong></h3>
                        <p>
                          {Object.entries(event.details).map(([key, value]) => (
                            <span key={key}>
                              <strong>{key}:</strong> {value}<br />
                            </span>
                          ))}
                        </p>
                        <a href={event.storyHref} className="dscvrtxt hvr-sweep-to-right btn btn-primary">
                          View Story
                        </a>
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

					<button className="prvsbttn" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&laquo; Prev</button>

					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					  <button className="bttncd" key={page} onClick={() => handlePageChange(page)} >{page} </button>
					))}

					<button className="nextbttn" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} > Next &raquo; </button>
				</div>
				<div className="clearfix"></div>
			</div>
          </div>
        </div>
      </section>
    </>
  );
}