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
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <>
		<Head>
			<title>News - Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display</title>
			
			<meta name="description" content="Tarapro recently participated in Fire India 2024 International Conference & Exhibition organized by Institution of Fire Engineers (India) from September 26-28 at Dwarka, New Delhi"/>
			
			<meta name="keywords" content=""/>
			
			<meta name="author" content="Tarapro" />

			{/* Open Graph / Social */}
			<meta property="og:url" content={`${baseUrl}/news/fire-india-exhibition-2024`} />
			<meta property="og:type" content="news" />
			<meta property="og:title" content="Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display"/>
			<meta property="og:description" content="Tarapro recently participated in Fire India 2024 International Conference & Exhibition organized by Institution of Fire Engineers (India) from September 26-28 at Dwarka, New Delhi"/>
			<meta property="og:image" content="https://www.taralohia.com/images/news/2024/sep/fire-exhibition/fire-India-featured-image.jpg" />
		</Head>
		
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
														<h3>Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2024/sep/fire-exhibition/fire-india-banner.jpg" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2024/sep/fire-exhibition/fire-india-banner-ipad.jpg" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2024/sep/fire-exhibition/fire-india-banner-mb.jpg" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2024/sep/fire-exhibition/fire-India-featured-image.jpg" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>01 October 2024</p>
							
							<p>Tarapro recently participated in <strong>Fire India 2024 International Conference & Exhibition organized by Institution of Fire Engineers (India) from September 26-28 at Dwarka, New Delhi</strong>. This event highlighted fire, safety, and disaster management, with the goal of building a more resilient nation by fostering discussions on enhancing preparedness, safety protocols, and disaster recovery strategies.</p>
							<p>This three-day event brought together thousands of industry professionals, safety experts, and key stakeholders focused on creating a disaster-free and secure environment.</p>
							
							<p><strong>We unveiled our latest line of <a href="/fr-clothing">flame resistant</a> and firefighting clothing, built to withstand extreme heat and fire hazards while offering exceptional comfort and mobility.</strong> </p>
						</div>
						
						<div className="col-md-12">
							<p>Our advanced products drew significant attention, as industry professionals explored the next generation of protective gear designed for industries such as firefighting, oil & gas, and heavy manufacturing. Our advanced products drew significant attention, as industry professionals explored the next generation of protective gear designed for industries such as firefighting, <a href="/fr-clothing/oil-gas-fr-clothing">oil & gas</a>, and heavy manufacturing..</p>
							
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>We were thrilled by the overwhelming response from industry experts and clients at Fire India 2024. The feedback we received was a testament to our ongoing efforts to innovate and redefine safety standards for workers in hazardous environments.</p>
									<h3>Rohit Lohia</h3>
									<h4>Director of Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p>Our exhibit emphasized its commitment to safety and innovation, showcasing garments made from advanced fabrics that balance durability with breathability, ensuring comfort without sacrificing protection. These cutting-edge products are not just flame resistant and suitable for firefighting but <strong>also lightweight and ergonomically designed for maximum efficiency in the toughest working conditions.</strong></p>
							
							<p>Fire India 2024 proved to be a successful platform for networking, learning and gaining insights into the future of fire safety. Our participation further solidified our reputation as a pioneer in fire resistant work wear, positioning the brand as a go-to solution for industries seeking robust protection against fire hazards.</p>
							
							<p>As the fire safety industry continues to evolve, we are dedicated to staying at the forefront of innovation and ensuring that workers in hazardous conditions have access to the best possible protective solutions.</p>
							
							<p>We thank the organizers for this prestigious event and look forward to many such opportunities in the future.</p>
							
						</div>
						
						<div className="clearfix"></div>

						<div className="col-md-12"><h2 className="glrytxt">Gallery</h2></div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/sep/fire-exhibition/gallery/1-large.jpg" data-imagelightbox="demo" data-ilb2-caption="Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display"><img src="/images/news/2024/sep/fire-exhibition/gallery/1.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/sep/fire-exhibition/gallery/2-large.jpg" data-imagelightbox="demo" data-ilb2-caption="Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display"><img src="/images/news/2024/sep/fire-exhibition/gallery/2.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/sep/fire-exhibition/gallery/3-large.jpg" data-imagelightbox="demo" data-ilb2-caption="Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display"><img src="/images/news/2024/sep/fire-exhibition/gallery/3.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/sep/fire-exhibition/gallery/4-large.jpg" data-imagelightbox="demo" data-ilb2-caption="Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display"><img src="/images/news/2024/sep/fire-exhibition/gallery/4.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/sep/fire-exhibition/gallery/5.jpg" data-imagelightbox="demo" data-ilb2-caption="Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display"><img src="/images/news/2024/sep/fire-exhibition/gallery/5.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/sep/fire-exhibition/gallery/6-large.jpg" data-imagelightbox="demo" data-ilb2-caption="Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display"><img src="/images/news/2024/sep/fire-exhibition/gallery/6.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/sep/fire-exhibition/gallery/7-large.jpg" data-imagelightbox="demo" data-ilb2-caption="Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display"><img src="/images/news/2024/sep/fire-exhibition/gallery/7.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/sep/fire-exhibition/gallery/8-large.jpg" data-imagelightbox="demo" data-ilb2-caption="Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display"><img src="/images/news/2024/sep/fire-exhibition/gallery/8.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/sep/fire-exhibition/gallery/9-large.jpg" data-imagelightbox="demo" data-ilb2-caption="Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display"><img src="/images/news/2024/sep/fire-exhibition/gallery/9.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/sep/fire-exhibition/gallery/10-large.jpg" data-imagelightbox="demo" data-ilb2-caption="Revolutionizing Safety Gear at Fire India 2024: Advanced Solutions on Display"><img src="/images/news/2024/sep/fire-exhibition/gallery/10.jpg" className="img-responsive" alt=""/>
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