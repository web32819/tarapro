'use client';
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

// Add this at the top
declare global {
  interface Window {
    $: any;
  }
}

export default function CeUlCertifiedClothing() {
	useEffect(() => {
    const interval = setInterval(() => {
      if (window.$ && window.$.fn.imageLightbox) {
        window.$('a[data-imagelightbox="demo"]').imageLightbox({
          selector: 'a[data-imagelightbox]',
          id: 'imagelightbox',
          allowedTypes: 'webp|png|jpg|jpeg|gif',
          animationSpeed: 250,
          activity: true,
          arrows: true,
          button: true,
          caption: true,
          enableKeyboard: true,
          lockBody: false,
          navigation: true,
          overlay: true,
          preloadNext: true,
          quitOnEnd: false,
          quitOnImgClick: false,
          quitOnDocClick: true,
          quitOnEscKey: true
        });

        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

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
											<div className="col-md-6 col-sm-7">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1 className="">News</h1>
														<h3>Tarapro participates in MMMM 2022 in New Delhi</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/delhi-news-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/delhi-news-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/delhi-news-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="innrsctn newscntnt">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
					
						<nav aria-label="breadcrumb" className="visible-lg visible-md visible-sm">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="/">Home</a></li>
								<li className="breadcrumb-item"><a href="/news">News</a></li>
								<li className="breadcrumb-item active" aria-current="page">Tarapro participates in MMMM 2022 in New Delhi</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2022/august/m-delhi/m-delhi-image.webp" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>29 August 2022</p>
							<p>Tarapro participated in the 13th edition of <strong>Minerals, Metals, Metallurgy and Materials 2022</strong> (MMMM) held from 25th to 27th August 2022 in New Delhi.</p>
							<p>MMMM is one of the most significant events in the Indian Minerals, Metals, and Materials market and serves as an <strong>ideal B2B platform for entrepreneurs, CEOs, consultants, senior government officials, decision-makers, and trade delegations to congregate, brainstorm, showcase, and forge meaningful business partnerships</strong>. This occasion provides an excellent opportunity for interacting with luminaries from all corners of the globe, promoting business and catalyzing the growth & development of Minerals, Metals, Metallurgy, and Materials industries in the country through joint ventures, investments, and technology transfer. The event affords the chance to learn about the latest developments, and innovations and allows direct interaction with industry peers.</p>
						</div>
						<div className="clearfix"></div>
						
						<div className="col-md-12"> 

							<p>As the largest manufacturer and supplier of Flame Resistant protective clothing in India, we, at Tarapro leveraged the unique possibilities of the event to highlight our best-in-className CE Certified Protective FR Workwear for the Mining and Metals Industry. <strong>Our Category 4 arc flash work wear, Vallum, made from FR lightweight material that offers a sophisticated look and optimal safety from fire hazards, was one of the showstoppers at the expo</strong>. The 40 Cal protection provided by Vallum especially interested the steel manufacturing companies which have significant amounts of electrical and power-related operations within their facilities.</p>

							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p><strong>Our presence at MMMM has been a fitting way to celebrate 30 years in the FR work-wear industry and our rise to become India’s largest player in the segment</strong>. We relished every opportunity to hobnob with like-minded industry leaders, policy-makers, and other visitors. The expo has also allowed us to highlight our latest innovations in protective clothing to an informed audience.</p>
									<h3>Mr. Rohit Lohia</h3>
									<h4>Director, Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p><strong>Shri Jyotiraditya M. Scindia, Honorable Minister of Steel, Govt. of India</strong> inaugurated the event in presence of <strong>Shri Sanjay Kumar Singh, Secretary, Ministry of Steel, Govt. of India</strong> apart from prominent names in the steel and allied industries.</p>
							
							<p>The Tarapro team would like to extend its gratitude to the organizers for curating an unparalleled experience to discuss new perspectives on global industry trends, reach relevant audiences and discover opportunities in business networking.</p>
						</div>
					
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>

		<Script src="/js/imagelightbox.min.js" strategy="afterInteractive"/>
		
	</>
);
}