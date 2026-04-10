import Head from "next/head";

export const metadata = {
  title: "Edison Hi-Vis Jacket | Tarapro", 
  
  description: "Tarapro is renowned manufacturer and supplier of High Visibility Clothing. EDISON HI-VIS JACKET made in NFR, 260gsm",

  keywords: [ "Edison Hi-Vis FR Jacket", "Flame Resistant Jacket", "Flame Retardant Jacket", "Fire Resistant Jacket", "Fire Retardant Jacket", "FR Jacket", "Flame Resistant Jackets", "Flame Retardant Jackets", "Fire Resistant Jackets", "Fire Retardant Jackets", "FR Jackets", "Fireproof jackets"],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Edison Hi-Vis Jacket | Tarapro",
	
    description: "Tarapro is renowned manufacturer and supplier of High Visibility Clothing. EDISON HI-VIS JACKET made in NFR, 260gsm",
	
    url: "/fr-clothing/performance-wear-clothing/edison-hi-vis-jacket",
	
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
														<h1 className="txtbnnr">Edison Hi-Vis Jacket</h1>
														<h3>NFR 250gsm</h3>
														<ul className="">
															<li>Always be in limelight</li>
															<li>Be seen</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/wear-edison-jacket-banner.webp" className="img-responsive visible-lg visible-md" alt="Edison Fire Retardant Hi-Vis Jacket"/>
									<img src="/images/wear-edison-jacket-banner-ipad.webp" className="img-responsive visible-sm" alt="Edison Fire Retardant Hi-Vis Jacket"/>
									<img src="/images/wear-edison-jacket-banner-mb.webp" className="img-responsive visible-xs" alt="Edison Fire Retardant Hi-Vis Jacket"/>
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
								<li className="breadcrumb-item"><a href="/fr-clothing/performance-wear-clothing">Performance Wear</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-jacket">FR Jacket</a></li>
								<li className="breadcrumb-item active" aria-current="page">Edison Hi-Vis Jacket</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<img src="/images/product/wear/edison-jacket/edison-fr-jacket-image-one.webp" className="img-responsive" alt="Edison Fire Retardant Hi-Vis Jacket"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Turn down collar + high neck collar with velcro</li>
									<li>CF closing with plastic concealed snap button and velcro closures</li>
									<li>1 chest pocket with flap and concealed snap closure</li>
									<li>1 nepoleon pocket closing with zipper</li>
									<li>Adjustable sleeve cuffs with concealed snap closures</li>
									<li>Adjustable waist with concealed snap closures</li>
									<li>50mm reflective tape</li>
									<li>Bar-tacked at all stress points</li>
								</ul>
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
						
						<div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/wear/edison-jacket/edison-fr-jacket-image-two.webp" className="img-responsive" alt="Edison Fire Retardant Hi-Vis Jacket"/>
								</div>
								<hr/>
								<h3>Napoleon pocket on left side of the chest</h3>
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