import Head from "next/head";

export const metadata = {
  title: "Defender FR Trouser", 
  
  description: "Defender FR Trouser is designed to protect workers from the hazards of an arc flash incident. The perfect choice for everyday arc flash protection",

  keywords: [ "Defender FR trousers", "Defender FR Pants", "Pants FR", "FR Trouser and Bib Pants", "Flame resistant Trouser and Bib Pants", "Fire resistant Trouser and Bib Pants", "Flame retardant Trouser and Bib Pants", "Fire retardant Trouser and Bib Pants", "FR Trouser and Bib Pants Manufacturer", "FR Trouser and Bib Pants Supplier", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Defender FR Trouser",
	
    description: "Defender FR Trouser is designed to protect workers from the hazards of an arc flash incident. The perfect choice for everyday arc flash protection",
	
    url: "/fr-clothing/electrical-arc-flash-clothing/defender-fr-trousers",
	
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
														<h1 className="txtbnnr">Defender FR Trouser</h1>
														<h3>Modacrylic Cellulose Based Multi Fiber, 250gsm, Rip Stop</h3>
														<ul className="">
															<li>The perfect choice for everyday arc flash protection</li>
															<li>Ergonomic design for maximum comfort</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/electric-defender-trouser-banner.webp" className="img-responsive visible-lg visible-md" alt="Defender Arc Rated Trousers"/>
									<img src="/images/electric-defender-trouser-banner-ipad.webp" className="img-responsive visible-sm" alt="Defender Arc Rated Trousers"/>
									<img src="/images/electric-defender-trouser-banner-mb.webp" className="img-responsive visible-xs" alt="Defender Arc Rated Trousers"/>
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
								<li className="breadcrumb-item"><a href="/flame-resistant-trouser-pant">FR Trousers and Bib Pants</a></li>
								<li className="breadcrumb-item active" aria-current="page">Defender FR Trouser</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox"><img src="/images/norms/atpv-12.svg" className="img-responsive " alt=""/></div>
								<img src="/images/product/electrical/defender/trouser/defender-fr-trouser-image-one.webp" className="img-responsive" alt="Defender Arc Rated Trousers"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Elasticized waist with button for comfortable fit</li>
									<li>Fly close with zipper</li>
									<li>2 side pockets with large pockets bags inside</li>
									<li>2 hip pockets with flaps & snap closures</li>
									<li>2 large sized cargo pockets with flaps & snap closures</li>
									<li>Gusseted crotch</li>
									<li>50mm FR reflective tapes</li>
									<li>Bar-tacked at all stress points</li>
								</ul>
								
								
								<img src="/images/norms/en-iso-11612-a1-a2-b1-c1-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-1149-5.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-iso-11611-class-1-a1-a2.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-13034-type-6.svg" className="img-responsive" alt=""/>
								
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