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
														<h3>Tarapro showcases smart FR solutions at CII's 16th Safety Symposium & Exposition</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/showcases-news-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/showcases-news-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/showcases-news-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro showcases smart FR solutions at CII's 16th Safety Symposium & Exposition</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2022/august/cii-exposition/cii-exposition-image.webp" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>07 August 2022</p>
							<p>Tarapro recently participated in the <strong>16th Safety Symposium & Exposition organized by the Confederation of Indian Industry</strong> (CII) on 4th and 5th of August 2022 at ITC Sonar, Kolkata.</p>
							<p>The central theme of the initiative was <strong>'Achieving Business Sustainability through Safety Excellence'</strong>. Technology has transformed the safety culture across many sectors and changed the way companies operate. Organizations have moved towards phrasing safety as a core value and focusing not only on the quantity of safety efforts, activities or programs, but also on the quality.</p>
							
						</div>
						<div className="clearfix"></div>
						
						<div className="col-md-12">
						
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>It is indeed heartening to see a sea change in the industry in the last 3 decades. Just like their global peers, even the companies in India are now looking to procure the next generation of protective workwear for their workforce. <strong>Protective clothing is not just about norms and protection any more</strong>.</p>
									<h3>Rohit Lohia</h3>
									<h4>Director of Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>

							<p>The workwear needs to be comfortable for all-day use and allow maximum mobility without compromising on safety. Safety must be collaborative. Platforms like these are important because they break down the barriers between competitors and allow for collaboration and shared experience."</p>
							
							<p><strong>The 2-day programme presented a great opportunity to network with some of the biggest names in the Indian industry and showcase our wide range of fire-resistant garments - from welding and molten metal protection to hi-vis garments and performance wear</strong>. We had a great time interacting with the thought leaders and eminent practicing professionals of the industry and are grateful to CII for giving us the opportunity to contribute to the cause of achieving business sustainability through safety excellence.</p>
							
						</div>
					
						<div className="clearfix"></div>
						
						<h2 className="glrytxt">Gallery</h2>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2022/august/cii-exposition/cii-exposition-image-one.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro showcases smart FR solutions at CII's 16th Safety Symposium & Exposition"><img src="/images/news/2022/august/cii-exposition/cii-exposition-image-one.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2022/august/cii-exposition/cii-exposition-image-two.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro showcases smart FR solutions at CII's 16th Safety Symposium & Exposition"><img src="/images/news/2022/august/cii-exposition/cii-exposition-image-two.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2022/august/cii-exposition/cii-exposition-image-three.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro showcases smart FR solutions at CII's 16th Safety Symposium & Exposition"><img src="/images/news/2022/august/cii-exposition/cii-exposition-image-three.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2022/august/cii-exposition/cii-exposition-image-four.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro showcases smart FR solutions at CII's 16th Safety Symposium & Exposition"><img src="/images/news/2022/august/cii-exposition/cii-exposition-image-four.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2022/august/cii-exposition/cii-exposition-image-five.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro showcases smart FR solutions at CII's 16th Safety Symposium & Exposition"><img src="/images/news/2022/august/cii-exposition/cii-exposition-image-five.webp" className="img-responsive" alt=""/>
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