import Head from "next/head";

export const metadata = {
  title: "Fortis FR Jacket | Tarapro", 
  
  description: "Fortis Jacket is certified fire Proof jacket made in 100% Cotton, Denim, 450gsm, with excellent FR properties and a perfect balance between protection and style",

  keywords: [ "Flame Resistant Fortis FR Jacket", "Flame Resistant Jacket", "Flame Retardant Jacket", "Fire Resistant Jacket", "Fire Retardant Jacket", "FR Jacket", "Flame Resistant Jackets", "Flame Retardant Jackets", "Fire Resistant Jackets", "Fire Retardant Jackets", "FR Jackets", "Fireproof jackets", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Fortis FR Jacket | Tarapro",
	
    description: "Fortis Jacket is certified fire Proof jacket made in 100% Cotton, Denim, 450gsm, with excellent FR properties and a perfect balance between protection and style",
	
    url: "/fr-clothing/welder-fr-clothing/fortis-fr-jacket",
	
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
											<div className="col-md-6 col-sm-7">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1 className="txtbnnr">Fortis FR Jacket</h1>
														<h3>100% Cotton, Denim, 450gsm</h3>
														<ul className="">
															<li>Vintage workwear with excellent FR properties</li>
															<li>Perfect balance between protection and style</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/fortis-jacket-banner.webp" className="img-responsive visible-lg visible-md" alt="Fortis Fire Resistant Jacket"/>
									<img src="/images/fortis-jacket-banner-ipad.webp" className="img-responsive visible-sm" alt="Fortis Fire Resistant Jacket"/>
									<img src="/images/fortis-jacket-banner-mb.webp" className="img-responsive visible-xs" alt="Fortis Fire Resistant Jacket"/>
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
								<li className="breadcrumb-item"><a href="/fr-clothing/welder-fr-clothing">Welder FR Clothing</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-jacket">FR Jacket</a></li>
								<li className="breadcrumb-item active" aria-current="page">Fortis FR Jacket</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<img src="/images/product/classic/jacket/fortis-jacket.webp" className="img-responsive" alt="Fortis Fire Resistant Jacket"/>
							</div>
						</div>
						
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Turn down collar + high neck collar with velcro</li>
									<li>2 chest pockets with flaps concealed plastic snap closures</li>
									<li>Adjustable sleeve cuffs with plastic concealed snap closures</li>
									<li>Traditional denim stitch</li>
									<li>Bar-tacked at all stress points</li>
									<li className="lsttxt">Also available with reflective tape as per requirement</li>
								</ul>

								<img src="/images/norms/en-iso-11612-a1-a2-b1-c1-e3-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-iso-11611-2015-className-1-a1-a2.svg" className="img-responsive" alt=""/>

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
						
						<div className="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/classic/jacket/fortis-jacket-image-one.webp" className="img-responsive" alt="Fortis Fire Resistant Jacket"/>
								</div>
								<hr/>
								<h3>Highlighted threads stitch</h3>
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