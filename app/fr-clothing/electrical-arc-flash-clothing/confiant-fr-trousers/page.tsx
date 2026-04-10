import Head from "next/head";

export const metadata = {
  title: "Confiant FR Trouser", 
  
  description: "Confiant FR Trousers is our ground breaking innovation in arc resistant clothing with unmatched protection, ultimate comfort, uncompromised style",

  keywords: [ "Confiant FR trousers", "confiant FR Pants", "Pants FR", "FR Trouser and Bib Pants", "Flame resistant Trouser and Bib Pants", "Fire resistant Trouser and Bib Pants", "Flame retardant Trouser and Bib Pants", "Fire retardant Trouser and Bib Pants", "FR Trouser and Bib Pants Manufacturer", "FR Trouser and Bib Pants Supplier", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Confiant FR Trouser",
	
    description: "Confiant FR Trousers is our ground breaking innovation in arc resistant clothing with unmatched protection, ultimate comfort, uncompromised style",
	
    url: "/fr-clothing/electrical-arc-flash-clothing/confiant-fr-trousers",
	
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
														<h1 className="txtbnnr">Confiant FR Trousers</h1>
														<h3>FR Viscose, Aramid, Antistatic, 190gsm, Twill</h3>
														<ul className="">
															<li>Ground breaking innovation in arc resistant clothing</li>
															<li>Unmatched protection, ultimate comfort, uncompromised style</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/electric-trouser-banner.webp" className="img-responsive visible-lg visible-md" alt="Confiant Arc Flash Trousers"/>
									<img src="/images/electric-trouser-banner-ipad.webp" className="img-responsive visible-sm" alt="Confiant Arc Flash Trousers"/>
									<img src="/images/electric-trouser-banner-mb.webp" className="img-responsive visible-xs" alt="Confiant Arc Flash Trousers"/>
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
								<li className="breadcrumb-item active" aria-current="page">Confiant FR Trousers</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox"><img src="/images/norms/atpv-10.svg" className="img-responsive " alt=""/></div>
								<img src="/images/product/electrical/trouser/confiant-fr-trouser-image-one.webp" className="img-responsive" alt="Confiant Arc Flash Trousers"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>2 side pockets</li>
									<li>2 hip pockets with snaps and flaps</li>
									<li>Hanger loop</li>
									<li>7 loop design</li>
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