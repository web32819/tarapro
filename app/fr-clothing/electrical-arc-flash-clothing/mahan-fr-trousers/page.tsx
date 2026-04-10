import Head from "next/head";

export const metadata = {
  title: "Mahan FR Trouser | Tarapro", 
  
  description: "Mahan FR Trousers made in 2 Layered Modacrylic Aramid Multi Fiber Blend, 430gsm, Rip Stop for Arc flash protection. Features sophisticated look and optimal safety",

  keywords: [ "Mahan FR trousers", "Mahan FR Pants", "Pants FR", "FR Trouser and Bib Pants", "Flame resistant Trouser and Bib Pants", "Fire resistant Trouser and Bib Pants", "Flame retardant Trouser and Bib Pants", "Fire retardant Trouser and Bib Pants", "FR Trouser and Bib Pants Manufacturer", "FR Trouser and Bib Pants Supplier" ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Mahan FR Trouser | Tarapro",
	
    description: "Mahan FR Trousers made in 2 Layered Modacrylic Aramid Multi Fiber Blend, 430gsm, Rip Stop for Arc flash protection. Features sophisticated look and optimal safety",
	
    url: "/fr-clothing/electrical-arc-flash-clothing/mahan-fr-trousers",
	
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
														<h1 className="txtbnnr">Mahan FR Trousers</h1>
														<h3>2 Layered Modacrylic Aramid Multi Fiber Blend, 430gsm, Rip Stop</h3>
														<ul className="visible-lg visible-md visible-sm">
															<li>Arc flash protective clothing</li>
															<li>Sophisticated look, optimal safety</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/electric-mahan-trouser-banner.webp" className="img-responsive visible-lg visible-md" alt="Mahan Arc Flash Trousers"/>
									<img src="/images/electric-mahan-jacket-banner-ipad.webp" className="img-responsive visible-sm" alt="Mahan Arc Flash Trousers"/>
									<img src="/images/electric-mahan-jacket-banner-mb.webp" className="img-responsive visible-xs" alt="Mahan Arc Flash Trousers"/>
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
								<li className="breadcrumb-item"><a href="/fr-clothing/electrical-arc-flash-clothing">Electrical FR Clothing</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-trouser-pant">FR Trousers and Bib Pants</a></li>
								<li className="breadcrumb-item active" aria-current="page">Mahan FR Trousers</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							<ul className="prdctlsttxt visible-xs">
								<li>Multi-risk protective clothing</li>
								<li>Sophisticated look, optimal safety</li>
							</ul>
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox">
									<img src="/images/norms/atpv-26.svg" className="img-responsive " alt=""/>
								</div>
								<img src="/images/product/electrical/mahan/trouser/mahan-fr-trouser-image-one.webp" className="img-responsive" alt=""/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Fly closing with melamine and FR plastic zipper</li>
									<li>2 cross pockets</li>
									<li>Side elasticized waist</li>
									<li>2 rear pockets with flaps and plastic snap closures</li>
									<li>1 tool pocket with flap and plastic snap closure</li>
									<li>50mm FR reflective tape</li>
									<li>Bar-tacked at all stress points</li>
								</ul>

								<img src="/images/norms/en-61482-1-2-apc-2.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/nfpa-70-e-cat-3.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/astm-f-2621.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/astm-f1506.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-13758-2-50+.svg" className="img-responsive" alt=""/>
								
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