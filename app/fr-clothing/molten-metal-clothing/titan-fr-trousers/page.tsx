import Head from "next/head";

export const metadata = {
  title: "Titan FR Trousers", 
  
  description: "Tarapro Titan FR Pants is No. 1 choice for protection against molten aluminum, bath, cryolite, iron, zinc and copper",

  keywords: [ "Titan FR trousers", "Titan FR Pants", "Pants FR", "FR Trouser and Bib Pants", "Flame resistant Trouser and Bib Pants", "Fire resistant Trouser and Bib Pants", "Flame retardant Trouser and Bib Pants", "Fire retardant Trouser and Bib Pants", "FR Trouser and Bib Pants Manufacturer", "FR Trouser and Bib Pants Supplier", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Titan FR Trousers",
	
    description: "Tarapro Titan FR Pants is No. 1 choice for protection against molten aluminum, bath, cryolite, iron, zinc and copper",
	
    url: "/fr-clothing/molten-metal-clothing/titan-fr-trousers",
	
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
														<h1 className="txtbnnr">Titan FR Trouser</h1>
														<h3>FR Viscose & Wool Based Multi Fiber, 330gsm, Double Faced</h3>
														<ul className="">
															<li>No. 1 choice for protection against molten aluminum, bath, cryolite, iron, zinc and copper</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div> 
									<img src="/images/molten-titanic-trouser-banner.webp" className="img-responsive visible-lg visible-md" alt="Titan Fire Resistant Trousers"/>
									<img src="/images/molten-titanic-trouser-banner-ipad.webp" className="img-responsive visible-sm" alt="Titan Fire Resistant Trousers"/>
									<img src="/images/molten-titanic-trouser-banner-mb.webp" className="img-responsive visible-xs" alt="Titan Fire Resistant Trousers"/>
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
								<li className="breadcrumb-item active" aria-current="page">Titan FR Trouser</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox">
									<img src="/images/norms/atpv-12-4.svg" className="img-responsive " alt=""/>
								</div>
								<img src="/images/product/molten-metal/titan-trouser/titan-fr-trouser-image-one.webp" className="img-responsive" alt="Titan Fire Resistant Trousers"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>2 cross pockets</li>
									<li>2 rear pockets with flaps and concealed plastic snap closures</li>
									<li>2 thigh pockets with flaps and concealed plastic snap closures</li>
									<li>Fly closing with YKK metal zipper</li>
									<li>Sewn plastic button</li>
									<li>50mm FR reflective tape</li>
									<li>Side elasticized waist</li>
									<li>Bar-tacked at all stress points</li>
								</ul>

								<img src="/images/norms/en-iso-11612-a1-a2-b1-c1-d3-e3-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-iso-11611-class-2-a1-a2.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-1149-5.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-61482-1-2-class-1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/nfpa-70-e-cat-2.svg" className="img-responsive" alt=""/>
								
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