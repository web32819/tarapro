import Head from "next/head";

export const metadata = {
  title: "Edison Hi-Vis T-Shirt | Tarapro", 
  
  description: "Edison Hi-Vis T-Shirt is made in double face, 210gsm, provides enhanced visibility and style",

  keywords: [ "FR T-Shirts", "Edison Hi-Vis T-Shirt", "Flame resistant T-Shirts", "Fire resistant T-Shirts", "Flame retardant T-Shirts", "Fire retardant T-Shirts", "FR T-Shirts Manufacturer", "Arc Flash Suit", "FR T-Shirts Supplier", "FRC", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Edison Hi-Vis T-Shirt | Tarapro",
	
    description: "Edison Hi-Vis T-Shirt is made in double face, 210gsm, provides enhanced visibility and style",
	
    url: "/fr-clothing/performance-wear-clothing/edison-hi-vis-t-shirt",
	
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
														<h1 className="txtbnnr">Edison Hi-Vis T-Shirt</h1>
														<h3>Double Face, NFR 210gsm</h3>
														<ul className="">
															<li>Work in style</li> 
															<li>Stay in limelight</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/wear-edison-tshirt-banner.webp" className="img-responsive visible-lg visible-md" alt="Edison Fire Retardant Hi-Vis T-Shirt"/>
									<img src="/images/wear-edison-tshirt-banner-ipad.webp" className="img-responsive visible-sm" alt="Edison Fire Retardant Hi-Vis T-Shirt"/>
									<img src="/images/wear-edison-tshirt-banner-mb.webp" className="img-responsive visible-xs" alt="Edison Fire Retardant Hi-Vis T-Shirt"/>
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
								<li className="breadcrumb-item"><a href="/flame-resistant-t-shirts">FR T-Shirt</a></li>
								<li className="breadcrumb-item active" aria-current="page">Edison Hi-Vis T-Shirt</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<img src="/images/product/wear/edison-t-shirt/edison-fr-t-shirt-image-one.webp" className="img-responsive" alt="Edison Fire Retardant Hi-Vis T-Shirt"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Hi-Vis long sleeve t-shirt with ribbed collar</li>
									<li>Ribbed cuffs</li>
									<li>Segmented heat transfer tape on sleeves, chest and torso</li>
									<li>Bar-tacked at all stress points</li>
								</ul>
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