import Head from "next/head";

export const metadata = {
  title: "Incredible FR Jacket | Tarapro", 
  
  description: "Incredible FR Jacket is certified fire Proof jacket made in 100% Cotton, 350gsm, Satin, offers excellent molten iron protection recommended for heavy welding",

  keywords: [ "Flame Resistant Increible FR Jacket", "Flame Resistant Jacket", "Flame Retardant Jacket", "Fire Resistant Jacket", "Fire Retardant Jacket", "FR Jacket", "Flame Resistant Jackets", "Flame Retardant Jackets", "Fire Resistant Jackets", "Fire Retardant Jackets", "FR Jackets", "Fireproof jackets", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Incredible FR Jacket | Tarapro",
	
    description: "Incredible FR Jacket is certified fire Proof jacket made in 100% Cotton, 350gsm, Satin, offers excellent molten iron protection recommended for heavy welding",
	
    url: "/fr-clothing/welder-fr-clothing/incredible-fr-jacket",
	
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
														<h1 className="txtbnnr">Incredible FR Jacket</h1>
														<h3>100% Cotton, 350gsm, Satin</h3>
														<ul className="">
															<li>Excellent molten iron protection</li>
															<li>High performance FR clothing recommended for heavy welding</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/welder-jacket-banner.webp" className="img-responsive visible-lg visible-md" alt="Incredible Flame Retardant Jacket"/>
									<img src="/images/welder-jacket-banner-ipad.webp" className="img-responsive visible-sm" alt="Incredible Flame Retardant Jacket"/>
									<img src="/images/welder-jacket-banner-mb.webp" className="img-responsive visible-xs" alt="Incredible Flame Retardant Jacket"/>
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
								<li className="breadcrumb-item"><a href="/fr-clothing/welder-fr-clothing">Welder FR Clothing</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-jacket">FR Jacket</a></li>
								<li className="breadcrumb-item active" aria-current="page">Incredible FR Jacket</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<img src="/images/product/welder/jacket/incredible-fr-jacket-image-one.webp" className="img-responsive" alt="Incredible Flame Retardant Jacket"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Turn down collar + high neck collar with velcro</li>
									<li>2 chest pockets with flaps and concealed plastic snap closures</li>
									<li>50mm FR reflective tape</li>
									<li>2 down pockets for ample storage with snap closures</li>
									<li>Adjustable waist belt with plastic concealed snap closure</li>
									<li>Adjustable sleeve cuff with concealed plastic snap closures</li>
									<li>Bar - tacked at all stress points</li>
								</ul>
								
								
								<img src="/images/norms/en-iso-11612-2015-a1-a2-b1-c1-e3-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-iso-11611-class-2-a1.svg" className="img-responsive" alt=""/>
								
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