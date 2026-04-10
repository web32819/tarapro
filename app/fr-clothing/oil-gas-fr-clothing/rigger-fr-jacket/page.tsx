import Head from "next/head";

export const metadata = {
  title: "Rigger FR Jacket | Tarapro", 
  
  description: "Rigger FR Jacket is Ultra lightweight inherent FR workwear with In-built antistatic properties & offers excellent protection against flash fire",

  keywords: [ "Flame Resistant Rigger FR Jackets", "FR Jackets", "Flame resistant Jackets", "Fire resistant Jackets", "Flame retardant Jackets", "Fire retardant Jackets", "Fireproof jackets", "FRC", "FR Workwear", "Flame resistant Clothing"],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Rigger FR Jacket | Tarapro",
	
    description: "Rigger FR Jacket is Ultra lightweight inherent FR workwear with In-built antistatic properties & offers excellent protection against flash fire",
	
    url: "/fr-clothing/oil-gas-fr-clothing/rigger-fr-jacket",
	
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
														<h1 className="txtbnnr">Rigger FR Jacket</h1>
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
									<img src="/images/oil-rigger-jacket-banner.webp" className="img-responsive visible-lg visible-md" alt="Rigger FR Jacket"/>
									<img src="/images/oil-rigger-jacket-banner-ipad.webp" className="img-responsive visible-sm" alt="Rigger FR Jacket"/>
									<img src="/images/oil-rigger-jacket-banner-mb.webp" className="img-responsive visible-xs" alt="Rigger FR Jacket"/>
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
								<li className="breadcrumb-item"><a href="/flame-resistant-jacket">FR Jacket</a></li>
								<li className="breadcrumb-item active" aria-current="page">Rigger FR Jacket</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<img src="/images/product/oil-gas/jacket/rigger-fr-jacket-image-one.webp" className="img-responsive" alt="Rigger FR Jacket"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Turn down collar + high neck collar with velcro</li>
									<li>25mm FR reflective tape</li>
									<li>2 chest box pleat pockets with concealed snap closures</li>
									<li>CF closing with plastic concealed snap closures</li>
									<li>Adjustable waist belt with plastic concealed snap button</li>
									<li>Adjustable sleeve cuff with concealed plastic snap closures</li>
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
		
		<section className="prdctbxdtls">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						
						<div className="col-md-4 col-sm-6 col-md-offset-2">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/oil-gas/jacket/rigger-fr-jacket-image-two.webp" className="img-responsive" alt="Rigger FR Jacket"/>
								</div>
								<hr/>
								<h3>Segmented heat transfer tape on back yoke</h3>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/oil-gas/jacket/rigger-fr-jacket-image-three.webp" className="img-responsive" alt="Rigger FR Jacket"/>
								</div>
								<hr/>
								<h3>Pen pocket on sleeve</h3>
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