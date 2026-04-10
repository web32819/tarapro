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
														<h3>Tarapro Sets the Standard in FR Workwear at Major Industry Showcases this September</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2025/sep/event/news-story-desktop.jpg" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2025/sep/event/news-story-ipad.jpg" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2025/sep/event/news-story-mobile.jpg" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro Sets the Standard in FR Workwear at Major Industry Showcases this September</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2025/sep/event/feature-image.jpg" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p><strong>30 September 2025</strong></p>
							<p>September was a busy month for Tarapro, as we successfully showcased our next-generation FR solutions at three flagship industry events. The month underscored the company’s commitment to raising workplace safety standards and building strategic industry connections across multiple sectors.</p>
							<p><strong>Here's a look at our participation in each event:</strong></p>
							<ul>
								<li><a href="https://www.cii.in/index.aspx" target="_blank">CII 19th Safety Symposium & Exposition</a> (September 11–12, Kolkata): This influential platform allowed us to engage in high-level networking with industrial leaders and policy-makers. Our participation was focused on thought leadership, discussing the latest advancements in FR workwear technology, and forging strategic collaborations to expand our industry footprint and drive safety innovation forward.</li>
							</ul>
						</div>
						
						<div className="col-md-12 no-pad">
							<ul>
								<li><a href="#">OSH India 2025</a> (September 16–18, Mumbai): At South Asia’s premier occupational safety and health expo, our focus was on demonstrating the versatility and reliability of our Flame Resistant Clothing solutions for a wide range of high-risk sectors. Through live demonstrations, we highlighted the superior durability, comfort, and compliance of our apparel, tailored specifically for demanding environments in the oil & gas, electrical, metallurgical, and construction industries.</li>
								
								<li><a href="#">Fire India 2025</a> (September 25–27, Mumbai): We presented our advanced, specialized range of FR clothing to fire and safety professionals. The showcase centered on gear engineered to meet the extreme conditions faced by firefighters and emergency response teams, emphasizing ergonomic design, exceptional heat and flame resistance, and adherence to the most stringent global safety standards.</li>
								
							</ul>
							
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>Directly engaging with professionals at these key platforms allows us to align our innovations with the real-world challenges they face. Our vision extends beyond simply manufacturing protective apparel; we aim to be a core partner in building a comprehensive culture of safety. By continuously pushing the boundaries of material science and design, we are committed to engineering solutions that not only meet but exceed safety standards, ensuring every worker returns home safely..</p>
									<h3>Rohit Lohia</h3>
									<h4>Director of Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
						</div>
						
						<div className="clearfix"></div>
						
						<p>We’re deeply grateful to the organisers behind Fire India 2025, OSH India 2025, and the CII Safety Symposium & Exposition for creating world-class platforms that bring safety professionals, innovators, and decision-makers together. These events gave us invaluable opportunities to exchange ideas, showcase new solutions, and build stronger partnerships. We’re excited to build on the momentum from these events and continue working closely with industry peers to shape the future of workplace safety.</p>

						<div className="col-md-12 no-pad"><h2 className="glrytxt">Gallery</h2></div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2025/sep/event/osh-india-one.jpg" data-imagelightbox="demo" data-ilb2-caption="OSH India Expo"><img src="/images/news/2025/sep/event/osh-india-one.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>OSH India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2025/sep/event/osh-india-two.jpg" data-imagelightbox="demo" data-ilb2-caption="OSH India Expo"><img src="/images/news/2025/sep/event/osh-india-two.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>OSH India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2025/sep/event/osh-india-three.jpg" data-imagelightbox="demo" data-ilb2-caption="OSH India Expo"><img src="/images/news/2025/sep/event/osh-india-three.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>OSH India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2025/sep/event/fire-india-one.jpg" data-imagelightbox="demo" data-ilb2-caption="Fire India Expo"><img src="/images/news/2025/sep/event/fire-india-one.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>Fire India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2025/sep/event/fire-india-two.jpg" data-imagelightbox="demo" data-ilb2-caption="Fire India Expo"><img src="/images/news/2025/sep/event/fire-india-two.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>Fire India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2025/sep/event/fire-india-three.jpg" data-imagelightbox="demo" data-ilb2-caption="Fire India Expo"><img src="/images/news/2025/sep/event/fire-india-three.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>Fire India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2025/sep/event/fire-india-four.jpg" data-imagelightbox="demo" data-ilb2-caption="Fire India Expo"><img src="/images/news/2025/sep/event/fire-india-four.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>Fire India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2025/sep/event/cii-eastern-region.jpg" data-imagelightbox="demo" data-ilb2-caption="CII Eastern Region"><img src="/images/news/2025/sep/event/cii-eastern-region.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>CII Eastern Region</p></div>
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