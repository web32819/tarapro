import Head from "next/head";

import Image from 'next/image';

export const metadata = {
  title: "About Us | Leading manufacturer of FR clothing India | Tarapro", 
  
  description: "Tarapro is the largest manufacturer and supplier of Flame Resistant (FR) protective clothing in India. We offer a wide selection of FR Clothing for fire and arc flash hazards",

  keywords: [ "Fire resistant Clothing", "FR Clothing", "Fire resistant Clothing manufacturer", "Largest FR Resistant Clothing manufacturer", "Largest Flame resistant Clothing manufacturer", "Largest Fire Retardant Clothing manufacturer", "Largest Fire Retardant Clothing manufacturer", "Largest FR Coveralls manufacturer", "Largest FR Jacketsmanufacturer", "Largest Fireproof jackets", "Largest Pants FR manufacturer", "Largest Arc Flash Suit manufacturer",],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "About Us | Leading manufacturer of FR clothing India | Tarapro",
    description: "Tarapro is the largest manufacturer and supplier of Flame Resistant (FR) protective clothing in India. We offer a wide selection of FR Clothing for fire and arc flash hazards",
    url: "/about",
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
	
		<section className="bannerSection innrbr">
			<div className="container-fluid">
				<div className="row">
				
					<div className="col-md-12 no-pad">
						<div id="myCarousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
							
								<div className="item active">
									<div className="container">
										<div className="row">
											<div className="col-md-7 col-sm-8">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1>About Us</h1>
														<p className=""><strong>With three decades on its back, Tarapro stands tall as the largest manufacturer and supplier of Flame Resistant protective clothing in India. We invest in ensuring comfort and creating an inclusive corporate identity for industrial workers.</strong></p>
														<p className="">We have a wide selection of products to choose from that address fire hazards including Arc Fires and Flash Fires across Metals, Oil & Gas, Electrical and Minerals industries.</p>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									
									 {/* Desktop */}
									  <div className="visible-lg visible-md" style={{ position: 'relative', width: '100%', height: '800px' }}>
										<Image
										  src="/images/about-banner.webp"
										  alt="About Us Banner"
										  fill
										  style={{ objectFit: 'cover' }}
										  priority
										/>
									  </div>
									  
									     {/* Tablet */}
									  <div className="visible-sm" style={{ position: 'relative', width: '', height: '800px' }}>
										<Image
										  src="/images/about-banner-ipad.webp"
										  alt="About Us Banner Tablet"
										  fill
										  style={{ objectFit: 'cover' }}
										  priority
										/>
									  </div>
									    {/* Mobile */}
										  <div className="visible-xs" style={{ position: 'relative', width: '', height: '1000px' }}>
											<Image
											  src="/images/about-banner-mb.webp"
											  alt="About Us Banner Mobile"
											  fill
											  style={{ objectFit: 'cover' }}
											  priority
											/>
										  </div>
									  
									  
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="innrsctn abtsctn">
			<div className="container">
				<div className="row">
					<div className="col-md-12 no-pad">
						<nav aria-label="breadcrumb" className="visible-lg visible-md visible-sm">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="/">Home</a></li>
								<li className="breadcrumb-item active">About Us</li>
							</ol>
						</nav>
					
						<div className="col-md-6">
							<img src="/images/aboout-image-one.webp" className="img-responsive abtimg" alt=""/>
						</div>
						<div className="col-md-6">
							<p>At Tarapro, we are redefining the industry’s approach to Fire Resistant PPE workwear. As pioneers in the field of introducing, developing, and innovating hazard-resistant industrial workwear, we have now accumulated 3 decades of vital experience as experts in flame-retardant and Arc-Fire resistant clothing specialists.</p>
							
							<p>Since the inception of the company in 1988, we have made significant leaps in driving compliance and quality in FR PPE workwear for use in hazard-prone industries such as Metals, Oil and Gas, Electrical, and developed superior work-gear for potentially dangerous work environments that involve welding.</p>
							
							<p>Our specialties include a catalogue line of clothing that can resist fire damage, provide vital protection against Arc Fires and Flash Fire, control the effects of molten metals accidents and oil spills, etc, and mitigate damaging effects of UV rays exposure.</p>
							
							<p>Having excelled at priority compliance with international hazard-norms, we have also invested in ensuring comfort and creating an inclusive corporate identity for industrial workers. Our Performance Wear line is continuously experimenting with fabrics, designs, and knits to achieve optimum protection with superior wearability. We also provide customized workwear solutions for clients with specific safety requirements such as high visibility of workers, or answering their design preferences.</p>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="prdctbxdtls abtsctn">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1>WHY <span>US?</span></h1>
						<p className="txtone">Choosing TaraPro for your industrial workforce may be one of the best decisions you make. <span>Here’s why:</span></p>
						
						<div className="boxone">
							<div className="col-md-6 col-sm-6">
								<img src="/images/aboout-image-two.webp" className="img-responsive" alt=""/>
							</div>
							<div className="col-md-6 col-sm-6 abtbxone">
								<h3>The FR Specialists</h3>
								<p>Despite the best precautions taken, accidents at industrial worksites recur on a regular basis. Tarapro FR PPE anticipates and minimizes the risk of damage or fatalities by employing the right fabrics, cuts, and trims that encourage heat insulation, regulate body temperature, and allow time for escape in case of fire hazards, such as, Arc Fires or Flash Fires. This may be the difference between life and death!</p>
							</div>
							<div className="clearfix"></div>
						</div>

						<div className="boxone">
							<div className="col-md-6 col-sm-6 visible-xs">
								<img src="/images/about-image-three.webp" className="img-responsive" alt=""/>
							</div>
							<div className="col-md-6 col-sm-6 abtbxone">
								<h3>Credibility</h3>
								<p>With three decades on its back, Tarapro stands tall as the largest manufacturer and supplier of Flame Resistant protective clothing in India. With an impressive roster of clients that includes, the Steel Authority of India, Tata Steel, Essar Steel and others, and an export network of over 60 countries across the world, we are doubtlessly the brand to go for in Fire Resistant PPE wear. With growing expertise, we have been able to excel in Flame Retardant Clothing of Category III gradation which has earned accolades on a global scale.</p>
								<ul>
									<li><img src="/images/right-image.webp" className="img-responsive" alt=""/><p>An ISO 9001:2015 certified company</p></li>
									<li><img src="/images/right-image.webp" className="img-responsive" alt=""/><p className="nobrdr">A well-defined Quality Inspection Plan (QIP) ensuring consistent quality</p></li>
								</ul>
							</div>
							
							<div className="col-md-6 col-sm-6 visible-lg visible-md visible-sm">
								<img src="/images/about-image-three.webp" className="img-responsive" alt=""/>
							</div>
							<div className="clearfix"></div>
						</div>
						
						
						<div className="boxone">
							<div className="col-md-6 col-sm-6">
								<img src="/images/aboout-image-four.webp" className="img-responsive" alt=""/>
							</div>
							<div className="col-md-6 col-sm-6 abtbxone">
								<h3>Widest Range</h3>
								<p>We have a wide selection of products to choose from that address fire hazards including Arc Fires and Flash Fires across Metals, Oil & Gas, Electrical and Minerals industries. Each of our products is ergonomically designed to protect your precious workforce from unwanted injuries and fatalities in case of fire hazards. As FR PPE specialists, we excel in producing workwear that has heat insulation and allows time to escape in times of burning. The no-compromise protection comes with aesthetic designs and comfort to drive best practices among your workforce.</p>
								<a href="/fr-clothing" className="dscvrtxt hvr-sweep-to-right">View Products</a>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<div className="boxone">
							<div className="col-md-6 col-sm-6 visible-xs">
								<img src="/images/about-image-five.jpg" className="img-responsive" alt=""/> 
							</div>
							<div className="col-md-6 col-sm-6 abtbxone">
								<h3>Consistent Innovators</h3>
								<p>Our journey since inception is a testimony to game-changing innovations that have made us the most recognizable name in Fire Retardant PPE clothing for industrial use. We are focussed on keeping abreast of dynamic international haphazard norms and closely watch global trends in technology to adapt our newest creations to modern challenges. Every choice of fabric, every inclusion of detail – whether it is a pocket here, or a retroreflective strip there, is inspired by our role as experts in the FR field – a name you can rely on for optimum protection against fire hazards at your worksite.</p>
							</div>
							
							<div className="col-md-6 col-sm-6 visible-lg visible-md visible-sm">
								<img src="/images/about-image-five.jpg" className="img-responsive" alt=""/>
							</div>
							<div className="clearfix"></div>
						</div>
						
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
	</>
);
}