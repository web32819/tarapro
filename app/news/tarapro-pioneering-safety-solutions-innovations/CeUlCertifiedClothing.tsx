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
														<h3>Tarapro's November Expo Tour: Pioneering Safety Solutions and Innovations</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2023/november/pioneering/pioneering-banner.jpg" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2023/november/pioneering/pioneering-banner-ipad.jpg" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2023/november/pioneering/pioneering-banner-mb.jpg" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro's November Expo Tour: Pioneering Safety Solutions and Innovations</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2023/november/pioneering/pioneering-expo-image.jpg" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>27 November 2023</p>
							<p>At Tarapro, November was an exceptionally dynamic, busy and fruitful month for us as we seamlessly navigated from one exhibition to another highlighting our commitment to safety and innovation in flame-resistant workwear.</p>
							
							<p>The journey commenced at the <strong>CII Jharkhand Safety Symposium and Exposition</strong> focusing on the use of technology to improve workplace safety. Held on November 3, 2023, in Jamshedpur, the expo aimed to explore the impact of ESG factors on workplace safety and the role of technology in improving safety performance. Subsequently, at the <strong>OSH India Expo</strong> in Mumbai from November 23rd to 25th, we reinforced our commitment to workplace safety, engaging with professionals, experts, and government officials to exchange global best practices.</p>
						</div>
						
						<div className="col-md-12">
							<p>The grand finale took place at the <strong>77th IIM-ATM</strong> in Bhubaneswar, Odisha, from November 22nd to 24th. Our participation in this international conference allowed us to contribute to discussions on green manufacturing, strategic and rare metals, and the accelerated development of materials.</p>

							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>At Tarapro, our mission is not just to meet industry standards but to set new benchmarks for safety, innovation, and excellence in FR PPE workwear.</p>
									<h3>Rohit Lohia</h3>
									<h4>Director of Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p>The November Expo Tour stands as a testament to the company's unwavering commitment to safety and innovation in flame-resistant workwear. Participation in these exhibitions allowed us to contribute to vital discussions on workplace safety, advanced materials, and green manufacturing. We continue to pioneer safety solutions, setting the stage for a safer and more innovative industrial landscape.</p>
						</div>
						
						<div className="clearfix"></div>

						<div className="col-md-12"><h2 className="glrytxt">Gallery</h2></div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/osh-india-one.jpg" data-imagelightbox="demo" data-ilb2-caption="OSH India Expo"><img src="/images/news/2023/november/pioneering/osh-india-one.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>OSH India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/osh-india-two.jpg" data-imagelightbox="demo" data-ilb2-caption="OSH India Expo"><img src="/images/news/2023/november/pioneering/osh-india-two.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>OSH India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/osh-india-3.jpg" data-imagelightbox="demo" data-ilb2-caption="OSH India Expo"><img src="/images/news/2023/november/pioneering/osh-india-3.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>OSH India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/osh-india-4.jpg" data-imagelightbox="demo" data-ilb2-caption="OSH India Expo"><img src="/images/news/2023/november/pioneering/osh-india-4.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>OSH India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/osh-india-5.jpg" data-imagelightbox="demo" data-ilb2-caption="OSH India Expo"><img src="/images/news/2023/november/pioneering/osh-india-5.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>OSH India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/osh-india-6-large.jpg" data-imagelightbox="demo" data-ilb2-caption="OSH India Expo"><img src="/images/news/2023/november/pioneering/osh-india-6.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>OSH India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/osh-india-7-large.jpg" data-imagelightbox="demo" data-ilb2-caption="OSH India Expo"><img src="/images/news/2023/november/pioneering/osh-india-7.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>OSH India </p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/osh-india-8-large.jpg" data-imagelightbox="demo" data-ilb2-caption="OSH India Expo"><img src="/images/news/2023/november/pioneering/osh-india-8.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>OSH India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/osh-india-9-large.jpg" data-imagelightbox="demo" data-ilb2-caption="OSH India Expo"><img src="/images/news/2023/november/pioneering/osh-india-9.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>OSH India</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/ii-atm-1.jpg" data-imagelightbox="demo" data-ilb2-caption="77th IIM-ATM"><img src="/images/news/2023/november/pioneering/ii-atm-1.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>77th IIM-ATM</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/ii-atm-2-large.jpg" data-imagelightbox="demo" data-ilb2-caption="77th IIM-ATM"><img src="/images/news/2023/november/pioneering/ii-atm-2.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>77th IIM-ATM</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/ii-atm-3-large.jpg" data-imagelightbox="demo" data-ilb2-caption="77th IIM-ATM"><img src="/images/news/2023/november/pioneering/ii-atm-3.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>77th IIM-ATM</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/ii-atm-4-large.jpg" data-imagelightbox="demo" data-ilb2-caption="77th IIM-ATM"><img src="/images/news/2023/november/pioneering/ii-atm-4.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>77th IIM-ATM</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/cii-jharkand-1.jpg" data-imagelightbox="demo" data-ilb2-caption="CII Jharkhand Safety Symposium and Exposition"><img src="/images/news/2023/november/pioneering/cii-jharkand-1.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>CII Jharkhand</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/cii-jharkand-2.jpg" data-imagelightbox="demo" data-ilb2-caption="CII Jharkhand Safety Symposium and Exposition"><img src="/images/news/2023/november/pioneering/cii-jharkand-2.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>CII Jharkhand</p></div>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-6 gllrybx">
							<a href="/images/news/2023/november/pioneering/cii-jharkand-3.jpg" data-imagelightbox="demo" data-ilb2-caption="CII Jharkhand Safety Symposium and Exposition"><img src="/images/news/2023/november/pioneering/cii-jharkand-3.jpg" className="img-responsive" alt=""/>
							<div className="txtbx"><p>CII Jharkhand</p></div>
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