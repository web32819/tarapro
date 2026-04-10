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
														<h3>Tarapro Showcases Cutting-Edge Flame-Resistant Innovations at OSH India South 2024</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2024/july/osh-india/osh-india-banner.jpg" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2024/july/osh-india/osh-india-banner-ipad.jpg" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2024/july/osh-india/osh-india-banner-mb.jpg" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro Showcases Cutting-Edge Flame-Resistant Innovations at OSH India South 2024</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2024/july/osh-india/osh-india-featured-image.jpg" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>15 July 2024</p>
							<p>Tarapro proudly presented its latest flame-resistant (FR) protective wear and Arc Flash Protective Clothing at the 9th Edition of OSH India South, held on June 27-28 at the Bengaluru International Exhibition Centre. This premier event brought together leading occupational safety and health professionals to explore the latest advancements in workplace safety.</p>
							<p>Our exhibit featured a comprehensive range of high-quality FR protective wear and Arc Flash Protective Clothing, tailored to mitigate risks in hazardous industries such as <a href="/fr-clothing/electrical-arc-flash-clothing">electrical</a>, <a href="/fr-clothing/welder-fr-clothing">welding</a>, and <a href="/fr-clothing/molten-metal-clothing">molten metal</a> work. Visitors were impressed by our commitment to enhancing worker protection through advanced materials and ergonomic design, ensuring safety without compromising comfort or mobility.</p>
						</div>
						
						<div className="col-md-12">
							<p>The event provided a valuable platform to engage with safety professionals, industry peers, and potential clients. We had enriching discussions on best practices and emerging trends in safety wear, showcasing how Tarapro’s innovations are setting new standards in the industry.</p>
							
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>As OSH India South 2024 concluded, we were thrilled by the overwhelming response to our <a href="/fr-clothing">flame-resistant protective wear</a> and Arc Flash Protective Clothing. The opportunity to connect with industry leaders and safety professionals was invaluable. It reinforced our commitment to driving innovation in workplace safety and providing the highest level of protection for workers across various hazardous industries.</p>
									<h3>Rohit Lohia</h3>
									<h4>Director of Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p>Tarapro extends its sincere gratitude to the organizers for their impeccable planning and execution, fostering an environment of knowledge-sharing and innovation. The dedication to promoting workplace safety is commendable, and Tarapro is honoured to have participated in this significant event.</p>
							
						</div>
						
						<div className="clearfix"></div>

						<div className="col-md-12"><h2 className="glrytxt">Gallery</h2></div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/july/osh-india/gallery/osh-india-image-one.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Showcases Cutting-Edge Flame-Resistant Innovations at OSH India South 2024"><img src="/images/news/2024/july/osh-india/gallery/osh-india-image-one.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/july/osh-india/gallery/osh-india-image-two.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Showcases Cutting-Edge Flame-Resistant Innovations at OSH India South 2024"><img src="/images/news/2024/july/osh-india/gallery/osh-india-image-two.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/july/osh-india/gallery/osh-india-image-three.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Showcases Cutting-Edge Flame-Resistant Innovations at OSH India South 2024"><img src="/images/news/2024/july/osh-india/gallery/osh-india-image-three.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="i/mages/news/2024/july/osh-india/gallery/osh-india-image-four.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Showcases Cutting-Edge Flame-Resistant Innovations at OSH India South 2024"><img src="/images/news/2024/july/osh-india/gallery/osh-india-image-four.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/july/osh-india/gallery/osh-india-image-five.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Showcases Cutting-Edge Flame-Resistant Innovations at OSH India South 2024"><img src="/images/news/2024/july/osh-india/gallery/osh-india-image-five-thumbnail.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2024/july/osh-india/gallery/osh-india-image-six.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Showcases Cutting-Edge Flame-Resistant Innovations at OSH India South 2024"><img src="/images/news/2024/july/osh-india/gallery/osh-india-image-six.jpg" className="img-responsive" alt=""/>
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