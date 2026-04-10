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
														<h3>Tarapro showcases its Innovative Flame-Resistant Clothing Range at Hindalco's 8th Annual Safety Conclave</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2023/feb/hindalco-safety/hindalco-safety-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2023/feb/hindalco-safety/hindalco-safety-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2023/feb/hindalco-safety/hindalco-safety-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro showcases its Innovative Flame-Resistant Clothing Range at Hindalco's 8th Annual Safety Conclave</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2023/feb/hindalco-safety/hindalco-safety-feature-image.webp" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>17 February 2023</p>
							<p>Tarapro recently showcased its latest range of flame-resistant and arc-rated clothing at the <strong>8th Annual Safety Conclave hosted by Hindalco</strong>. The event took place on February 14th and 15th, 2023, at Mahan Aluminium in Singrauli, MP, and was attended by senior teams from all Hindalco plants, including the mine safety heads and unit heads.</p>
							
							<p>At the conclave, <strong>Tarapro presented its cutting-edge product range, which includes the newly developed aluminized apron, arc flash range, and cotton-based FRCs</strong>. These products are designed to provide top-tier protection against thermal hazards and electrical arc flash hazards at the workplace. Attendees praised the range and applauded Tarapro for its commitment to employee safety.</p>
						</div>
						
						<div className="col-md-12">
							
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>Our relationship with Hindalco as a trusted <strong><a href="/fr-clothing">FR Clothing</a></strong> supplier is of great value to us, and we are grateful for their invitation. <strong>Our participation in the event underlines our commitment to safety and innovation, and we remain dedicated to providing the highest quality protective equipment to safeguard workers in hazardous environments</strong>.</p>
									<h3>Rohit Lohia</h3>
									<h4>Director of Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p><strong>A key discussion at the event focused on the Certification requirements for <a href="/fr-clothing/molten-metal-clothing">Molten Aluminium Protection</a> and <a href="/arc-flash-suit">Arc Flash Clothing</a></strong>. This session aimed to promote the significance of utilizing certified protective gear and adhering to safety protocols. Over 70 HSE experts and end-users from various Hindalco plants attended the discussion and shared their experiences and knowledge.</p>
							
							<p>Tarapro's presence at the event emphasized the company's steadfast commitment to safety and innovation. The Annual Safety Conclave offered a platform to showcase the latest protective equipment and support the initiatives of Hindalco and other companies in promoting safe work practices.</p>
						</div>
						
						<div className="clearfix"></div>
						
						<h2 className="glrytxt">Gallery</h2>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/feb/hindalco-safety/hindalco-safety-image-one.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro showcases its Innovative Flame-Resistant Clothing Range at Hindalco's 8th Annual Safety Conclave"><img src="/images/news/2023/feb/hindalco-safety/hindalco-safety-image-one.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/feb/hindalco-safety/hindalco-safety-image-two.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro showcases its Innovative Flame-Resistant Clothing Range at Hindalco's 8th Annual Safety Conclave"><img src="/images/news/2023/feb/hindalco-safety/hindalco-safety-image-two.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/feb/hindalco-safety/hindalco-safety-image-three.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro showcases its Innovative Flame-Resistant Clothing Range at Hindalco's 8th Annual Safety Conclave"><img src="/images/news/2023/feb/hindalco-safety/hindalco-safety-image-three.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/feb/hindalco-safety/hindalco-safety-image-four.webp" data-imagelightbox="demo" data-ilb2-caption="Tarapro showcases its Innovative Flame-Resistant Clothing Range at Hindalco's 8th Annual Safety Conclave"><img src="/images/news/2023/feb/hindalco-safety/hindalco-safety-image-four-thumb.webp" className="img-responsive" alt=""/>
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