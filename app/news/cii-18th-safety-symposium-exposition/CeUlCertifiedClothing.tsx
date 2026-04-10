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
														<h3>Championing Innovation in Safety at CII 18th Safety Symposium & Exposition</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2024/aug/cii-safety/cii-safety-banner.jpg" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2024/aug/cii-safety/cii-safety-banner-ipad.jpg" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2024/aug/cii-safety/cii-safety-banner-mb.jpg" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Championing Innovation in Safety at CII 18th Safety Symposium & Exposition</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2024/aug/cii-safety/cii-safety-featured-image.jpg" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>25 August 2024</p>
							<p>The 18th edition of the CII Safety Symposium & Exposition, held on August 22-23, 2024, at ITC Sonar, Kolkata provided a wonderful platform for industry leaders to discuss the future of safety in the digital age. The exhibition focused on <strong>Leveraging Digitization for EHS Excellence</strong> as its central theme.</p>
							
							<p>Tarapro reaffirmed its position as a pioneer in <a href="/fr-clothing">FR</a> and arc flash-resistant workwear, particularly for industries such as <a href="/fr-clothing/electrical-arc-flash-clothing">electrical</a>, <a href="/fr-clothing/welder-fr-clothing">welding</a>, and <a href="/fr-clothing/molten-metal-clothing">molten metal</a> works. The team showcased its latest range of protective garments, emphasizing technology integration for enhanced safety and comfort. Our offerings, featuring advanced breathable fabrics and ergonomic designs, resonated strongly with the event's theme of digital innovation in EHS.</p>
						</div>
						
						<div className="col-md-12">
						
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>We are thrilled to be part of this forward-thinking event that aligns perfectly with our mission to create safer workplaces through innovation.</p>
									<h3>Rohit Lohia</h3>
									<h4>Director of Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p>Our participation underscores its commitment to advancing industrial safety standards as the industry evolves with technological advancements. The event concluded with a collective call to embrace digitization while addressing its challenges, ensuring that the pursuit of technological excellence goes hand in hand with the unwavering commitment to worker safety.</p>
							
							<p>We thank the organizers for this rewarding opportunity and look forward to future collaborations.</p>
							
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