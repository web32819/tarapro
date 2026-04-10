import Head from "next/head";
export default function () {
  return (
    <>
		{/* SEO Head */}
		<Head>
			<title>Why Tarapro</title>
			
			<meta name="description" content="Tarapro is Pioneer in the FR Industry. We offer ergonomic garments that outperform in the toughest environments to keep your team safe and comfortable" />
			
			<meta name="keywords" content="FR Coveralls, Flame resistant Coveralls, Fire resistant Coveralls, Flame retardant Coveralls, Fire retardant Coveralls, Flame resistant Overalls, Fire resistant Overalls, Flame retardant Overalls, Fire retardant Overalls, Flame resistant Boiler suits, Fire resistant Boiler suits, Flame retardant Boiler suits, Fire retardant Boiler suits, FR Overalls, FR Boiler suits, FR Coveralls Manufacturer, FR Coveralls Supplier" />
			
			<meta name="author" content="Tarapro" />

			{/* Open Graph / Social */}
			<meta property="og:url" content="/why-tarapro" />
			<meta property="og:type" content="page" />
			<meta property="og:title" content="Why Tarapro" />
			<meta property="og:description" content="Tarapro is Pioneer in the FR Industry. We offer ergonomic garments that outperform in the toughest environments to keep your team safe and comfortable" />
			<meta property="og:image" content="https://www.taralohia.com/images/about-banner-ipad.webp" />

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
														<h1>WHY TARAPRO?</h1>
														<p className=""><strong>Because nothing is more valuable than life and choosing us for your industrial workforce may be one of the best decisions you make.</strong></p>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/why-tara-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/why-tara-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/why-tara-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active">Why Tarapro</li>
							</ol>
						</nav>
						
						<div className="col-md-4 col-sm-6">
							<div className="taraprobx">
								<img src="/images/tarapro-image-one.svg" className="img-responsive" alt=""/>
								<hr/>
								<h3>Pioneer in the FR Industry</h3>
								<p>Being the first to introduce FR garments in the Indian Industry, Tarapro has been instrumental in bringing a massive positive attitudinal change towards safety and adherence to safety norms in the molten metal, electrical utilities, oil and gas and other industries.</p>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="taraprobx">
								<img src="/images/tarapro-image-two.svg" className="img-responsive" alt=""/>
								<hr/>
								<h3>Comprehensive Selection</h3>
								<p>Our extensive research and specific requirements from our customers over the years have helped us to develop a comprehensive range of Flame Resistant protective made using a wide selection of fabrics, styles and colors for use in varied working conditions.</p>
							</div>
						</div>
						
						<div className="clearfix visible-sm"></div>
						
						<div className="col-md-4 col-sm-6">
							<div className="taraprobx">
								<img src="/images/tarapro-image-three.svg" className="img-responsive" alt=""/>
								<hr/>
								<h3>Design and Comfort</h3>
								<p>We design ergonomic garments that outperform in the toughest environments to keep your team safe and more productive without compromising comfort.</p>
							</div>
						</div>
						
						<div className="clearfix visible-lg visible-md"></div>
						
						<div className="col-md-4 col-sm-6 col-md-offset-2">
							<div className="taraprobx">
								<img src="/images/tarapro-image-four.svg" className="img-responsive" alt=""/>
								<hr/>
								<h3>Strict Quality Checks</h3>
								<p>Tested to withstand the rigours of everyday wear each garment has been carefully manufactured and undergoes several checks to ensure optimum quality at the best price.</p>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="taraprobx">
								<img src="/images/tarapro-image-five.svg" className="img-responsive" alt=""/>
								<hr/>
								<h3>Norms and Standards</h3>
								<p>We offer 100% certified products that comply with the latest international safety regulations.</p>
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