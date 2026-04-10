import Head from "next/head";

export const metadata = {
  title: "Flame Resistant (FR) Hoods / Balaclava", 
  
  description: "Tarapro’s high quality Flame Resistant Hoods and FR Balaclava are breathable and durable equipment for your face and head, fights the cold, heat, rain & dust",

  keywords: [ "FR Hoods", "FR Balaclava", "Flame resistant Hoods", "Flame resistant Balaclava", "Fire resistant Hoods", "Flame retardant Balaclava", "Flame resistant Boiler Hoods", "Fire resistant Boiler Balaclava", "Flame retardant Boiler Hoods", "Flame retardant Boiler Balaclava", "FR Hoods Manufacturer", "FR Balaclava Manufacturer", "FR Hoods Supplier", "FR Balaclava Supplier", "Fire resistant Clothing", "FR Resistant Clothing", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Flame Resistant (FR) Hoods / Balaclava",
	
    description: "Tarapro’s high quality Flame Resistant Hoods and FR Balaclava are breathable and durable equipment for your face and head, fights the cold, heat, rain & dust",
	
    url: "/flame-resistant-hoods-balaclava",
	
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
														<h1>FR Hoods / Balaclava</h1>
														<p className=""><strong>Exclusively designed protection for your head and face.</strong></p>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/knits-balaclava-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/knits-balaclava-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/knits-balaclava-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active">Hoods - Balaclava</li>
							</ol>
						</nav>
						
						<div className="col-md-4 col-sm-6 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/knits/balaclava/fr-balaclava.webp" className="img-responsive" alt="Flame Resistant Balaclava"/>
										<a href="/fr-clothing/fr-knits-clothing/fr-balaclava" className="">
										<div className="overlay">
											<div className="text">
												<p>FR Balaclava</p>
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
										<img src="/images/product/knits/arc-balaclava/arc-flash-balaclava.webp" className="img-responsive" alt="Arc Flash Balaclava"/>
										<a href="/fr-clothing/fr-knits-clothing/fr-arc-flash-balaclava" className="">
										<div className="overlay">
											<div className="text">
												<p>Arc Flash Balaclava</p>
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