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
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <>
		<Head>
			<title>News - ICFAREFCON exhibition by Steel & Metallurgy</title>
			
			<meta name="description" content="We were proud to be part of ICFAREFCON 2025, an incredible two-day event that brought together pioneers from the steel and refractory industries"/>
			
			<meta name="keywords" content=""/>
			
			<meta name="author" content="Tarapro" />

			{/* Open Graph / Social */}
			<meta property="og:url" content={`${baseUrl}/news/icfarefcon-exhibition-steel-mettalurgy`} />
			<meta property="og:type" content="news" />
			<meta property="og:title" content="ICFAREFCON exhibition by Steel & Metallurgy"/>
			<meta property="og:description" content="We were proud to be part of ICFAREFCON 2025, an incredible two-day event that brought together pioneers from the steel and refractory industries"/>
			<meta property="og:image" content="https://www.taralohia.com/images/news/2025/march/icfarefcon/icfarefcon-featured-image.jpg" />
		</Head>
		
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
														<h3>ICFAREFCON exhibition by Steel & Metallurgy</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2025/march/icfarefcon/icfarefcon-banner.jpg" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2025/march/icfarefcon/icfarefcon-banner-ipad.jpg" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2025/march/icfarefcon/icfarefcon-banner-mb.jpg" className="img-responsive visible-xs" alt=""/>
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
					<div className="col-md-12 no-pad">
					
						<nav aria-label="breadcrumb" className="visible-lg visible-md visible-sm">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="/">Home</a></li>
								<li className="breadcrumb-item"><a href="/news">News</a></li>
								<li className="breadcrumb-item active" aria-current="page">ICFAREFCON exhibition by Steel & Metallurgy</li>
							</ol>
						</nav>
						
						<div className="col-md-3">
							<img src="/images/news/2025/march/icfarefcon/icfarefcon-featured-image.jpg" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-9">
							<p>13 March 2025</p>
							<p>We were proud to be part of ICFAREFCON 2025, an incredible two-day event that brought together pioneers from the steel and refractory industries. Held at the Biswa Bangla Convention Centre, the event provided an excellent platform for us to showcase our latest flame-resistant and arc-flash protective solutions. The response at our stall was truly overwhelming, with engaging conversations, meaningful collaborations, and valuable insights shared. A big thank you to Steel and Metallurgy for organizing such a dynamic event and to everyone who visited us—we’re excited for what the future holds!</p>
						</div>

						<div className="clearfix"></div>

						<div className="col-md-12"><h2 className="glrytxt">Gallery</h2></div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/march/icfarefcon/large/1.jpg" data-imagelightbox="demo" data-ilb2-caption="ICFAREFCON exhibition by Steel & Mettalurgy"><img src="/images/news/2025/march/icfarefcon/large/1.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/march/icfarefcon/large/2.jpg" data-imagelightbox="demo" data-ilb2-caption="ICFAREFCON exhibition by Steel & Mettalurgy"><img src="/images/news/2025/march/icfarefcon/large/2.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/march/icfarefcon/large/3.jpg" data-imagelightbox="demo" data-ilb2-caption="ICFAREFCON exhibition by Steel & Mettalurgy"><img src="/images/news/2025/march/icfarefcon/large/3.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/march/icfarefcon/large/4.jpg" data-imagelightbox="demo" data-ilb2-caption="ICFAREFCON exhibition by Steel & Mettalurgy"><img src="/images/news/2025/march/icfarefcon/large/4.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/march/icfarefcon/large/5.jpg" data-imagelightbox="demo" data-ilb2-caption="ICFAREFCON exhibition by Steel & Mettalurgy"><img src="/images/news/2025/march/icfarefcon/large/5.jpg" className="img-responsive" alt=""/>
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