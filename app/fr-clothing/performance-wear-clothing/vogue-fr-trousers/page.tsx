import Head from "next/head";

export const metadata = {
  title: "Vogue FR Trouser | Tarapro", 
  
  description: "Tarapro offers Vogue FR pants, smart workwear with functional features.Exclusively designed for Our industrial workwear offer durability & convenience",

  keywords: [ "Vogue FR trousers", "Vogue FR Pants", "Pants FR", "FR Trouser and Bib Pants", "Flame resistant Trouser and Bib Pants", "Fire resistant Trouser and Bib Pants", "Flame retardant Trouser and Bib Pants", "Fire retardant Trouser and Bib Pants", "FR Trouser and Bib Pants Manufacturer", "FR Trouser and Bib Pants Supplier", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Vogue FR Trouser | Tarapro",
	
    description: "Tarapro offers Vogue FR pants, smart workwear with functional features.Exclusively designed for Our industrial workwear offer durability & convenience",
	
    url: "/fr-clothing/performance-wear-clothing/vogue-fr-trousers",
	
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
														<h1 className="txtbnnr">Vogue Trouser</h1>
														<h3>100% Cotton, NFR 280gsm</h3>
														<ul className="">
															<li>Genuinely smart workwear with functional features</li>
															<li>Exclusively designed for Our industrial workwear offer durability & convenience</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/wear-vogue-trouser-banner.webp" className="img-responsive visible-lg visible-md" alt="Vogue Flame Retardant Trousers"/>
									<img src="/images/wear-vogue-trouser-banner-ipad.webp" className="img-responsive visible-sm" alt="Vogue Flame Retardant Trousers"/>
									<img src="/images/wear-vogue-trouser-banner-mb.webp" className="img-responsive visible-xs" alt="Vogue Flame Retardant Trousers"/>
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
								<li className="breadcrumb-item"><a href="/flame-resistant-trouser-pant">FR Trousers and Bib Pants</a></li>
								<li className="breadcrumb-item active" aria-current="page">Vogue Trouser</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<img src="/images/product/wear/vogue-trouser/vogue-fr-trouser-image-one.webp" className="img-responsive" alt="Vogue Flame Retardant Trousers"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>2 cross pockets</li>
									<li>2 rear pockets with flaps and concealed plastic snap closures</li>
									<li>2 thigh pockets with flaps and concealed plastic snap closure</li>
									<li>Additional storage pocket with zipper closures</li>
									<li>Fly closing with YKK metal zipper</li>
									<li>Sewn plastic button</li>
									<li>50mm reflective tape</li>
									<li>Adjustable waist with elastic for better fitting purpose</li>
									<li>Bar-tacked at all stress points</li>
								</ul>
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
						
						<div className="col-md-5 col-sm-6 col-md-offset-1">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/wear/vogue-trouser/vogue-fr-trouser-image-two.webp" className="img-responsive" alt="Vogue Flame Retardant Trousers"/>
								</div>
								<hr/>
								<h3>2 large sized cargo pockets with flaps, plastic concealed snap closures</h3>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/wear/vogue-trouser/vogue-fr-trouser-image-three.webp" className="img-responsive" alt="Vogue Flame Retardant Trousers"/>
								</div>
								<hr/>
								<h3>Elasticated waist for comfortable fit</h3>
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