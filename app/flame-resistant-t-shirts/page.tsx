import Head from "next/head";

export const metadata = {
  title: "Flame Resistant (FR) T-Shirts", 
  
  description: "Tarapro's FR T-shirts provides the perfect combination of comfort, style and protection. Popular FR T-shirts are Edison-hi-vis-t-shirt, fresco-polo Shirt",

  keywords: [ "FR T-Shirts", "Flame resistant T-Shirts", "Fire resistant T-Shirts", "Flame retardant T-Shirts", "Fire retardant T-Shirts", "Flame resistant Boiler T-Shirts", "Fire resistant Boiler T-Shirts", "Flame retardant Boiler T-Shirts", "Fire retardant Boiler T-Shirts", "FR Boiler T-Shirts", "FR T-Shirts Manufacturer", "FR T-Shirts Supplier", "Fire resistant Clothing", "FR Clothing", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Flame Resistant (FR) T-shirts",
	
    description: "Tarapro's FR T-shirts provides the perfect combination of comfort, style and protection. Popular FR T-shirts are Edison-hi-vis-t-shirt, fresco-polo Shirt",
	
    url: "/flame-resistant-t-shirts",
	
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
											<div className="col-md-7 col-sm-6 no-pad">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1>FR T-Shirts</h1>
														<p className=""><strong>High-performance FR garments that provides the perfect combination of comfort and protection.</strong></p>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/wear-edison-tshirt-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/wear-edison-tshirt-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/wear-edison-tshirt-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
					<div className="col-md-12">
					
						<nav aria-label="breadcrumb" className="visible-lg visible-md visible-sm">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="/">Home</a></li>
								<li className="breadcrumb-item"><a href="/fr-clothing">FR Clothing</a></li>
								<li className="breadcrumb-item active">FR T-Shirts</li>
							</ol>
						</nav>
						
						<div className="col-md-4 col-sm-6 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/wear/edison-t-shirt/edison-fr-t-shirt-image.webp" className="img-responsive" alt="Edison Hi-Vis T-Shirt"/>
										<a href="/fr-clothing/performance-wear-clothing/edison-hi-vis-t-shirt" className="">
										<div className="overlay">
											<div className="text">
												<p>Edison Hi-Vis T-Shirt</p>
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
						
						<div className="col-md-4 col-sm-6 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/knits/fresco/fresco-polo-image.jpg" className="img-responsive" alt="Fresco Polo FR"/>
										<a href="/fr-clothing/fr-knits-clothing/fr-fresco-polo" className="">
										<div className="overlay">
											<div className="text">
												<p>Fresco Polo</p>
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
						
						<div className="col-md-4 col-sm-6 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/knits/fresco-hv/fresco-polo-hv-image.webp" className="img-responsive" alt="Fresco Polo HV Flame Resistant"/>
										<a href="/fr-clothing/fr-knits-clothing/fr-fresco-polo-hv" className="">
										<div className="overlay">
											<div className="text">
												<p>Fresco Polo HV</p>
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