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
														<h3>Tarapro took center stage as the Gold Sponsor at the 17th Safety Symposium & Exposition organised by the Confederation of Indian Industry (CII), Eastern Region, at ITC Sonar, Kolkata.</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2023/august/symposium/symposium-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2023/august/symposium/symposium-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2023/august/symposium/symposium-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro at 17th Safety Symposium & Exposition hosted by CII</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2023/august/symposium/symposium-expo-image.webp" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>25 August 2023</p>
							<p>Tarapro took center stage as the <strong>Gold Sponsor at the 17th Safety Symposium & Exposition</strong>. The two-day event, <strong>organised by the Confederation of Indian Industry (CII), Eastern Region, at ITC Sonar</strong>, Kolkata, brought together a distinguished congregation of thought leaders, industry experts, and professionals committed to advancing Occupational Health and Safety (OHS) in tandem with Environmental, Social, and Governance (ESG) goals.</p>
							
							<p>The Tarapro team seized the spotlight by showcasing its cutting-edge line of flame resistant and arc flash clothing that serves <a href="/fr-clothing/molten-metal-clothing">Molten Metal</a>, <a href="/fr-clothing/welder-fr-clothing">Welding</a>, <a href="/fr-clothing/electrical-arc-flash-clothing">Electrical</a> <strong>and other industries</strong>.</p>
							
							<p>Under the overarching <strong>theme of 'Synergising OHS with ESG Goals'</strong>, the symposium fostered profound discussions on pivotal subjects. These encompassed a diverse array of topics such as the role of leadership in shaping ESG objectives, crafting robust strategies for ESG implementation, optimizing Personal Protective Equipment (PPE) to enhance compliance,</p>
						</div>
						
						<div className="col-md-12">
							<p>reimagining the mining sector with a focus on ESG impact, evolving responsibilities of Safety Leaders within the ESG framework, as well as addressing fire hazards and integrating ESG principles within the construction industry.</p>
							
							<p><strong>The 17th Safety Symposium & Exposition stands as a testament to our unwavering dedication to promoting safety and driving sustainable practices</strong>. The brand reinforced its position as a pacesetter in flame-resistant clothing solutions that align seamlessly with ESG aspirations. </p>
							
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>Our commitment to safety and sustainability is further invigorated as we engage with like-minded professionals, sharing insights and driving conversations that steer our industry towards a safer and more conscientious future.</p>
									<h3>Mr. Rohit Lohia</h3>
									<h4>Director of Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p>The team would like to extend its gratitude to the organizers for curating an unparalleled experience to discuss new perspectives on global industry trends, reach relevant audiences and discover opportunities in business networking.</p>
							
							<p>For more information on Tarapro's groundbreaking contributions and its remarkable line of protective clothing, please visit <a href="https://www.taralohia.com/" target="_blank">taralohia.com</a>.</p>
							
						</div>
						
						<div className="clearfix"></div>

						<div className="col-md-12"><h2 className="glrytxt">Gallery</h2></div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/august/symposium/symposium-image-one.webp" data-imagelightbox="demo" data-ilb2-caption="Empowering Safety and Sustainability Tarapro at 17th Safety Symposium & Exposition"><img src="/images/news/2023/august/symposium/symposium-image-one.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/august/symposium/symposium-image-two.webp" data-imagelightbox="demo" data-ilb2-caption="Empowering Safety and Sustainability Tarapro at 17th Safety Symposium & Exposition"><img src="/images/news/2023/august/symposium/symposium-image-two.webp" className="img-responsive" alt=""/>
							</a>
						</div>

						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/august/symposium/symposium-image-four.webp" data-imagelightbox="demo" data-ilb2-caption="Empowering Safety and Sustainability Tarapro at 17th Safety Symposium & Exposition"><img src="/images/news/2023/august/symposium/symposium-image-four.webp" className="img-responsive" alt=""/>
							</a>
						</div>

						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/august/symposium/symposium-image-six.webp" data-imagelightbox="demo" data-ilb2-caption="Empowering Safety and Sustainability Tarapro at 17th Safety Symposium & Exposition"><img src="/images/news/2023/august/symposium/symposium-image-six.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/august/symposium/symposium-image-seven.webp" data-imagelightbox="demo" data-ilb2-caption="Empowering Safety and Sustainability Tarapro at 17th Safety Symposium & Exposition"><img src="/images/news/2023/august/symposium/symposium-image-seven.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/august/symposium/symposium-image-eight.webp" data-imagelightbox="demo" data-ilb2-caption="Empowering Safety and Sustainability Tarapro at 17th Safety Symposium & Exposition"><img src="/images/news/2023/august/symposium/symposium-image-eight.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/august/symposium/symposium-image-nine.webp" data-imagelightbox="demo" data-ilb2-caption="Empowering Safety and Sustainability Tarapro at 17th Safety Symposium & Exposition"><img src="/images/news/2023/august/symposium/symposium-image-nine.webp" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<a href="/images/news/2023/august/symposium/symposium-image-ten.webp" data-imagelightbox="demo" data-ilb2-caption="Empowering Safety and Sustainability Tarapro at 17th Safety Symposium & Exposition"><img src="/images/news/2023/august/symposium/symposium-image-ten.webp" className="img-responsive" alt=""/>
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