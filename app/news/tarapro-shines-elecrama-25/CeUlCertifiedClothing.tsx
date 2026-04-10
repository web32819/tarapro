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
			<title>News - Tarapro Shines at Elecrama 2025: Advancing Electrical Safety & Innovation</title>
			
			<meta name="description" content="Tarapro proudly participated in Elecrama 2025, the 16th edition of the world’s largest electrical industry exhibition organized by IEEMA, held from February 22-26 at the India Exposition Mart, Greater Noida, Delhi NCR...."/>
			
			<meta name="keywords" content=""/>
			
			<meta name="author" content="Tarapro" />

			{/* Open Graph / Social */}
			<meta property="og:url" content={`${baseUrl}/news/tarapro-shines-elecrama-25`} />
			<meta property="og:type" content="news" />
			<meta property="og:title" content="Tarapro Shines at Elecrama 2025: Advancing Electrical Safety & Innovation"/>
			<meta property="og:description" content="Tarapro proudly participated in Elecrama 2025, the 16th edition of the world’s largest electrical industry exhibition organized by IEEMA, held from February 22-26 at the India Exposition Mart, Greater Noida, Delhi NCR...."/>
			<meta property="og:image" content="https://www.taralohia.com/images/news/2025/feb/elecrama/Elecrama-featured-image.jpg" />
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
														<h3>Tarapro Shines at Elecrama 2025: Advancing Electrical Safety & Innovation</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/news/2025/feb/elecrama/elecrama-banner.jpg" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/news/2025/feb/elecrama/elecrama-banner-ipad.jpg" className="img-responsive visible-sm" alt=""/>
									<img src="/images/news/2025/feb/elecrama/elecrama-banner-mb.jpg" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active" aria-current="page">Tarapro Shines at Elecrama 2025: Advancing Electrical Safety & Innovation</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2025/feb/elecrama/Elecrama-featured-image.jpg" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>01 March 2025</p>
							<p>Tarapro proudly participated in <strong>Elecrama 2025</strong>, the 16th edition of the <strong>world’s largest electrical industry exhibition</strong> organized by <strong>IEEMA</strong>, held from February 22-26 at the <strong>India Exposition Mart, Greater Noida, Delhi NCR</strong>. As the flagship event of the Indian Electrical Industry, Elecrama is the ultimate gateway to the world of <a href="/fr-clothing/electrical-arc-flash-clothing">electricity</a>, uniting a comprehensive range of solutions under one roof. More than just an exhibition, it serves as a global platform showcasing state-of-the-art equipment, pioneering technologies and thought leadership in electrical safety, sustainability and innovation.</p>
							<p>Our stall was a vibrant hub of activity, drawing industry professionals, safety experts and decision-makers eager to explore our latest advancements in arc-flash and flame-resistant protective solutions. What truly set us apart was our eye-catching installation of an electrical worker on a pole - a life like representation that brought workplace safety to the forefront in a visually compelling way. The enthusiasm and engagement we witnessed reaffirmed the growing focus on enhanced protection in high-risk electrical environments.</p>
						</div>
						
						<div className="col-md-12">
						
							<p>Our latest innovations in arc-flash PPE drew significant interest, highlighting the critical need for high-performance protective wear in hazardous electrical surroundings. At Tarapro, we are committed to delivering cutting-edge solutions that safeguard workers against arc flash incidents while ensuring superior comfort and durability. Our collection of <strong>arc-flash protective garment ranging from 8 Cal to 45 Cal</strong> is designed to protect workers from severe burns, heat exposure and impact-related injuries.</p>
							
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>Beyond demonstrating our products, Elecrama 2025 was an invaluable opportunity to build meaningful connections. "The overwhelming response we received reaffirms the growing emphasis on high-performance PPE in hazardous electrical surroundings. At Tarapro, we remain dedicated to innovation, ensuring that electrical professionals have access to world-className protection without compromising on comfort or durability.</p>
									<h3>Vijay Atre</h3>
									<h4>Area Sales Manager, Maharashtra, Tarapro.</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							
							<p>Tarapro remains dedicated to empowering workplaces with world-className protective solutions. Until next time-stay safe, stay protected and let’s power the future together!</p>
							
						</div>
						
						<div className="clearfix"></div>

						<div className="col-md-12"><h2 className="glrytxt">Gallery</h2></div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/feb/elecrama/gallery/1.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at Elecrama 2025: Advancing Electrical Safety & Innovation"><img src="/images/news/2025/feb/elecrama/gallery/1.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/feb/elecrama/gallery/2.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at Elecrama 2025: Advancing Electrical Safety & Innovation"><img src="/images/news/2025/feb/elecrama/gallery/2.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/feb/elecrama/gallery/3.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at Elecrama 2025: Advancing Electrical Safety & Innovation"><img src="/images/news/2025/feb/elecrama/gallery/3.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/feb/elecrama/gallery/4.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at Elecrama 2025: Advancing Electrical Safety & Innovation">
							<img src="/images/news/2025/feb/elecrama/gallery/4.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/feb/elecrama/gallery/5.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at Elecrama 2025: Advancing Electrical Safety & Innovation">
							<img src="/images/news/2025/feb/elecrama/gallery/5.jpg" className="img-responsive" alt=""/>
							</a>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<a href="/images/news/2025/feb/elecrama/gallery/6.jpg" data-imagelightbox="demo" data-ilb2-caption="Tarapro Shines at Elecrama 2025: Advancing Electrical Safety & Innovation">
							<img src="/images/news/2025/feb/elecrama/gallery/6.jpg" className="img-responsive" alt=""/>
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