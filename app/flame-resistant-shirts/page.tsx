import Head from "next/head";

export const metadata = {
  title: "FR Shirts | Multipurpose Flame Resistant Shirts", 
  
  description: "TaraPro manufacturers and supplies affordable & multipurpose flame resistant(FR) shirts that works as a dual garment for both office and hazard-prone sites",

  keywords: [ "FR Shirts", "Flame resistant Shirts", "Fire resistant Shirts", "Flame retardant Shirts", "Fire retardant Shirts", "FR Clothing", "Fire resistant Clothing", "FR Resistant Clothing", "Flame resistant Clothing", "Fire Retardant Clothing", "FR Shirts Manufacturer", "FR Shirts Supplier", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "FR Shirts | Multipurpose Flame Resistant Shirts",
	
    description: "TaraPro manufacturers and supplies affordable & multipurpose flame resistant(FR) shirts that works as a dual garment for both office and hazard-prone sites",
	
    url: "/flame-resistant-shirts",
	
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
											<div className="col-md-5 col-sm-6 no-pad">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1>FR Shirts</h1>
														<p className=""><strong>Everyday FR protection that works as a dual garment for both office and hazard-prone sites.</strong></p>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/wear-hardy-shirt-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/wear-hardy-shirt-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/wear-hardy-shirt-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="rngsctn prdctbxdtls">
			<div className="container">
				<div className="row">
					<div className="col-md-12 no-pad">
					
						<nav aria-label="breadcrumb" className="visible-lg visible-md visible-sm">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="/">Home</a></li>
								<li className="breadcrumb-item"><a href="/fr-clothing">FR Clothing</a></li>
								<li className="breadcrumb-item active">FR Shirts</li>
							</ol>
						</nav>
						
						<div className="col-md-4 col-sm-4 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/electrical/shirt/defender-fr-shirt.webp" className="img-responsive" alt="Defender Flame Resistant Shirt"/>
										<a href="/fr-clothing/electrical-arc-flash-clothing/defender-fr-shirt" className="">
										<div className="overlay">
											<div className="text">
												<p>Defender FR Shirt</p>
												<div className="arrw">
													<i className="fas fa-arrow-right"></i>
												</div>
											</div>
										</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-4 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/wear/hardy-shirt/hardy-fr-shirt.webp" className="img-responsive" alt="Hardy Fire Retardant Shirt"/>
										<a href="/fr-clothing/performance-wear-clothing/hardy-fr-shirt" className="">
										<div className="overlay">
											<div className="text">
												<p>Hardy FR Shirt</p>
												<div className="arrw">
													<i className="fas fa-arrow-right"></i>
												</div>
											</div>
										</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-4 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/electrical/shirt/gran-fr-shirt.webp" className="img-responsive mdimg" alt="Gran Flame Resistant Shirt"/>
										<a href="/fr-clothing/electrical-arc-flash-clothing/gran-fr-shirt" className="">
											<div className="overlay">
												<div className="text">
													<p>Gran FR Shirt</p>
													<div className="arrw">
														<i className="fas fa-arrow-right"></i>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
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