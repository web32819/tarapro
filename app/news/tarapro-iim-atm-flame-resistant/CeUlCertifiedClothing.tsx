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
														<h3>Tarapro Shines at IIM-ATM 2024 with Cutting-Edge Flame Resistant Solutions</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2024/nov/iim-atm/IIM-ATM-banner.jpg" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2024/nov/iim-atm/IIM-ATM-banner-ipad.jpg" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2024/nov/iim-atm/IIM-ATM-banner-mb.jpg" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro Shines at IIM-ATM 2024 with Cutting-Edge Flame Resistant Solutions</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2024/nov/iim-atm/IIM-ATM-featured-image.jpg" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>20 November 2024</p>
							<p>IIM-ATM 2024, the 78th Annual Technical Meeting of the Indian Institute of Metals, held from the 20th to the 22nd of November at GKVK in Bangalore, has been an incredible experience, bringing together global leaders, experts and professionals from the fields of metallurgy, materials science and manufacturing. This flagship event explored the latest advancements in materials technology and their applications across various industries, focusing on sustainable and transformative solutions.</p>
							
							<p>Our team showcased advanced <a href="/fr-clothing">flame-resistant clothing</a> solutions tailored for the rigorous demands of the metal industry. With the symposium’s focus on advancements in metallurgy, it was the ideal platform to highlight our innovative welding range, designed to protect against molten metal splashes. This event underscored our commitment to safety, innovation, and the future of high-performance protective wear for industrial applications.</p>
							
						</div>
						
						<div className="col-md-12">
							
							<p>Our booth at IIM-ATM 2024 became a standout attraction as visitors explored our cutting-edge flame-resistant clothing solutions, designed to enhance safety in hazardous metal industry environments. Featuring advanced fabric technologies and ergonomic designs, our products deliver top-tier protection against molten metal splashes while ensuring exceptional comfort and durability. Engaging demonstrations and insightful discussions with attendees left them impressed by the versatility and reliability of Tarapro’s solutions.</p>
							
							<p>We sincerely thank everyone who visited our stall, engaged with us, and explored our solutions. A big thanks to the event organizers for fostering such a vibrant and collaborative atmosphere. Tarapro remains committed to advancing safety in high-risk industries and supporting innovation in materials and manufacturing technologies.</p>
						</div>
						
						<div className="clearfix"></div>

						<div className="col-md-12"><h2 className="glrytxt">Gallery</h2></div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/nov/iim-atm/gallery/1.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at IIM-ATM 2024 with Cutting-Edge Flame Resistant Solutions"><img src="/images/news/2024/nov/iim-atm/gallery/1.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/nov/iim-atm/gallery/2.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at IIM-ATM 2024 with Cutting-Edge Flame Resistant Solutions"><img src="/images/news/2024/nov/iim-atm/gallery/2.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/nov/iim-atm/gallery/3.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at IIM-ATM 2024 with Cutting-Edge Flame Resistant Solutions"><img src="/images/news/2024/nov/iim-atm/gallery/3.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/nov/iim-atm/gallery/4.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at IIM-ATM 2024 with Cutting-Edge Flame Resistant Solutions"><img src="/images/news/2024/nov/iim-atm/gallery/4.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/nov/iim-atm/gallery/5.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at IIM-ATM 2024 with Cutting-Edge Flame Resistant Solutions"><img src="/images/news/2024/nov/iim-atm/gallery/5.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/nov/iim-atm/gallery/6.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at IIM-ATM 2024 with Cutting-Edge Flame Resistant Solutions"><img src="/images/news/2024/nov/iim-atm/gallery/6.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/nov/iim-atm/gallery/7.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at IIM-ATM 2024 with Cutting-Edge Flame Resistant Solutions"><img src="/images/news/2024/nov/iim-atm/gallery/7.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/nov/iim-atm/gallery/8.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at IIM-ATM 2024 with Cutting-Edge Flame Resistant Solutions"><img src="/images/news/2024/nov/iim-atm/gallery/8.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/nov/iim-atm/gallery/9.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at IIM-ATM 2024 with Cutting-Edge Flame Resistant Solutions"><img src="/images/news/2024/nov/iim-atm/gallery/9.jpg" className="img-responsive" alt=""/>
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