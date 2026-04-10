import Head from "next/head";

export const metadata = {
  title: "Steelco FR Trouser | Tarapro", 
  
  description: "Tarapro steelco FR trousers designed to protect workers from the hazards of molten iron and high heat. Made in 100% Cotton, 470gsm, Satin",

  keywords: [ "Steelco FR trousers", "Steelco FR Pants", "Pants FR", "FR Trouser and Bib Pants", "Flame resistant Trouser and Bib Pants", "Flame resistant Trouser and Bib Pants", "Flame retardant Trouser and Bib Pants", "Fire retardant Trouser and Bib Pants", "FR Trouser and Bib Pants Manufacturer", "FR Trouser and Bib Pants Supplier", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Steelco FR Trouser | Tarapro",
	
    description: "Tarapro steelco FR trousers designed to protect workers from the hazards of molten iron and high heat. Made in 100% Cotton, 470gsm, Satin",
	
    url: "/fr-clothing/molten-metal-clothing/steelco-fr-trousers",
	
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
														<h1 className="txtbnnr">Steelco FR Trouser</h1>
														<h3>100% Cotton, 470gsm, Satin</h3>
														<ul className="">
															<li>Excellent molten iron protection</li>
															<li>Greater visibility</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div> 
									<img src="/images/molten-steelco-trouser-banner.webp" className="img-responsive visible-lg visible-md" alt="Steelco Fire Retardant Trousers"/>
									<img src="/images/molten-steelco-trouser-banner-ipad.webp" className="img-responsive visible-sm" alt="Steelco Fire Retardant Trousers"/>
									<img src="/images/molten-steelco-trouser-banner-mb.webp" className="img-responsive visible-xs" alt="Steelco Fire Retardant Trousers"/>
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
								<li className="breadcrumb-item"><a href="/fr-clothing/molten-metal-clothing">Molten Metal</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-trouser-pant">FR Trousers and Bib Pants</a></li>
								<li className="breadcrumb-item active" aria-current="page">Steelco FR Trouser</li>
							</ol>
						</nav>
						
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox">
									<img src="/images/norms/atpv-11-4.svg" className="img-responsive " alt=""/> 
								</div>
								<img src="/images/product/molten-metal/steelco-trouser/steelco-fr-trouser-image-one.webp" className="img-responsive" alt="Steelco Fire Retardant Trousers"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>2 cross pockets</li>
									<li>2 rear pockets with flaps and concealed plastic snap closures</li>
									<li>1 tool pocket</li>
									<li>Fly closing with YKK metal zipper</li>
									<li>Sewn plastic button</li>
									<li>50mm FR reflective tape</li>
									<li>Bar-tacked at all stress points</li>
								</ul>

								<img src="/images/norms/en-iso-11612-a1-a2-b1-c1-e3-f1.svg" className="img-responsive" alt=""/>
								<img src="/images/norms/en-61482-1-2-class-1.svg" className="img-responsive" alt=""/>
								
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