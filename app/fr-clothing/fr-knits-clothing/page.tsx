import Head from "next/head";

export const metadata = {
  title: "FR Knits | Tarapro India", 
  
  description: "FR Knits are made from fabrics which combine the merits of a variety of new age fibres to provide a high degree of protection together with unmatched comfort",

  keywords: [ "FR Innerwear", "FR Innerwear Manufacturer", "FR Innerwear Supplier", "FR Knits", "FR Knits Manufacturer", "FR Sweaters Supplier", "Fire resistant Clothing", "FR Resistant Clothing", "Flame resistant Clothing" ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Mahan FR Trouser | Tarapro",
	
    description: "Mahan FR Trousers made in 2 Layered Modacrylic Aramid Multi Fiber Blend, 430gsm, Rip Stop for Arc flash protection. Features sophisticated look and optimal safety",
	
    url: "/fr-clothing/fr-knits-clothing",
	
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
														<h1>Fr Knits</h1>
														<p className=""><strong>These high-performance garments are made from fabrics which combine the merits of a variety of new age fibres to provide a high degree of protection together with unmatched comfort.</strong></p>
														<p className="">The garments are breathable, offer high stretch and resist wrinkles. They have excellent natural moisture management properties making them extremely comfortable to wear even under high heat conditions.</p>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/knits-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/knits-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/knits-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active">FR Knits</li>
							</ol>
						</nav>
						

						<div className="col-md-4 col-sm-6 col-xs-6">
							<div className="col-md-12 no-pad">
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
							
							<div className="col-md-12 no-pad">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/knits/arc-balaclava/arc-flash-balaclava.jpg" className="img-responsive" alt="Arc Flash Balaclava"/>
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
							<div className="clearfix"></div>
						</div>
						
						<div className="col-md-4 col-sm-6 col-xs-6">
							<div className="col-md-12 no-pad">
								<div className="boxcntnr scndbx">
									<div className="boxcntnrimgbx">
										<img src="/images/product/knits/insider/insider-image.png" className="img-responsive" alt="Insider Fire Retardant T-Shirt & Long John"/>
										<a href="/fr-clothing/fr-knits-clothing/fr-insider-t-shirt-long-john" className="">
										<div className="overlay">
											<div className="text">
												<p>Insider T-Shirt & Long John</p>
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
						
						<div className="clearfix visible-xs"></div>
						
						<div className="col-md-4 col-sm-6">
							<div className="col-md-12 no-pad">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/knits/fresco/fresco-polo-image.jpg" className="img-responsive" alt="Fresco Fire Resistant Polo"/>
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
						
							<div className="col-md-12 no-pad">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/knits/fresco-hv/fresco-polo-hv-image.jpg" className="img-responsive" alt="Fresco Flame Resistant Polo HV"/>
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