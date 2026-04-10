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
														<h3>Tarapro Shines at India Steel 2025 with Innovation, Purpose and Passion</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2025/april/india-steel/banner-dekstop.jpg" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2025/april/india-steel/banner-ipad.jpg" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2025/april/india-steel/banner-mb.jpg" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro Shines at India Steel 2025 with Innovation, Purpose and Passion</li>
							</ol>
						</nav>
						
						<div className="col-md-3">
							<img src="/images/news/2025/april/india-steel/india-steel-featured-image.jpg" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-9">
							<p>30 April 2025</p>
							<p>Tarapro marked a powerful presence at India Steel 2025, held at the Mumbai Exhibition Centre from April 24 to 26, delivering three days packed with innovation, meaningful conversations and industry collaboration. The event saw Tarapro’s stall, buzzing with visitors, creating a dynamic space where cutting-edge protective workwear met real-world industrial needs.</p>
							<p>Throughout the event, professionals from industries such as steel, metallurgy, construction, and heavy engineering explored the latest offerings in <a href="/fr-clothing">flame-resistant (FR)</a> and <a href="/arc-flash-suit">arc-flash protective clothing</a>. The company's focus on combining performance, comfort and high-end protection resonated strongly with safety officers, plant operators, procurement heads and operational teams visiting the booth.</p>
						</div>

						<div className="clearfix"></div>
						
						<div className="col-md-12">
							<p>The Tarapro team demonstrated their newest innovations, emphasizing how their workwear is crafted to meet the challenges of high-heat zones and hazardous environments. With a commitment to safety that goes beyond just compliance, Tarapro’s products showcased the best of durability, flexibility and future-ready protection.</p>
							
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>Tarapro was the first to introduce certified flame-resistant garments to the steel and metal industry in India more than 35 years ago — a bold step at a time when awareness around industrial safety was still developing. Over the years, we have not only set industry standards but continuously evolved, bringing newer innovations to meet the changing needs of our clients. From traditional FR fabrics to advanced multi-hazard protection solutions, our journey has always been about staying ahead and pushing the boundaries of safety technology.</p>
									<h3>Rohit Lohia</h3>
									<h4>Director of Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>India Steel 2025 wasn’t just about showcasing our range; it was about reaffirming our mission to protect those who drive industries forward. The energy, curiosity and passion we witnessed over these three days reaffirmed that safety, when matched with innovation, can truly empower workforces across sectors.</p>
									<h3>Santanu Barua</h3>
									<h4>Manager of Sales and Marketing at Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p>The success at India Steel 2025 reflects Tarapro’s dedication to advancing workplace safety and fostering partnerships built on trust, innovation, and a shared vision for a safer tomorrow. The unwavering focus on research, technological excellence and user-centric design continues to position us as a trusted name in the industrial safety gear landscape.</p>

							<p>As the curtains fall on India Steel 2025, Tarapro looks forward to building on the momentum created at the event — strengthening old connections, forging new partnerships and continuing to raise the bar for safety across industries.</p>
						</div>
						
						<div className="clearfix"></div>
						
						<div className="col-md-12"><h2 className="glrytxt">Gallery</h2></div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/april/india-steel/gallery/1.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at India Steel 2025 with Innovation, Purpose and Passion"><img src="/images/news/2025/april/india-steel/gallery/1.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/april/india-steel/gallery/2.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at India Steel 2025 with Innovation, Purpose and Passion"><img src="/images/news/2025/april/india-steel/gallery/2.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/april/india-steel/gallery/3.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at India Steel 2025 with Innovation, Purpose and Passion"><img src="/images/news/2025/april/india-steel/gallery/3.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/april/india-steel/gallery/3.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at India Steel 2025 with Innovation, Purpose and Passion"><img src="/images/news/2025/april/india-steel/gallery/3.jpg" className="img-responsive" alt=""/>
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