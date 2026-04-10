import Head from "next/head";

export const metadata = {
  title: "Contra FR Jacket", 
  
  description: "Contra Jacket is certified fire resistant jacket made in 100% Cotton, 260gsm, Twill.. Recommended for protection against light welding",

  keywords: [ "Flame Resistant Contra Jacket", "Flame Resistant Jacket", "Flame Retardant Jacket", "Fire Resistant Jacket", "Fire Retardant Jacket", "FR Jacket", "Flame Resistant Jackets", "Flame Retardant Jackets", "Fire Resistant Jackets", "Fire Retardant Jackets", "FR Jackets", "Fireproof jackets", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Contra FR Jacket",
    description: "Contra Jacket is certified fire resistant jacket made in 100% Cotton, 260gsm, Twill.. Recommended for protection against light welding",
    url: "/fr-clothing/classic-fr-clothing/contra-fr-jacket",
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

export default function () {
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
											<div className="col-md-6 col-sm-7">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1 className="txtbnnr">Contra FR Jacket</h1>
														<h3>100% Cotton, 260gsm, Twill</h3>
														<ul className="">
															<li>Optimum flame retardant protection in lightweight comfort</li>
															<li>Suitable for light welding</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/classic-banner-details.webp" className="img-responsive visible-lg visible-md" alt="Contra Flame Resistant Jacket"/>
									<img src="/images/contra-jacket-banner-ipad.webp" className="img-responsive visible-sm" alt="Contra Flame Resistant Jacket"/>
									<img src="/images/contra-jacket-banner-mb.webp" className="img-responsive visible-xs" alt="Contra Flame Resistant Jacket"/>
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
					
						<nav aria-label="breadcrumb" className="visible-lg visible-md visible-sm">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="/">Home</a></li>
								<li className="breadcrumb-item"><a href="/fr-clothing">FR Clothing</a></li>
								<li className="breadcrumb-item"><a href="/fr-clothing/classic-fr-clothing">Classic FR Clothing</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-jacket">FR Jacket</a></li>
								<li className="breadcrumb-item active" aria-current="page">Contra FR Jacket</li>
							</ol>
						</nav>

					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox"><img src="/images/norms/atpv-8-7.svg" className="img-responsive " alt=""/></div>
								<img src="/images/product/classic/classic-prdct-image.webp" className="img-responsive" alt="Contra Flame Resistant Jacket"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Turn down collar + high neck collar with velcro</li>
									<li>CF closing with plastic concealed snap and velcro closures</li>
									<li>2 chest pockets with flap closures</li>
									<li>2 bone pockets with reflective piping</li>
									<li>50mm FR reflective tape</li>
									<li>Adjustable sleeve cuffs with plastic concealed snap closures</li>
									<li>Adjustable waist belt with plastic concealed snap closure</li>
									<li>Bar - tacked at all stress points</li>
								</ul>
								
								
								<img src="/images/norms/en-iso-11612-2015-a1-a2-b1-c1-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-iso-11611-2015-class-1-a1-a2.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-61482-1-2-class-1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/nfpa-70-e-cat-2.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/nfpa-2112.svg" className="img-responsive" alt=""/>
								
								<div className="clearfix"></div>
							</div>
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="prdctbxdtls">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						
						<div className="col-md-4 col-sm-6">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/classic/back-image.webp" className="img-responsive" alt=""/>
								</div>
								<hr/>
								<h3>Vented back</h3>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/classic/front-image.webp" className="img-responsive" alt=""/>
								</div>
								<hr/>
								<h3>Reflective stripes <br/> on the shoulder</h3>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/classic/cover.webp" className="img-responsive" alt=""/>
								</div>
								<hr/>
								<h3>Bone pockets</h3>
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