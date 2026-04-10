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
														<h3>Tarapro Showcases FR Gear at Hindalco’s 9th Annual Safety Conclave</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2024/march/hindalco/hindalco-banner.jpg" className="img-responsive visible-lg visible-md visible-sm" alt=""/>
									<img src="/images/news/2024/march/hindalco/hindalco-banner-ipad.jpg" className="img-responsive visible-sm visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro Showcases FR Gear at Hindalco’s 9th Annual Safety Conclave</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2024/march/hindalco/hindalco-featured-image.jpg" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>18 March 2024</p>
							<p>In a significant stride towards enhancing industrial safety standards, Tarapro participated in Hindalco's prestigious 9th Annual Safety Conclave, held on March 14th and 15th, 2024, in Hirakud, Orissa. This conclave brought together industry stalwarts to discuss and exchange advanced safety strategies, underlining the collective aim of elevating safety protocols across sectors.</p>

							<p>As a vanguard in the field of <a href="/fr-clothing">Flame Resistant</a> and <a href="/fr-clothing/electrical-arc-flash-clothing">arc flash clothing</a> in India, <strong>Tarapro has been a long-standing safety partner of Hindalco, contributing to the safety ethos with its innovative solutions</strong>. This conclave was an opportunity to showcase its latest advancements in safety gear designed to protect against a variety of industrial FR hazards.</p>
						</div>
						
						<div className="col-md-12">
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>Working alongside Hindalco has been an absolute pleasure. Our collaboration is founded on mutual trust and a shared commitment to safety excellence. We are excited to continue supporting them in their relentless pursuit of workplace safety.</p>
									<h3>Rohit Lohia</h3>
									<h4>Director of Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p>The conclave was not just a platform for discussion but also a demonstration ground for vendors like Tarapro, who have been instrumental in providing cutting-edge safety equipment. Senior teams from Hindalco's various plants, including mine safety heads and unit heads, were present, along with select vendors, to engage and witness the innovative safety solutions on display.</p>
							
							<p>Tarapro extends its sincere appreciation to Hindalco for the invaluable opportunity to contribute to the advancement of workplace safety. As both entities look towards the future, their commitment to mitigating risks and championing safety within the industrial landscape remains unwavering.</p>
							
							<p>This collaboration highlights the shared vision of Tarapro and Hindalco towards a safer and more secure industrial environment, setting a benchmark for others in the industry to follow.</p>
							
						</div>
						
						<div className="clearfix"></div>

						<div className="col-md-12"><h2 className="glrytxt">Gallery</h2></div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/march/hindalco/gallery/hindalco-image-one.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Showcases FR Gear at Hindalco’s 9th Annual Safety Conclave"><img src="/images/news/2024/march/hindalco/gallery/hindalco-image-one.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/march/hindalco/gallery/hindalco-image-two.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Showcases FR Gear at Hindalco’s 9th Annual Safety Conclave"><img src="/images/news/2024/march/hindalco/gallery/hindalco-image-two.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/march/hindalco/gallery/hindalco-image-three.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Showcases FR Gear at Hindalco’s 9th Annual Safety Conclave"><img src="/images/news/2024/march/hindalco/gallery/hindalco-image-three.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<a href="/images/news/2024/march/hindalco/gallery/hindalco-image-four.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Showcases FR Gear at Hindalco’s 9th Annual Safety Conclave"><img src="/images/news/2024/march/hindalco/gallery/hindalco-image-four.jpg" className="img-responsive" alt=""/>
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