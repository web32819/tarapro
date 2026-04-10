import Head from "next/head";

export const metadata = {
  title: "Rigger FR Trouser | Tarapro", 
  
  description: "Tarapro Rigger FR Trouser is uItra lightweight inherent FR workwear with excellent protection against flash fire and In-built antistatic properties",

  keywords: [ "RiggerFR trousers", "Rigger FR Pants", "Pants FR", "FR Trouser and Bib Pants", "Flame resistant Trouser and Bib Pants", "Fire resistant Trouser and Bib Pants", "Flame retardant Trouser and Bib Pants", "Fire retardant Trouser and Bib Pants", "FR Trouser and Bib Pants Manufacturer", "FR Trouser and Bib Pants Supplier"],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Rigger FR Trouser | Tarapro",
	
    description: "Tarapro Rigger FR Trouser is uItra lightweight inherent FR workwear with excellent protection against flash fire and In-built antistatic properties",
	
    url: "/fr-clothing/oil-gas-fr-clothing/rigger-fr-trousers",
	
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
														<h1 className="txtbnnr">Rigger FR Trouser</h1>
														<h3>93% M-aramid, 5% P-aramid, 2% Antistatic, 150gsm, Plain</h3>
														<ul className="">
															<li>UItra lightweight inherent FR workwear</li>
															<li>Excellent protection against flash fire</li>
															<li>In-built antistatic properties</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div> 
									<img src="/images/oil-rigger-jacket-banner.webp" className="img-responsive visible-lg visible-md" alt="Rigger FR Trousers"/>
									<img src="/images/oil-rigger-jacket-banner-ipad.webp" className="img-responsive visible-sm" alt="Rigger FR Trousers"/>
									<img src="/images/oil-rigger-jacket-banner-mb.webp" className="img-responsive visible-xs" alt="Rigger FR Trousers"/>
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
								<li className="breadcrumb-item"><a href="/index">Home</a></li>
								<li className="breadcrumb-item"><a href="/fr-clothing">FR Clothing</a></li>
								<li className="breadcrumb-item"><a href="/fr-clothing/oil-gas-fr-clothing">Oil & Gas Industry</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-trouser-pant">FR Trousers and Bib Pants</a></li>
								<li className="breadcrumb-item active" aria-current="page">Rigger FR Trousers</li>
							</ol>
						</nav>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<img src="/images/product/oil-gas/trouser/rigger-fr-trouser-image-one.webp" className="img-responsive" alt="Rigger FR Trousers"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>2 cross pockets</li>
									<li>2 rear pockets with plastic concealed snap closures, flaps with reflective piping</li>
									<li>2 thigh pockets with plastic concealed snap closures, flaps with reflective piping</li>
									<li>Fly closing with YKK metal zipper</li>
									<li>Sewn plastic button</li>
									<li>Side elasticized waist</li>
									<li>Bar-tacked at all stress points</li>
								</ul>

								<img src="/images/norms/en-iso-11612-a1-a2-b1-c1-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-1149-5.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-61482-1-2-class-1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/classified-ul.svg" className="img-responsive" alt="" />
								
								<img src="/images/norms/nfpa-2112.svg" className="img-responsive" alt="" />
								
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