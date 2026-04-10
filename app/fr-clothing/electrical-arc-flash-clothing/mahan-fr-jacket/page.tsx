import Head from "next/head";

export const metadata = {
  title: "Mahan FR Jacket | Tarapro", 
  
  description: "Mahan FR Jacket is certified Arc flash protective clothing made in 2 Layered Modacrylic Aramid Multi Fiber Blend, 430gsm, Rip Stop",

  keywords: [ "Mahan FR Jacket", "FR Jackets", "Flame resistant Jackets", "Fire resistant Jackets", "Flame retardant Jackets", "Fire retardant Jackets", "Fireproof jackets", "FRC", "FR Workwear", "Flame resistant Clothing", "FR clothing" ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Mahan FR Jacket | Tarapro",
	
    description: "Mahan FR Jacket is certified Arc flash protective clothing made in 2 Layered Modacrylic Aramid Multi Fiber Blend, 430gsm, Rip Stop",
	
    url: "/fr-clothing/electrical-arc-flash-clothing/mahan-fr-jacket",
	
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
														<h1 className="txtbnnr">Mahan FR Jacket</h1>
														<h3>2 Layered Modacrylic Aramid Multi Fiber Blend, 430gsm, Rip Stop</h3>
														<ul className="">
															<li>Arc flash protective clothing</li>
															<li>Sophisticated look, optimal safety</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/electric-mahan-jacket-banner.webp" className="img-responsive visible-lg visible-md" alt="Mahan Arc Rated Jacket"/>
									<img src="/images/electric-mahan-jacket-banner-ipad.webp" className="img-responsive visible-sm" alt="Mahan Arc Rated Jacket"/>
									<img src="/images/electric-mahan-jacket-banner-mb.webp" className="img-responsive visible-xs" alt="Mahan Arc Rated Jacket"/>
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
								<li className="breadcrumb-item"><a href="/fr-clothing/electrical-arc-flash-clothing">Electrical FR Clothing</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-jacket">FR Jacket</a></li>
								<li className="breadcrumb-item active" aria-current="page">Mahan FR Jacket</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox">
									<img src="/images/norms/atpv-26.svg" className="img-responsive " alt=""/>
								</div>
								<img src="/images/product/electrical/mahan/jacket/mahan-fr-jacket-image-one.webp" className="img-responsive" alt="Mahan Arc Rated Jacket"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>High neck collar with FR velcro closure</li>
									<li>CF opening with FR plastic zipper and plastic snap closures</li>
									<li>2 chest pockets with flaps and plastic snap closures</li>
									<li>Cuffs with plastic snap closures</li>
									<li>50mm FR reflective tape</li>
									<li>Side elasticized waist</li>
									<li>Bar-tacked at all stress points</li>
								</ul>

								<img src="/images/norms/en-61482-1-2-apc-2.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/nfpa-70-e-cat-3.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/astm-f1506.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/astm-f-2621.svg" className="img-responsive" alt=""/>

								<img src="/images/norms/en-13758-2-50+.svg" className="img-responsive" alt=""/>
								
								<div className="clearfix"></div>
							</div>
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="prdctbxdtls">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						
						<div className="col-md-4 col-sm-6 col-md-offset-2">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/electrical/mahan/jacket/mahan-fr-jacket-image-two.webp" className="img-responsive" alt=""/>
								</div>
								<hr/>
								<h3>Action back</h3>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/electrical/mahan/jacket/mahan-fr-jacket-image-three.webp" className="img-responsive" alt=""/>
								</div>
								<hr/>
								<h3>Collar & pocket design</h3>
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