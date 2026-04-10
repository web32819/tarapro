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
											<div className="col-md-7 col-sm-10">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1>News</h1>
														<h3>Tarapro, one of India's leading flame-resistant clothing brands, showcased its latest collection at the 13th National Conference on Safety, Health, and Environment (SHE) organized by the National Safety Council, India</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2023/march/shecon-expo/shecon-expo-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2023/march/shecon-expo/shecon-expo-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2023/march/shecon-expo/shecon-expo-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro Cutting-Edge FR Workwear Solutions Shines at SHECON Expo 2023</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2023/march/shecon-expo/shecon-expo-image.webp" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>19 March 2023</p>
							<p>Tarapro, one of India's leading flame-resistant clothing brands, showcased its latest collection at the <strong>13th National Conference on Safety, Health, and Environment (SHE) organized by the National Safety Council, India</strong>. The event was a two-day affair that brought together HSE executives from across the country to discuss the latest developments in workplace safety and health, environmental protection, and industrial hygiene. It ended with an award function that was graced by Smt. Sneha Gitte, IAS, Deputy Commissioner, State Taxes, Goa.</p>
							
							<p>In today's competitive and evolving landscape, SHE responsibilities are no longer confined to SHE managers alone. By regularly discussing safety with their teams and engaging in related matters, managers increase the likelihood that safety will indeed bring greater value to the business. Industry experts and keynote speakers shared their insights on various topics, including industrial safety, employee wellness, hazard identification and risk management.</p>
						</div>
						
						<div className="col-md-12">
							<p><strong>From FR Jackets and Trousers to <a href="/fr-clothing/performance-wear-clothing">Performance Workwear</a>, Tarapro showcased its cutting-edge workwear solutions for use in hazard-prone industries such as <a href="/fr-clothing/molten-metal-clothing">Metals</a>, <a href="/fr-clothing/oil-gas-fr-clothing">Oil and Gas</a>, <a href="/fr-clothing/electrical-arc-flash-clothing">Electrical</a> and others</strong>. The team present interacted with the attendees and provided insights on how to choose the right protective wear for different job roles. The company, having redefined the industry's approach to Fire Resistant Clothing, has expertise in designing workwear that ensures high visibility of workers, answering clients' design preferences while also adhering to strict safety protocols.</p>
							
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>It was an incredible opportunity to connect with industry professionals and showcase the innovative features of our products. <strong>The feedback we received from attendees was overwhelmingly positive, and we're excited to continue providing top-quality protective clothing to keep workers safe on the job</strong>.</p>
									<h3>Vijay Atre</h3>
									<h4>Area Sales Manager, Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p>Tarapro's participation in SHECON Expo 2023 underscores its commitment to promoting workplace safety and health in India. The team would like to extend its gratitude to the National Safety Council for curating an unparalleled experience to discuss new perspectives on global industry trends, reach relevant audiences and discover opportunities in business networking.</p>
							
						</div>
						
						<div className="clearfix"></div>
						
						<h2 className="glrytxt">Gallery</h2>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/march/shecon-expo/1.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro Cutting-Edge FR Workwear Solutions Shines at SHECON Expo 2023"><img src="/images/news/2023/march/shecon-expo/1.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/march/shecon-expo/2.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro Cutting-Edge FR Workwear Solutions Shines at SHECON Expo 2023"><img src="/images/news/2023/march/shecon-expo/2.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/march/shecon-expo/3.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro Cutting-Edge FR Workwear Solutions Shines at SHECON Expo 2023"><img src="/images/news/2023/march/shecon-expo/3.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/march/shecon-expo/4.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro Cutting-Edge FR Workwear Solutions Shines at SHECON Expo 2023"><img src="/images/news/2023/march/shecon-expo/4.webp" className="img-responsive" alt=""/>
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