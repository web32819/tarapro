import Head from "next/head";

export const metadata = {
  title: "Konfor FR Coverall | Tarapro", 
  
  description: "Konfor FR coverall made FR Viscose, Aramid, Antistatic, 190gsm, Twill,stay protected from arc flash hazards, offers special design features for all day comfort",

  keywords: [ "FR Coveralls", "Konfor FR Coverall", "Konfor Coveralls", "Flame resistant Coveralls", "Fire resistant Coveralls", "Flame retardant Coveralls", "Fire retardant Coveralls", "Flame resistant Coveralls", "Fire resistant Coveralls", "Flame retardant Coveralls", "Fire retardant Coveralls", "Flame resistant Boiler suits", "Fire resistant Boiler suits", "Flame retardant Boiler suits", "Fire retardant Boiler suits", "FR Coveralls", "FR Boiler suits", "FR Coveralls Manufacturer", "FR Coveralls Supplier", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Konfor FR Coverall | Tarapro",
	
    description: "Konfor FR coverall made FR Viscose, Aramid, Antistatic, 190gsm, Twill,stay protected from arc flash hazards, offers special design features for all day comfort",
	
    url: "/fr-clothing/electrical-arc-flash-clothing/konfor-fr-coverall",
	
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
														<h1 className="txtbnnr">Konfor FR Coverall</h1>
														<h3>FR Viscose, Aramid, Antistatic, 190gsm, Twill</h3>
														<ul className="">
															<li>Special design features for all day comfort</li>
															<li>Stay protected from arc flash hazards in style</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/electric-coverall-banner.webp" className="img-responsive visible-lg visible-md" alt="Konfor Arc Rated Coverall"/>
									<img src="/images/electric-coverall-banner-ipad.webp" className="img-responsive visible-sm" alt="Konfor Arc Rated Coverall"/>
									<img src="/images/electric-coverall-banner-mb.webp" className="img-responsive visible-xs" alt="Konfor Arc Rated Coverall"/>
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
								<li className="breadcrumb-item"><a href="/fr-clothing">FR Clothing</a></li>
								<li className="breadcrumb-item"><a href="/fr-clothing/electrical-arc-flash-clothing">Electrical FR Clothing</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-coverall">FR Coverall</a></li>
								<li className="breadcrumb-item active" aria-current="page">Konfor FR Coverall</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
						
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox"><img src="/images/norms/atpv-10.svg" className="img-responsive " alt=""/></div>
								<img src="/images/product/electrical/coverall/konfor-fr-coverall-image-one.webp" className="img-responsive" alt="Konfor Arc Rated Coverall"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Stand up collar with velcro closure</li>
									<li>Front closure with zipper and snap closure</li>
									<li>2 chest pockets & back pockets all with flaps and snap closures</li>
									<li>2 side swing pockets with inner access opening</li>
									<li>1 inside pocket on left chest</li>
									<li>Cuffs adjusted with velcro tab</li>
									<li>Elasticated waistband</li>
									<li>50mm FR reflective strips on shoulders, sleeves, torso and legs</li>
									<li>Expandable leg opening with zipper at bottom hem</li>
									<li>Bar-tacked at all stress points</li>
								</ul>
								
								
								<img src="/images/norms/ce.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-iso-11612-a1-b1-c1-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-1149-5.svg" className="img-responsive" alt=""/>
								
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
		
		
	</>
	
);
}