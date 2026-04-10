import Head from "next/head";

export const metadata = {
  title: "FR Clothing Classic | Tarapro", 
  
  description: "Tarapro offers Classic FR clothing range, designed to achieve multiple industry standards and are available in a variety of weights and styles",

  keywords: [ "FR Clothing", "Fire resistant Clothing", "FR Resistant Clothing", "Flame resistant Clothing", "Fire Retardant Clothing", "FR Coveralls", "Fire Retardant Coveralls", "FR Jackets", "Fireproof jackets", "Pants FR", "Suit", "FRC", "FR Workwear", "Fire Resistant workwear", "Flame retardant workwear", "FR Garments", "Fire resistant workwear", "Flame retardant workwear", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "FR Clothing Classic | Tarapro",
    description: "Tarapro offers Classic FR clothing range, designed to achieve multiple industry standards and are available in a variety of weights and styles",
    url: "/fr-clothing/classic-fr-clothing",
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
											<div className="col-md-5 col-sm-5 no-pad">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1>CLASSIC</h1>
														<p className=""><strong>The Classic Range is designed to solve real-world problems. From the choice of fabric to the final stitch, each garment is created by a team of professionals with a hands-on approach.</strong></p>
														<p className="">Classic products are available in a variety of weights and are designed to achieve multiple industry standards.</p>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/classic-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/classic-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/classic-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active">Classic FR Clothing</li>
							</ol>
						</nav>

						<div className="col-md-4 col-md-offset-2 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/classic/contra-fr-jacket.webp" className="img-responsive" alt="Contra Flame Resistant Jacket"/>
										<a href="/fr-clothing/classic-fr-clothing/contra-fr-jacket" className="">
											<div className="overlay">
												<div className="text">
													<p>Contra FR Jacket</p>
													<div className="arrw">
														<i className="fas fa-arrow-right"></i>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div className="col-md-12">
								<div className="boxcntnr">
									<div className="boxcntnrimgbx fstbx">
										<img src="/images/product/classic/contra-fr-trouser.webp" className="img-responsive" alt="Contra FR Trousers"/>
										<a href="/fr-clothing/classic-fr-clothing/contra-fr-trousers" className="">
										<div className="overlay">
											<div className="text">
												<p>Contra FR Trousers</p>
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
						
						<div className="col-md-4 col-xs-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr scndbx">
									<div className="boxcntnrimgbx">
										<img src="/images/product/classic/contra-coverall-image-new.png" className="img-responsive" alt="Contra Fire Retardant Coverall"/>
										
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

						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
	
	</>
);
}