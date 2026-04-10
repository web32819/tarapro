import Head from "next/head";

export const metadata = {
  title: "Arc Flash Suit", 
  
  description: "Arc Flash Suit is a Complete Full Body Protection for Arc Flash Hazards manufactured by Tarapro, ultimate protection made using inherently FR lightweight material",

  keywords: [ "Arc Flash Kit", "Arc Flash Suit", "Arc Flash Jacket", "Arc Flash Trousers", "Arc Flash Bib Trousers", "Arc Flash Kits", "Arc Flash Suits", "Arc Flash Jackets", "Arc Flash Pants", "Arc Flash Protection Kit", "Electric Arc Flash Protection", "Arc Flash Suit manufacturer", "Arc Flash Suit supplier", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Arc Flash Suit",
	
    description: "Arc Flash Suit is a Complete Full Body Protection for Arc Flash Hazards manufactured by Tarapro, ultimate protection made using inherently FR lightweight material",
	
    url: "/arc-flash-kit",
	
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
											<div className="col-md-6 col-sm-6 no-pad">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1>Arc Flash Suit</h1>
														<p className=""><strong>Ultimate protection from electric arc flash made using inherently FR lightweight material.</strong></p>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/electric-vallum-kit-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/electric-vallum-kit-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/electric-vallum-kit-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active">Arc Flash Suit</li>
							</ol>
						</nav>
						
						<div className="col-md-4 col-sm-6 no-pad">
							<div className="col-md-12">
								<div className="boxcntnr scndbx">
									<div className="boxcntnrimgbx">
										<img src="/images/product/electrical/bibtrouser/vallum-jacket-bib-trousers.png" className="img-responsive" alt="Vallum Arc Flash Suit"/>
										<a href="/fr-clothing/electrical-arc-flash-clothing/vallum-arc-flash-suit" className="">
										<div className="overlay">
											<div className="text">
												<p>Vallum Arc Flash Suit</p>
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