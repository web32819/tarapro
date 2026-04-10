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
														<h1>News</h1>
														<h3>Tarapro participates in the 6th edition of India HSE Summit and Awards 2022</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/hse-news-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/hse-news-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/hse-news-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro participates in the 6th edition of India HSE Summit and Awards 2022</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2022/december/safety-talks/safety-talks-image.webp" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>18 December 2022</p>
							<p>Tarapro recently had the pleasure of attending the 6th edition of the <strong>India Health, Safety, and Environment (HSE) Summit and Awards 2022.</strong> The illustrious event was held at Hotel Radisson Blu, Dwarka, New Delhi, spanning 15th and 16th of December 2022. We were honored to have been <strong>one of the sponsors of this prestigious summit hosted by Synnex Group</strong>, which produces over 100 training and conferences annually, both in the region and internationally.</p>
							<p>The India HSE Summit 2022, saw a distinguished congregation of HSE professionals from across the industry who converged to share their knowledge on the future of HSE practices. The summit was set to the theme of <strong>HSE Excellence with Leadership, Sustainability, and Technology</strong> as the core components of the show.</p>
						</div>
						<div className="clearfix"></div>
						
						<div className="col-md-12"> 
							<p>The India HSE Summit 2022 provided an inimitable platform for Corporates, government representatives, project owners, international service companies, contractors, consultants, and investors to explore the current business landscape and maximize the potential opportunities in the HSE sector. It was a prized opportunity for brands to generate sales leads, showcase new and existing products to an informed audience, improve market penetration discover new audiences, and meet prospects for beneficial business alliances.</p>
							
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>Being the <strong>foremost manufacturer and supplier of workplace fire-safety gear in India</strong>, we are at the core of the collective industrial concern about safety in work environments, and therefore relished this opportunity to showcase our latest advancements in PPE clothing that ensures safety best practices in hazard-prone industries. As co-sponsors, we are grateful for the exposure that summits like these provide for our <strong>newest and ambitious innovations in categories such as high-quality Flame Retardant and Arc-Rated Protective clothing as well as non-FR uniforms</strong>.</p>
									<h3>Vijay Atre</h3>
									<h4>Marketing Manager (Maharashtra & Goa Region), Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p><strong>Spread over two days, talk subjects by thought leaders included: Behaviour-based Safety, Innovative Digital Technology, and its impact on workplace safety, Frontline worker safety, Fire safety prevention and management, Wearable Technology, and Top Management’s take on hazard control</strong>. The summit concluded on Day 2 (Dec 16th) by recognizing excellence in corporate HSE practices with the HSE Awards ceremony.</p>
							
							<p>The Tarapro team thanks the organizers for the unique opportunity to be a part of this prestigious summit and make meaningful contributions toward improving India’s HSE workplace culture.</p>
							
						</div>
						
						<div className="clearfix"></div>
						
						<h2 className="glrytxt">Gallery</h2>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2022/december/safety-talks/safety-talks-image-one.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro participates in the 6th edition of India HSE Summit and Awards 2022"><img src="/images/news/2022/december/safety-talks/safety-talks-image-one.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2022/december/safety-talks/safety-talks-image-two.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro participates in the 6th edition of India HSE Summit and Awards 2022"><img src="/images/news/2022/december/safety-talks/safety-talks-image-two.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2022/december/safety-talks/safety-talks-image-three.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro participates in the 6th edition of India HSE Summit and Awards 2022"><img src="/images/news/2022/december/safety-talks/safety-talks-image-three.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2022/december/safety-talks/safety-talks-image-four.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro participates in the 6th edition of India HSE Summit and Awards 2022"><img src="/images/news/2022/december/safety-talks/safety-talks-image-four.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2022/december/safety-talks/safety-talks-image-five.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro participates in the 6th edition of India HSE Summit and Awards 2022"><img src="/images/news/2022/december/safety-talks/safety-talks-image-five.webp" className="img-responsive" alt=""/>
							</a>
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