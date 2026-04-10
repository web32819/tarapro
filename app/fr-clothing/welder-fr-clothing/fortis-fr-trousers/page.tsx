import Head from "next/head";

export const metadata = {
  title: "Fortis FR Trousers | Tarapro", 
  
  description: "Tarapro offers superior quality Fortis FR trousers designed with excellent FR properties, a perfect balance between protection and style",

  keywords: [ "FORTIS FR trousers", "FORTIS FR Pants", "Pants FR", "FR Trouser and Bib Pants", "Flame resistant Trouser and Bib Pants", "Fire resistant Trouser and Bib Pants", "Flame retardant Trouser and Bib Pants", "Fire retardant Trouser and Bib Pants", "FR Trouser and Bib Pants Manufacturer", "FR Trouser and Bib Pants Supplier", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Fortis FR Trousers | Tarapro",
	
    description: "Tarapro offers superior quality Fortis FR trousers designed with excellent FR properties, a perfect balance between protection and style",
	
    url: "/fr-clothing/welder-fr-clothing/fortis-fr-trousers",
	
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
														<h1 className="txtbnnr">Fortis FR Trouser</h1>
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
									<img src="/images/fortis-trouser-banner.webp" className="img-responsive visible-lg visible-md" alt="Fortis Flame Resistant Trousers"/>
									<img src="/images/fortis-trouser-banner-ipad.webp" className="img-responsive visible-sm" alt="Fortis Flame Resistant Trousers"/>
									<img src="/images/fortis-trouser-banner-mb.webp" className="img-responsive visible-xs" alt="Fortis Flame Resistant Trousers"/>
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
								<li className="breadcrumb-item"><a href="/flame-resistant-trouser-pant">FR Trousers and Bib Pants</a></li>
								<li className="breadcrumb-item active" aria-current="page">Fortis FR Trouser</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<img src="/images/product/classic/trouser/fortis-trouser.webp" className="img-responsive trsrimg" alt="Fortis Flame Resistant Trousers"/>
							</div>
						</div>
						
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>2 cross pockets</li>
									<li>Fly closing with YKK metal zipper</li>
									<li>Sewn plastic button</li>
									<li>Bar-tacked at all stress points</li>
									<li className="lsttxt">Also available with reflective tape as per requirement</li>
								</ul>
								
								<img src="/images/norms/en-iso-11612-a1-a2-b1-c1-e3-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-iso-11611-2015-class-1-a1-a2.svg" className="img-responsive" alt=""/>

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
						
						<div className="col-md-8 col-sm-10 col-md-offset-2 col-sm-offset-1">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/classic/trouser/fortis-trouser-image-one.webp" className="img-responsive" alt="Fortis Flame Resistant Trousers"/>
								</div>
								<hr/>
								<h3>2 rear pockets with flaps and concealed plastic snap closures</h3>
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