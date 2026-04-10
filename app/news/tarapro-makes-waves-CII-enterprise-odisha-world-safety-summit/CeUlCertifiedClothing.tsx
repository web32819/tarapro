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
														<h3>Tarapro Makes Waves at CII Enterprise Odisha and World of Safety Summit</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2024/feb/symposium/symposium-banner.jpg" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2024/feb/symposium/symposium-banner-ipad.jpg" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2024/feb/symposium/symposium-banner-mb.jpg" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro Makes Waves at CII Enterprise Odisha and World of Safety Summit</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2024/feb/symposium/symposium-featured-image.jpg" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>12 February 2024</p>
							<p>Tarapro recently participated in two major events - the CII Enterprise at Jharsuguda, Odisha, and the World of Safety Summit & Expo 2024 at Goregaon, Mumbai, actively weaving a narrative of progress and protection through our cutting-edge solutions and unwavering commitment to worker well-being.</p>
							<h4>CII Odisha, 19-21 January 2024, Jharsuguda, Odisha</h4>
							<p>At CII Odisha, we embodied the event's theme of "Connecting MSMEs to Opportunities." Our booth buzzed with lively conversations as CEOs, procurement managers, and government officials discovered the comfort and robustness of our FR & arc-rated garments, engineered for the most challenging industrial environments. There was excellent participation in the safety equipment space. We were delighted to showcase our expertise in the subject and empower attendees with practical knowledge, igniting a collective passion for worker protection.</p>
						</div>
						
						<div className="col-md-12">
							<h4>World of Safety Summit, 5-6 February 2024, Mumbai</h4>
							<p>Safety professionals, health & safety officers, and disaster management experts from different industries were given a taste of the variety of our workwear and our technical prowess. Being the financial capital of the country, the event was abuzz with some of the biggest names in the industry and it was an excellent opportunity for us to connect with them and initiate discussions on achieving zero accidents at the workplace.</p>
							
							<p>Our comprehensive portfolio, addressing critical needs for molten metal, welding, and arc flash protection, garnered significant interest from key industry players across diverse sectors, including metal & mining, oil & gas, and various manufacturing industries. We highlighted our latest advancements in FR technology, featuring breathable fabrics and ergonomic designs that enhance worker comfort in working environments.</p>

							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>The focus on safety excellence at both the events resonated with our values. We believe that the future of workwear lies in intelligent design, comfort, and cutting-edge technology, ensuring maximum protection without compromising on mobility.</p>
									<h3>Santanu Barua</h3>
									<h4>Manager – Sales & Marketing, Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p>Tarapro's impact extended far beyond product displays. Our dedication to excellence in worker safety left a lasting impression on attendees in both Jharsuguda and Mumbai. We are grateful to the organisers for curating these holistic events and look forward to participating in future editions, contributing to this shared mission of building a safer world.</p>
							
						</div>
						
						<div className="clearfix"></div>

						<div className="col-md-12"><h2 className="glrytxt">Gallery</h2></div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/feb/symposium/gallery/symposium-image-one.jpg" data-imagelightbox="demo" data-ilb2-caption="World of Safety Summit"><img src="/images/news/2024/feb/symposium/gallery/symposium-image-one.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>World of Safety</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/feb/symposium/gallery/symposium-image-two.jpg" data-imagelightbox="demo" data-ilb2-caption="World of Safety Summit"><img src="/images/news/2024/feb/symposium/gallery/symposium-image-two.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>World of Safety</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/feb/symposium/gallery/symposium-image-three.jpg" data-imagelightbox="demo" data-ilb2-caption="World of Safety Summit"><img src="/images/news/2024/feb/symposium/gallery/symposium-image-three.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>World of Safety</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/feb/symposium/gallery/symposium-image-four.jpg" data-imagelightbox="demo" data-ilb2-caption="World of Safety Summit"><img src="/images/news/2024/feb/symposium/gallery/symposium-image-four.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>World of Safety</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/feb/symposium/gallery/symposium-image-five.jpg" data-imagelightbox="demo" data-ilb2-caption="World of Safety Summit"><img src="/images/news/2024/feb/symposium/gallery/symposium-image-five.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>World of Safety</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/feb/symposium/gallery/symposium-image-six.jpg" data-imagelightbox="demo" data-ilb2-caption="World of Safety Summit"><img src="/images/news/2024/feb/symposium/gallery/symposium-image-six.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>World of Safety</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/feb/symposium/gallery/symposium-image-seven.jpg" data-imagelightbox="demo" data-ilb2-caption="World of Safety Summit"><img src="/images/news/2024/feb/symposium/gallery/symposium-image-seven.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>World of Safety</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/feb/symposium/gallery/symposium-image-eight.jpg" data-imagelightbox="demo" data-ilb2-caption="World of Safety Summit"><img src="/images/news/2024/feb/symposium/gallery/symposium-image-eight.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>World of Safety</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/feb/symposium/gallery/symposium-image-nine.jpg" data-imagelightbox="demo" data-ilb2-caption="CII Enterprise Odisha"><img src="/images/news/2024/feb/symposium/gallery/symposium-image-nine.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>CII Enterprise Odisha</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/feb/symposium/gallery/symposium-image-ten.jpg" data-imagelightbox="demo" data-ilb2-caption="CII Enterprise Odisha"><img src="/images/news/2024/feb/symposium/gallery/symposium-image-ten.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>CII Enterprise Odisha</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/feb/symposium/gallery/symposium-image-eleven.jpg" data-imagelightbox="demo" data-ilb2-caption="CII Enterprise Odisha"><img src="/images/news/2024/feb/symposium/gallery/symposium-image-eleven.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>CII Enterprise Odisha</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/feb/symposium/gallery/symposium-image-twelve.jpg" data-imagelightbox="demo" data-ilb2-caption="CII Enterprise Odisha "><img src="/images/news/2024/feb/symposium/gallery/symposium-image-twelve.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>CII Enterprise Odisha</p></div>
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