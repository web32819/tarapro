import Head from "next/head";

export const metadata = {
  title: "Contra FR Trousers", 
  
  description: "Tarapro offers premier quality Contra FR trousers designed to protect workers from the hazards of fire and heat, suitable for light wielding purposes",

  keywords: [ "Contra FR trousers", "contra FR Pants", "Pants FR", "FR Trouser and Bib Pants", "Flame resistant Trouser and Bib Pants", "Fire resistant Trouser and Bib Pants", "Flame retardant Trouser and Bib Pants", "Fire retardant Trouser and Bib Pants", "FR Trouser and Bib Pants Manufacturer", "FR Trouser and Bib Pants Supplier", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Contra FR Trousers",
    description: "Tarapro offers premier quality Contra FR trousers designed to protect workers from the hazards of fire and heat, suitable for light wielding purposes",
    url: "/fr-clothing/classic-fr-clothing/contra-fr-trousers",
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
														<h1 className="txtbnnr">Contra FR Trousers</h1>
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
									<img src="/images/contra-trouser.webp" className="img-responsive visible-lg visible-md" alt="Contra FR Trousers"/>
									<img src="/images/contra-trouser-banner-ipad.webp" className="img-responsive visible-sm" alt="Contra FR Trousers"/>
									<img src="/images/contra-trouser-banner-mb.webp" className="img-responsive visible-xs" alt="Contra FR Trousers"/>
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
								<li className="breadcrumb-item"><a href="/flame-resistant-trouser-pant">FR Trousers and Bib Pants</a></li>
								<li className="breadcrumb-item active" aria-current="page">Contra FR Trousers</li>
							</ol>
						</nav>

						<div className="col-md-6 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox"><img src="/images/norms/atpv-8-7.svg" className="img-responsive " alt=""/></div>
								<img src="/images/product/classic/trouser/classic-trouser.webp" className="img-responsive" alt="Contra FR Trousers"/>
							</div>
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Fly closing with YKK metal zipper and sewn plastic button</li>
									<li>2 cross pockets</li>
									<li>2 rear pockets with flaps and concealed plastic snap closures</li>
									<li>2 bone pockets with reflective piping</li>
									<li>50mm FR reflective tape</li>
									<li>Side elasticized waist</li>
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
		
		
	</>
);
}