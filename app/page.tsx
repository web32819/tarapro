
import Script from "next/script";

export const metadata = {
  title: "Tarapro India | Fire Resistant(FR) Clothing & Arc Flash Suits", 
  
  description: "Tarapro from India is a leading manufacturer & exporter of Flame Resistant Clothing and Arc Flash Suits. Best Products - FR Coveralls, Jackets, FR Pants & Shirt",

  keywords: [ "FR clothing", "FR garments",  "Fire resistant clothing",  "Flame retardant clothing", "FR Coveralls",
    "FR Jackets",
    "Arc Flash Suit",
  ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Tarapro India | Fire Resistant(FR) Clothing & Arc Flash Suits",
    description: "Tarapro from India is a leading manufacturer & exporter of Flame Resistant Clothing and Arc Flash Suits.",
    url: "/",
    siteName: "Tarapro",
    images: [
      {
        url: "https://taralohia.com/images/banner-one-ipad.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
		
		<section className="bannerSection">
			<div className="container-fluid">
				<div className="row">
				
					<div className="col-md-12 no-pad">
						<div id="myCarousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
							
								<div className="item active">
									<div className="container">
										<div className="row">
											<div className="col-md-9">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1>Because nothing is more valuable than <span>life</span></h1>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/banner-one.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/banner-one-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/banner-one-mb.webp" className="img-responsive visible-xs" alt=""/>
								</div>

							</div>
							
						</div>
						<div className="clearfix"></div>
					</div>
					
				</div>
			</div>
		</section>
		
		
		<section className="prtctsctn">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
					
						<div className="col-md-6 col-sm-6">
							<div className="mainbx">
								<div className="imgbx">
									<img src="/images/bis-award.webp" className="img-responsive" width="" height="" alt=""/>
								</div>
							</div>
						</div>
						
						<div className="col-md-6 col-sm-6">
							<h1><span>Protection</span> from Workplace Hazards</h1>
							<p>Despite the many precautions which organizations may take, accidents can happen in any work place. Adequate protective clothing with the right level of protection ensures safety of the worker.</p>
							<p>A quality and trustworthy FR brand is key to ensuring the safety and comfort of your team.</p>
							
							<p>Tarapro with its 35+ years of experience in FR clothing, is the <strong>first in India to receive the prestigious BIS certification as per 15742:2007.</strong> Recognizing this milestone, BIS organized a special felicitation ceremony to honor our team’s achievement.</p>
							<div className="">
								<a href="/certification" className="dscvrtxt hvr-sweep-to-right">Our Certifications</a>
							</div>
						</div>
						<div className="clearfix"></div>
						
					</div>
				</div>
			</div>
		</section>
		
		<section className="hazardsctnbox">
			<div className="container">
				<div className="row">
					<div className="col-md-12 no-pad">
					
						<div className="col-md-6 col-sm-6 no-pad">
							<div className="flashfirebx">
								<div className="col-md-2 col-sm-2">
									<h1 className="visible-lg visible-md visible-sm">Primary Hazards</h1>
									<h1 className="visible-xs">Primary Hazards</h1>
								</div>
								<div className="col-md-10 col-sm-10 no-pad">
									<img src="/images/flashfirebx-image-new.webp" className="img-responsive" alt=""/>
									<div className="txtbox">
										<h2>Protection <br className="visible-lg visible-md"/>from Flash Fire</h2>
										<p>Incidents of flash fire are common in oil and gas, petrochemical and other industries. Workers are exposed to fires, toxic fumes and other hazardous risks. Proper flame resistant clothing will guard the worker from thermal flashes and allow them sufficient time to escape and avoid serious injuries.</p>
									</div>
								</div>
								<div className="clearfix"></div>
							</div>
						</div>
						
						<div className="col-md-6 col-sm-6 no-pad">
							<div className="elctrcflshbx">
								<img src="/images/elctrcflshbx-image.webp" className="img-responsive visible-xs" alt=""/>
								<div className="txtbox">
									<h2>Protection <br className="visible-lg visible-md"/>from Electric <br className="visible-lg visible-md"/>Arc Flash </h2>
									<p>Arc rated FR clothing protects workers from arc flashes that can cause second degree burns. AR protective garments undergo strict testing for the determination of level of protection.</p>
									<p></p>
								</div>
								<img src="/images/elctrcflshbx-image.webp" className="img-responsive visible-lg visible-md visible-sm" alt=""/>
							</div>
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="rngsctn">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2>OUR <span>FR</span> RANGE</h2>
						
						<div className="col-md-3 col-sm-4 col-xs-6">
							<div className="boxcntnr">
								<div className="boxcntnrimgbx">
									<img src="/images/classic-range-image.webp" className="img-responsive" alt=""/>
									<a href="/fr-clothing/classic-fr-clothing" className="">
										<div className="overlay">
											<div className="text">
												<p>Designed to solve real-world problems</p>
												<div className="arrw">
													<i className="fas fa-arrow-right"></i>
												</div>
											</div>
										</div>
									</a>
								</div>
								<h3>Classic</h3>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-4 col-xs-6">
							<div className="boxcntnr">
								<div className="boxcntnrimgbx">
									<img src="/images/welder-range-image.webp" className="img-responsive" alt=""/>
									<a href="/fr-clothing/welder-fr-clothing" className="">
										<div className="overlay">
											<div className="text">
												<p>Designed to protect against common hazards associated with welding</p>
												<div className="arrw">
													<i className="fas fa-arrow-right"></i>
												</div>
											</div>
										</div>
									</a>
								</div>
								<h3>WELDER</h3>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-4 col-xs-6">
							<div className="boxcntnr">
								<div className="boxcntnrimgbx">
									<img src="/images/molten-range-image.webp" className="img-responsive" alt=""/>
									<a href="/fr-clothing/molten-metal-clothing" className="">
										<div className="overlay">
											<div className="text">
												<p>Protection against molten metal explosion</p>
												<div className="arrw">
													<i className="fas fa-arrow-right"></i>
												</div>
											</div>
										</div>
									</a>
								</div>
								<h3>MOLTEN METAL</h3>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-4 col-xs-6">
							<div className="boxcntnr">
								<div className="boxcntnrimgbx">
									<img src="/images/oil-gas-range-image.webp" className="img-responsive" alt=""/>
									<a href="/fr-clothing/oil-gas-fr-clothing" className="">
									<div className="overlay">
										<div className="text">
											<p>Designed to protect against hazardous chemicals and flash fire</p>
											<div className="arrw">
												<i className="fas fa-arrow-right"></i>
											</div>
										</div>
									</div>
									</a>
								</div>
								<h3>OIL & GAS</h3>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-4 col-xs-6">
							<div className="boxcntnr">
								<div className="boxcntnrimgbx">
									<img src="/images/electrical-range-image.webp" className="img-responsive" alt=""/>
									<a href="/fr-clothing/electrical-arc-flash-clothing" className="">
									<div className="overlay">
										<div className="text">
											<p>Protection against high-intensity explosions and electric arc</p>
											<div className="arrw">
												<i className="fas fa-arrow-right"></i>
											</div>
										</div>
									</div>
									</a>
								</div>
								<h3>ELECTRICAL</h3>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-4 col-xs-6">
							<div className="boxcntnr">
								<div className="boxcntnrimgbx">
									<img src="/images/knits-range-image.webp" className="img-responsive" alt=""/>
									<a href="/fr-clothing/fr-knits-clothing" className="">
									<div className="overlay">
										<div className="text">
											<p>High - degree protection with unmatched comfort</p>
											<div className="arrw">
												<i className="fas fa-arrow-right"></i>
											</div>
										</div>
									</div>
									</a>
								</div>
								<h3>FR KNITS</h3>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-4 col-xs-6 ">
							<div className="boxcntnr">
								<div className="boxcntnrimgbx">
									<img src="/images/performance-range-image.webp" className="img-responsive" alt=""/>
									<a href="/fr-clothing/performance-wear-clothing" className="">
									<div className="overlay">
										<div className="text">
											<p>Designed to ensure maximum protection with optimum quality</p>
											<div className="arrw">
												<i className="fas fa-arrow-right"></i>
											</div>
										</div>
									</div>
									</a>
								</div>
								<h3>PERFORMANCE WEAR</h3>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-4 col-xs-6 ">
							<div className="boxcntnr">
								<div className="boxcntnrimgbx">
									<img src="/images/product/gloves/heat-nav-gloves-featured.png" className="img-responsive" alt=""/>
									<a href="/fr-clothing/heat-resistant-gloves" className="">
										<div className="overlay">
											<div className="text">
												<p>Heat Resistant Gloves</p>
												<div className="arrw">
													<i className="fas fa-arrow-right"></i>
												</div>
											</div>
										</div>
									</a>
								</div>
								<h3>Heat Resistant Gloves</h3>
							</div>
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="exprtsctn">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
					
						<div className="col-md-6 col-sm-6">
							<div className="imgbx">
								<img src="/images/export-image.webp" className="img-responsive" alt=""/>
								<div className="txtbx">
									<div className="col-md-3 col-sm-4">
										<img src="/images/export-image-new.svg" className="img-responsive" alt=""/>
									</div>
									<div className="col-md-9 col-sm-8">
										<p>Exporting to</p>
										<h3>over 60 countries</h3>
									</div>
									<div className="clearfix"></div>
								</div>
							</div>
						</div>
						
						<div className="col-md-6 col-sm-6">
							<div className="imgbx">
								<img src="/images/protecting-image.webp" className="img-responsive" alt=""/>
								<div className="txtbx">
									<div className="col-md-3 col-sm-4">
										<img src="/images/industries-image.svg" className="img-responsive" alt=""/>
									</div>
									<div className="col-md-9 col-sm-8">
										<p>Protecting people</p>
										<h3>across industries</h3>
									</div>
									<div className="clearfix"></div>
								</div>
							</div>
						</div>
					
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="crtfctsctn">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<h1>Accreditations & Certifications</h1>
						<div className="col-md-12">
							<p>Starting from the development, selection and sourcing of fabrics, garment designing, sample development, testing and certification of products to high-quality production, inspection and logistics, our dedicated team of industry experts work with you every step of the way.</p>
						</div>
						
						<div className="clearfix"></div>
						
						<div className="ctfctcntnr">
							<div className="crtfctbx">
								<img src="/images/certificate-cml-5100236682.svg" className="img-responsive" alt=""/>
							</div>
							<div className="crtfctbx">
								<img src="/images/certificate-cml-5100239284.svg" className="img-responsive" alt=""/>
							</div>
							<div className="crtfctbx">
								<img src="/images/certificate-cml-5100234072.svg" className="img-responsive" alt=""/>
							</div>
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="enqrysctn">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="col-md-9 col-sm-9">
							<h1><span>REQUEST</span> FOR BROCHURE</h1>
						</div>
						<div className="col-md-3 col-sm-3">
							<a href="/download-brochure" className="dscvrtxt hvr-sweep-to-left">DOWNLOAD</a>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="lowerrowsctn">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
					
						<div className="col-md-3 col-sm-3">
							<div className="imgbx">
								<img src="/images/certified-image.svg" className="img-responsive" alt=""/>
								<p>Certified <br className="visible-lg visible-md visible-sm"/>Products</p>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-3">
							<div className="imgbx">
								<img src="/images/ergo-image.svg" className="img-responsive" alt=""/>
								<p>Ergonomically <br className="visible-lg visible-md visible-sm"/>Designed</p>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-3">
							<div className="imgbx">
								<img src="/images/customized-image.svg" className="img-responsive" alt=""/>
								<p>Customized <br className="visible-lg visible-md visible-sm"/>Products</p>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-3">
							<div className="imgbx nbrdr">
								<img src="/images/fr-image.webp" className="img-responsive" alt=""/>
								<p>Next Generation <br className="visible-lg visible-md visible-sm"/>FR Workwear</p>
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
