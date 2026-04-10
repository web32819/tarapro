import Head from "next/head";
export default function () {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <>
		<Head>
			<title>Certification</title>
			
			<meta name="description" content="Tarapro recently participated in the 16th Safety Symposium & Exposition organized by the Confederation of Indian Industry (CII) on 4th and 5th of August 2022 at ITC Sonar, Kolkata"/>
			
			<meta name="keywords" content=""/>
			
			<meta name="author" content="Tarapro" />

			{/* Open Graph / Social */}
			<meta property="og:url" content={`${baseUrl}/news/tarapro-showcases-smart-fr-solutions-cii-safety-symposium-exposition`} />
			<meta property="og:type" content="news" />
			<meta property="og:title" content="Tarapro showcases smart FR solutions at CII's 16th Safety Symposium & Exposition"/>
			<meta property="og:description" content="Tarapro recently participated in the 16th Safety Symposium & Exposition organized by the Confederation of Indian Industry (CII) on 4th and 5th of August 2022 at ITC Sonar, Kolkata"/>
			<meta property="og:image" content="https://www.taralohia.com/images/news/2022/august/cii-exposition/og-image.webp"/>
		</Head>
		
		<section className="bannerSection innrbr">
			<div className="container-fluid">
				<div className="row">
				
					<div className="col-md-12 no-pad">
						<div id="myCarousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
							
								<div className="item active">
									<div className="container">
										<div className="row">
											<div className="col-md-9 col-sm-7 no-pad">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="images/certificates-banner.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="innrsctn">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="/">Home</a></li>
								<li className="breadcrumb-item active">Accreditations & Certifications</li>
							</ol>
						</nav>

						<div className="clearfix"></div>
						
						<div className="col-md-4">
							<div className="bxwrpprcntnr">
								<div className="bxcntnr">
									<img src="/images/certificate-plate.png" className="img-responsive" alt=""/>
								</div>
								<div className="bxcntnr">
									<p>First in India to receive this prestigious <span>BIS certification as per 15742:2007</span>. Recognizing this milestone, BIS organized a special felicitation ceremony to honor our team’s achievement.</p>
								</div>
							</div>
						</div>

						<div className="col-md-8">
							<div className="ctfctcntnr">
								<p>Starting from the development, selection and sourcing of fabrics, garment designing, sample development, testing and certification of products to high-quality production, inspection and logistics, our dedicated team of industry experts work with you every step of the way.</p>
								
								<div className="crtfctbx">
									<img src="/images/certificate-cml-5100236682.svg" className="img-responsive" alt=""/>
									<p>Protection against less hazardous welding techniques and situations, causing lower levels of spatter and radiant heat.</p>
								</div>
								<div className="crtfctbx">
									<img src="/images/certificate-cml-5100239284.svg" className="img-responsive" alt=""/>
									<p>Requirements for clothing made of limited flame spread materials and material assemblies affording protection against heat and flame.</p>
								</div>
								<div className="crtfctbx">
									<img src="/images/certificate-cml-5100234072.svg" className="img-responsive" alt=""/>
									<p>Personal Protective clothing - Clothing to protect against heat and flame.</p>
								</div>
							</div>
						</div>

						<div className="clearfix"></div>
						
					</div>
				</div>
			</div>
		</section>
	
	</>
);
}