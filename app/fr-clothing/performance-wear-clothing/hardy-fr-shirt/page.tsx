import Head from "next/head";

export const metadata = {
  title: "Hardy FR Shirts | Heavy duty work shirt", 
  
  description: "HARDY FR SHIRT is fire resistant Shirt made in 100% Cotton, 150gsm, designed for Heavy duty work in lightweight fabric",

  keywords: [ "Hardy FR Shirts", "FR Shirts", "Flame resistant Shirts", "Fire resistant Shirts", "Flame retardant Shirts", "Fire retardant Shirts", "FR Clothing", "Fire resistant Clothing", "FR Resistant Clothing", "Flame resistant Clothing", "Fire Retardant Clothing", "FR Coveralls", "Pants FR", "FR Jackets", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Hardy FR Shirts | Heavy duty work shirt",
	
    description: "HARDY FR SHIRT is fire resistant Shirt made in 100% Cotton, 150gsm, designed for Heavy duty work in lightweight fabric",
	
    url: "/fr-clothing/performance-wear-clothing/hardy-fr-shirt",
	
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
														<h1 className="txtbnnr">Hardy Shirt</h1>
														<h3>100% Cotton, NFR 150gsm</h3>
														<ul className="">
															<li>Heavy duty work shirt in lightweight fabric</li>
															
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/wear-hardy-shirt-banner.webp" className="img-responsive visible-lg visible-md" alt="Hardy Flame Resistant Shirt"/>
									<img src="/images/wear-hardy-shirt-banner-ipad.webp" className="img-responsive visible-sm" alt="Hardy Flame Resistant Shirt"/>
									<img src="/images/wear-hardy-shirt-banner-mb.webp" className="img-responsive visible-xs" alt="Hardy Flame Resistant Shirt"/>
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
								<li className="breadcrumb-item"><a href="/flame-resistant-shirts">FR Shirt</a></li>
								<li className="breadcrumb-item active" aria-current="page">Hardy Shirt</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<img src="/images/product/wear/hardy-shirt/hardy-fr-shirt-image-one.webp" className="img-responsive" alt="Hardy Flame Resistant Shirt"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Semi spread collar</li>
									<li>CF closing with sewn plastic buttons</li>
									<li>Barrel cuffs with sewn plastic buttons for adjustment</li>
									<li>2 chest pockets with flaps and sewn buttons closures</li>
									<li>Curved hem</li>
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