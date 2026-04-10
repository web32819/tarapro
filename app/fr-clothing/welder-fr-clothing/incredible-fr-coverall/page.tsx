import Head from "next/head";

export const metadata = {
  title: "Incredible FR Coverall | Tarapro", 
  
  description: "INCREDIBLE FR COVERALL made in 100% Cotton, 350gsm, Satin, provides excellent molten iron protection. High performance FR clothing recommended for heavy welding",

  keywords: [ "FR Coveralls", "Incredible FR Coverall", "Incredible Coveralls", "Flame resistant Coveralls", "Fire resistant Coveralls", "Flame retardant Coveralls", "Fire retardant Coveralls", "Flame resistant Overalls", "Fire resistant Overalls", "Flame retardant Overalls", "Fire retardant Overalls", "Flame resistant Boiler suits", "Fire resistant Boiler suits", "Flame retardant Boiler suits", "Fire retardant Boiler suits", "FR Overalls", "FR Boiler suits", "FR Coveralls Manufacturer", "FR Coveralls Supplier", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Incredible FR Coverall | Tarapro",
	
    description: "INCREDIBLE FR COVERALL made in 100% Cotton, 350gsm, Satin, provides excellent molten iron protection. High performance FR clothing recommended for heavy welding",
	
    url: "/fr-clothing/welder-fr-clothing/incredible-fr-coverall",
	
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
											<div className="col-md-8 col-sm-7">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1 className="txtbnnr">Incredible FR Coverall</h1>
														<h3>100% Cotton, 350gsm, Satin</h3>
														<ul className="">
															<li>Excellent molten iron protection</li>
															<li>High performance FR clothing recommended for heavy welding</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/welder-coverall-banner.webp" className="img-responsive visible-lg visible-md" alt="Incredible FR Coverall"/>
									<img src="/images/welder-coverall-banner-ipad.webp" className="img-responsive visible-sm" alt="Incredible FR Coverall"/>
									<img src="/images/welder-coverall-banner-mb.webp" className="img-responsive visible-xs" alt="Incredible FR Coverall"/>
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
								<li className="breadcrumb-item"><a href="/fr-clothing/welder-fr-clothing">Welder FR Clothing</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-coverall">FR Coverall</a></li>
								<li className="breadcrumb-item active" aria-current="page">Incredible FR Coverall</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<img src="/images/product/welder/coverall/incredible-fr-coverall-image-one.webp" className="img-responsive" alt="Incredible FR Coverall"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Turn down collar + high neck collar with velcro</li>
									<li>2 chest pockets with flaps and concealed plastic snap closures</li>
									<li>CF closing with YKK 2-way CE metal zipper & velcro closures</li>
									<li>50mm FR reflective tape</li>
									<li>2 cross pockets</li>
									<li>2 rear pockets with flaps and concealed plastic snap closures</li>
									<li>1 thigh pocket with flap and concealed plastic snap closure</li>
									<li>Elasticized waist</li>
									<li>Bar-tacked at all stress points</li>
								</ul>
								
								
								<img src="/images/norms/en-iso-11612-2015-a1-a2-b1-c1-e3-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-iso-11611-class-2-a1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-61482-1-2-class-1.svg" className="img-responsive" alt=""/>

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
						
						<div className="col-md-4 col-sm-6 col-md-offset-2">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/welder/coverall/incredible-fr-coverall-front-image.webp" className="img-responsive" alt=""/>
								</div>
								<hr/>
								<h3>Vented back</h3>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/welder/coverall/incredible-fr-coverall-side-image.webp" className="img-responsive" alt=""/>
								</div>
								<hr/>
								<h3>1 Tool pocket</h3>
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