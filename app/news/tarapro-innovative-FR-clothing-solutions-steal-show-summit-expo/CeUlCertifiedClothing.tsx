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
														<h3>Tarapro recently showcased its cutting-edge range of Arc Flash Protective Clothing at the Summit and Expo 2023 - World of Safety, organized by SAMA with Nesco Events and in coordination with the Directorate of Industrial Safety and Health (DISH).</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2023/may/summit-expo/summit-expo-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2023/may/summit-expo/summit-expo-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2023/may/summit-expo/summit-expo-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item"><a href="/index">Home</a></li>
								<li className="breadcrumb-item"><a href="/news">News</a></li>
								<li className="breadcrumb-item active" aria-current="page">Tarapro's Innovative FR Clothing Solutions Steal the Show at Summit and Expo 2023 - World of Safety</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2023/may/summit-expo/summit-expo-image.webp" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>02 May 2023</p>
							<p>Tarapro recently showcased its <strong>cutting-edge range of <a href="/arc-flash-suit">Arc Flash Protective Clothing</a></strong> at the Summit and Expo 2023 - World of Safety, organized by SAMA with Nesco Events and in coordination with the Directorate of Industrial Safety and Health (DISH). The event was <strong>inaugurated by Shri Suresh Khade, Minister of Labour, Maharashtra</strong> and focused on <strong>promoting the safety of industrial workers and creating an everlasting safe environment in Maharashtra and PAN India</strong>.</p>
							
							<p>With an unwavering commitment to promoting safety in the workplace, <strong>Tarapro also highlighted its range of <a href="/fr-clothing">flame-resistant clothing</a> designed for <a href="/fr-clothing/oil-gas-fr-clothing">Oil & Gas</a>, <a href="/fr-clothing/molten-metal-clothing">Steel</a>, and other industries</strong>. The brand's innovative products provide superior protection against potential hazards, emphasizing the importance of creating a safety culture at the ground level.</p>
							
							<p>The summit aimed to create awareness and solutions that help establish a safety-first approach in all industrial settings. It emphasized the importance of zero accidents in factories and strategically implementing safety measures to achieve fruitful results.</p>

						</div>
						
						<div className="col-md-12">
							
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>We are committed to providing innovative and high-quality FR solutions that promote a culture of safety and protection for workers across India.</p>
									<h3>Shiv Pratap Singh Chauhan</h3>
									<h4>Area Sales Manager (Gujarat), Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>

							<p>The 2-day programme presented a great opportunity to network with some of the biggest names in the Indian industry and showcase our wide range of Arc Flash and FR workwear solutions. We had a great time <strong>interacting with the thought leaders and eminent practicing professionals of the industry</strong> and are grateful to SAMA for giving us the opportunity to contribute to the cause of achieving business sustainability through safety excellence.</p>
							
						</div>
						
						<div className="clearfix"></div>

						<h2 className="glrytxt">Gallery</h2>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/may/summit-expo/summit-expo-image-1.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro's Innovative FR Clothing Solutions Steal the Show at Summit and Expo 2023 - World of Safety"><img src="/images/news/2023/may/summit-expo/summit-expo-image-1.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/may/summit-expo/summit-expo-image-2.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro's Innovative FR Clothing Solutions Steal the Show at Summit and Expo 2023 - World of Safety"><img src="/images/news/2023/may/summit-expo/summit-expo-image-2.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/may/summit-expo/summit-expo-image-3.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro's Innovative FR Clothing Solutions Steal the Show at Summit and Expo 2023 - World of Safety"><img src="/images/news/2023/may/summit-expo/summit-expo-image-3.webp" className="img-responsive" alt=""/>
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