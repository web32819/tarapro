import Head from "next/head";

export const metadata = {
  title: "Flame Resistant (FR) Coveralls", 
  
  description: "TaraPro offers the best quality FR Coveralls with guaranteed safety and protection, in compliance with the international safety standards",

  keywords: [ "Flame resistant Coveralls", "Fire resistant Coveralls", "Flame retardant Coveralls", "Fire retardant Coveralls", "Flame resistant Coveralls", "Fire resistant Coveralls", "Flame retardant Coveralls", "Fire retardant Coveralls", "Flame resistant Boiler suits", "Fire resistant Boiler suits", "Flame retardant Boiler suits", "Fire retardant Boiler suits", "FR Boiler suits", "FR Coveralls Manufacturer", "FR Coveralls Supplier", "FR Coveralls", "FR Coverall", "Fire resistant Clothing", "FRC", "FR Workwear", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Flame Resistant (FR) Coveralls",
	
    description: "TaraPro offers the best quality FR Coveralls with guaranteed safety and protection, in compliance with the international safety standards",
	
    url: "/flame-resistant-coverall",
	
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
														<h1>FR Coveralls</h1>
														<p className=""><strong>Optimum flame retardant protection for your body in any hazardous industry.</strong></p>		
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/contra-coverall.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/contra-coverall-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/contra-coverall-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active">FR Coveralls</li>
							</ol>
						</nav>
						
						
						<div className="col-md-4 col-sm-6 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr scndbx">
									<div className="boxcntnrimgbx">
										<img src="/images/product/classic/contra-coverall-image-new.png" className="img-responsive" alt="Contra Flame Resistant Coverall"/>
										<a href="/fr-clothing/classic-fr-clothing/contra-fr-coverall" className="">
										<div className="overlay">
											<div className="text">
												<p>Contra FR Coverall</p>
												<div className="arrw">
													<i className="fas fa-arrow-right"></i>
												</div>
											</div>
										</div>
										</a>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<div className="col-md-4 col-sm-6 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr scndbx">
									<div className="boxcntnrimgbx">
										<img src="/images/product/welder/coverall/incredible-fr-coverall.png" className="img-responsive" alt="Incredible Fire Retardant Coverall"/>
										<a href="/fr-clothing/welder-fr-clothing/incredible-fr-coverall" className="">
										<div className="overlay">
											<div className="text">
												<p>Incredible FR Coverall</p>
												<div className="arrw">
													<i className="fas fa-arrow-right"></i>
												</div>
											</div>
										</div>
										</a>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<div className="col-md-4 col-sm-6 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr scndbx">
									<div className="boxcntnrimgbx">
										<img src="/images/product/oil-gas/coverall/rigger-fr-coverall.png" className="img-responsive" alt="Rigger Flame Resistant Coverall"/>
										<a href="/fr-clothing/oil-gas-fr-clothing/rigger-fr-coverall" className="">
										<div className="overlay">
											<div className="text">
												<p>Rigger FR Coverall</p>
												<div className="arrw">
													<i className="fas fa-arrow-right"></i>
												</div>
											</div>
										</div>
										</a>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>

						<div className="col-md-4 col-sm-6 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr scndbx">
									<div className="boxcntnrimgbx">
										<img src="/images/product/electrical/coverall/konfor-fr-coverall.png" className="img-responsive" alt="Konfor Flame Retardant Coverall"/>
										<a href="/fr-clothing/electrical-arc-flash-clothing/konfor-fr-coverall" className="">
										<div className="overlay">
											<div className="text">
												<p>Konfor FR Coverall</p>
												<div className="arrw">
													<i className="fas fa-arrow-right"></i>
												</div>
											</div>
										</div>
										</a>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
	</>
);
}