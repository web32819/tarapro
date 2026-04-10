import Head from "next/head";

export const metadata = {
  title: "Steelco FR Jacket | Tarapro", 
  
  description: "Steelco Jacket is certified fire resistant jacket made in 100% Cotton, 470gsm, Satin, provides Excellent molten iron protection & Greater visibility",

  keywords: [ "Flame Resistant Steelco Jacket", "Flame Resistant Jacket", "Flame Retardant Jacket", "Fire Resistant Jacket", "Fire Retardant Jacket", "FR Jacket", "Flame Resistant Jackets", "Flame Retardant Jackets", "Fire Resistant Jackets", "Fire Retardant Jackets", "FR Jackets", "Fireproof jackets", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Steelco FR Jacket | Tarapro",
	
    description: "Steelco Jacket is certified fire resistant jacket made in 100% Cotton, 470gsm, Satin, provides Excellent molten iron protection & Greater visibility",
	
    url: "/fr-clothing/molten-metal-clothing/steelco-fr-jacket",
	
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
														<h1 className="txtbnnr">Steelco FR Jacket</h1>
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
									<img src="/images/molten-steelco-jacket-banner.webp" className="img-responsive visible-lg visible-md" alt="Steelco FR Jacket"/>
									<img src="/images/molten-steelco-jacket-banner-ipad.webp" className="img-responsive visible-sm" alt="Steelco FR Jacket"/>
									<img src="/images/molten-steelco-jacket-banner-mb.webp" className="img-responsive visible-xs" alt="Steelco FR Jacket"/>
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
					<div className="col-md-12 no-pad">
					
						<nav aria-label="breadcrumb" className="visible-lg visible-md visible-sm">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="/">Home</a></li>
								<li className="breadcrumb-item"><a href="/fr-clothing">FR Clothing</a></li>
								<li className="breadcrumb-item"><a href="/fr-clothing/molten-metal-clothing">Molten Metal</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-jacket">FR Jacket</a></li>
								<li className="breadcrumb-item active" aria-current="page">Steelco FR Jacket</li>
							</ol>
						</nav>

						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox">
									<img src="/images/norms/atpv-11-4.svg" className="img-responsive " alt=""/> 
								</div>
								<img src="/images/product/molten-metal/steelco-jacket/steelco-fr-jacket-image-one.webp" className="img-responsive" alt="Steelco FR Jacket"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Turn down collar</li>
									<li>2 chest pockets with flaps and concealed plastic snap closures</li>
									<li>Adjustable waist belt with plastic concealed snap button</li>
									<li>Adjustable sleeve cuffs with plastic concealed snap buttons</li>
									<li>Reflective piping on chest, sleeves and back</li>
									<li>Bar-tacked at all stress points</li>
								</ul>

								<img src="/images/norms/en-iso-11612-a1-a2-b1-c1-e3-f1.svg" className="img-responsive" alt=""/>
								<img src="/images/norms/en-61482-1-2-className-1.svg" className="img-responsive" alt=""/>
								
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
						
						<div className="col-md-4 col-sm-6 col-md-offset-4">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/molten-metal/steelco-jacket/steelco-fr-jacket-image-two.webp" className="img-responsive" alt="Steelco FR Jacket"/>
								</div>
								<hr/>
								<h3>Reflective piping on the back</h3>
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