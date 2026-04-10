import Head from "next/head";

export const metadata = {
  title: "FR workwear & Clothing for Oil & Gas | Tarapro FR", 
  
  description: "Tarapro is a leading manufacturer of oil & gas FR clothing, designed to keep you safe from hazardous chemicals, explosions as well as fire",

  keywords: [ "oil & gas protection clothing", "oil & gas protection clothing Manufacturer", "oil & gas protection clothing Supplier", "oil industry garments", "oil & gas", "PPE for oil and gas industry", "oil and gas ppe suppliers", "oil and gas protective clothing", "oil and gas workwear", "FR Resistant Clothing", "Flame Resistant Clothing"],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "FR workwear & Clothing for Oil & Gas | Tarapro FR",
	
    description: "Tarapro is a leading manufacturer of oil & gas FR clothing, designed to keep you safe from hazardous chemicals, explosions as well as fire",
	
    url: "/fr-clothing/oil-gas-fr-clothing",
	
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
											<div className="col-md-6 col-sm-7 no-pad">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1>Oil & Gas</h1>
														<p className=""><strong>Workers in the Oil & Gas industry are exposed to hazardous chemicals, explosions as well as fire. To comply with the various safety regulations and help keep employees safe, it is important to identify the types of hazards workers might encounter on the job and ensure that your FR clothing is designed to address those hazards.</strong></p>
														
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/oil-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/oil-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/oil-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active">Oil & Gas FR Clothing</li>
							</ol>
						</nav>

						<div className="col-md-4 col-sm-6 col-xs-6 col-md-offset-2">
							<div className="col-md-12 no-pad">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/oil-gas/jacket/rigger-fr-jacket.webp" className="img-responsive" alt="Rigger Fire Resistant Jacket"/>
										<a href="/fr-clothing/oil-gas-fr-clothing/rigger-fr-jacket" className="">
										<div className="overlay">
											<div className="text">
												<p>Rigger FR Jacket</p>
												<div className="arrw">
													<i className="fas fa-arrow-right"></i>
												</div>
											</div>
										</div>
										</a>
									</div>
								</div>
							</div>
							
							<div className="col-md-12 no-pad">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/oil-gas/trouser/rigger-fr-trousers.jpg" className="img-responsive" alt="Rigger Flame Resistant Trousers"/>
										<a href="/fr-clothing/oil-gas-fr-clothing/rigger-fr-trousers" className="">
										<div className="overlay">
											<div className="text">
												<p>Rigger FR Trousers</p>
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
						
						<div className="col-md-4 col-sm-6 col-xs-6">
							<div className="col-md-12 no-pad">
								<div className="boxcntnr scndbx">
									<div className="boxcntnrimgbx">
										<img src="/images/product/oil-gas/coverall/rigger-fr-coverall.png" className="img-responsive" alt="Rigger Fire Resistant Coverall"/>
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
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		
	</>
);
}