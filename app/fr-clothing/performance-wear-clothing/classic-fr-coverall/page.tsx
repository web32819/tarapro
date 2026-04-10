import Head from "next/head";

export const metadata = {
  title: "Classic FR Coverall | Tarapro", 
  
  description: "CLASSIC FR COVERALL made 100% Cotton, 280gsm, durable and comfortable for your basic needs Durable and comfortable for your basic needs",

  keywords: [ "FR Coveralls", "Classic FR Coverall", "Flame resistant Coveralls", "Fire resistant Coveralls", "Flame retardant Coveralls", "Fire retardant Coveralls", "Flame resistant Coveralls", "Fire resistant Coveralls", "Flame retardant Coveralls", "Fire retardant Coveralls", "Flame resistant Boiler suits", "Fire resistant Boiler suits", "Flame retardant Boiler suits", "Fire retardant Boiler suits", "FR Coveralls", "FR Boiler suits", "FR Coveralls Manufacturer", "FR Coveralls Supplier", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Classic FR Coverall | Tarapro",
	
    description: "CLASSIC FR COVERALL made 100% Cotton, 280gsm, durable and comfortable for your basic needs Durable and comfortable for your basic needs",
	
    url: "/fr-clothing/performance-wear-clothing/classic-fr-coverall",
	
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
											<div className="col-md-6 col-sm-6">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1 className="txtbnnr">Classic Coverall</h1>
														<h3>100% Cotton, NFR 280gsm</h3>
														<ul className="">
															<li>Durable and comfortable for your basic needs</li>
															<li>Industry’s favorite</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/wear-coverall-banner.webp" className="img-responsive visible-lg visible-md" alt="Classic Fire Resistant Coverall"/>
									<img src="/images/wear-coverall-banner-ipad.webp" className="img-responsive visible-sm" alt="Classic Fire Resistant Coverall"/>
									<img src="/images/wear-coverall-banner-mb.webp" className="img-responsive visible-xs" alt="Classic Fire Resistant Coverall"/>
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
								<li className="breadcrumb-item"><a href="/fr-clothing/performance-wear-clothing">Performance Wear</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-coverall">FR Coverall</a></li>
								<li className="breadcrumb-item active" aria-current="page">Classic FR Coverall</li>
								
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<img src="/images/product/wear/coverall/classic-fr-coverall-image-one.webp" className="img-responsive" alt="Classic Fire Resistant Coverall"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Turn down collar + high neck collar with velcro</li>
									<li>CF closing with 2-way YKK CE zipper & velcros</li>
									<li>50mm Hi-Vis yellow reflective tape</li>
									<li>2 chest pockets with flaps and velcro closures</li>
									<li>Vented back of better ventilation</li>
									<li>Bar-tacked at all stress points</li>
								</ul>
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
									<img src="/images/product/wear/coverall/classic-fr-coverall-image-two.webp" className="img-responsive" alt="Classic Fire Resistant Coverall"/>
								</div>
								<hr/>
								<h3>1 thigh pocket with flap and velcro closure</h3>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/wear/coverall/classic-fr-coverall-image-three.webp" className="img-responsive" alt="Classic Fire Resistant Coverall"/>
								</div>
								<hr/>
								<h3>1 rear pocket with velcro closure, flap with reflective piping</h3>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/wear/coverall/classic-fr-coverall-image-four.webp" className="img-responsive" alt="Classic Fire Resistant Coverall"/>
								</div>
								<hr/>
								<h3>Elasticized waist</h3>
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