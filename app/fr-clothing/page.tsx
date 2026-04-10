import Head from "next/head";

export const metadata = {
  title: "FR Clothing | Superior Quality Flame Resistant Clothing | Tarapro", 
  
  description: "Tarapro manufactures and supplies the best and quality Fire / Flame Resistant Clothing with guaranteed safety and protection. Popular products - FR Coveralls, FR Jackets, FR Shirts,FR Pants, Arc Flash Suit",

  keywords: [ "FR Clothing", "Fire resistant Clothing", "FR Resistant Clothing", "Flame resistant Clothing", "Fire Retardant Clothing", "FR Coveralls", "Fire Retardant Coveralls", "FR Jackets", "Fireproof Jackets", "Pants FR", "Arc Flash Suit", "FRC", "FR Workwear", "Fire Resistant workwear", "Flame retardant workwear", "FR Garments", "Fire resistant workwear", "Flame retardant workwear", "FR Shirts", "FR T-Shirts", "FR Hoods", "FR Balaclava", "FR Trousers and Bib Pants",],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "FR Clothing | Superior Quality Flame Resistant Clothing | Tarapro",
    description: "Tarapro manufactures and supplies the best and quality Fire / Flame Resistant Clothing with guaranteed safety and protection. Popular products - FR Coveralls, FR Jackets, FR Shirts,FR Pants, Arc Flash Suit",
    url: "/fr-clothing",
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
											<div className="col-md-8 col-sm-6">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1>Our FR Range</h1>
														<p className=""><strong>With three decades on its back, Tarapro stands tall as the largest manufacturer and supplier of Flame Resistant protective clothing in India. We invest in ensuring comfort and creating an inclusive corporate identity for industrial workers.</strong></p>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/range-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/range-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/range-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="innrsctn prdctbxdtls">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
					
						<nav aria-label="breadcrumb" className="visible-lg visible-md visible-sm">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="/">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">FR Clothing</li>
							</ol>
						</nav>
						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="menubox">
							   <a href="/fr-clothing/classic-fr-clothing">
								  <img src="/images/classic-nav-image.webp" className="img-responsive" alt=""/>
								  <h2>Classic</h2>
							   </a>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="menubox">
							   <a href="/fr-clothing/welder-fr-clothing">
								  <img src="/images/welder-nav-image.webp" className="img-responsive" alt="" />
								  <h2>Welder</h2>
							   </a>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="menubox">
							   <a href="/fr-clothing/molten-metal-clothing">
								  <img src="/images/molten-nav-image.webp" className="img-responsive" alt=""/>
								  <h2>Molten Metal</h2>
							   </a>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="menubox">
							   <a href="/fr-clothing/oil-gas-fr-clothing">
								  <img src="/images/oil-gas-nav-image.webp" className="img-responsive" alt=""/>
								  <h2>Oil & Gas</h2>
							   </a>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="menubox">
							   <a href="/fr-clothing/electrical-arc-flash-clothing">
								  <img src="/images/electric-nav-image.webp" className="img-responsive" alt=""/>
								  <h2>Electrical</h2>
							   </a>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="menubox">
							   <a href="/fr-clothing/fr-knits-clothing">
								  <img src="/images/knits-nav-image.webp" className="img-responsive" alt=""/>
								  <h2>FR Knits</h2>
							   </a>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="menubox">
							   <a href="/fr-clothing/performance-wear-clothing">
								  <img src="/images/performance-nav-image.webp" className="img-responsive" alt=""/>
								  <h2>Performance Wear</h2>
							   </a>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="menubox">
							   <a href="/fr-clothing/heat-resistant-gloves">
								  <img src="/images/product/gloves/heat-nav-gloves.png" className="img-responsive" alt=""/>
								  <h2>Heat Resistant Gloves</h2>
							   </a>
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