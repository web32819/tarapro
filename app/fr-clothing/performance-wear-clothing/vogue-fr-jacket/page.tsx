import Head from "next/head";

export const metadata = {
  title: "Vogue FR Jacket | Tarapro", 
  
  description: "Vogue fr Jacket is exclusively designed for our industrial workwear offer durability & convenience, made in 100% Cotton, 280gsm",

  keywords: [ "Flame Resistant Vogue FR Jacket", "Flame Resistant Jacket", "Flame Retardant Jacket", "Fire Resistant Jacket", "Fire Retardant Jacket", "FR Jacket", "Flame Resistant Jackets", "Flame Retardant Jackets", "Fire Resistant Jackets", "Fire Retardant Jackets", "FR Jackets", "Fireproof jackets", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Vogue FR Jacket | Tarapro",
	
    description: "Vogue fr Jacket is exclusively designed for our industrial workwear offer durability & convenience, made in 100% Cotton, 280gsm",
	
    url: "/fr-clothing/performance-wear-clothing/vogue-fr-jacket",
	
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
														<h1 className="txtbnnr">Vogue Jacket</h1>
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
									<img src="/images/wear-vogue-jacket-banner.webp" className="img-responsive visible-lg visible-md" alt="Vogue FR Jacket"/>
									<img src="/images/wear-vogue-jacket-banner-ipad.webp" className="img-responsive visible-sm" alt="Vogue FR Jacket"/>
									<img src="/images/wear-vogue-jacket-banner-mb.webp" className="img-responsive visible-xs" alt="Vogue FR Jacket"/>
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
								<li className="breadcrumb-item"><a href="/flame-resistant-jacket">FR Jacket</a></li>
								<li className="breadcrumb-item active" aria-current="page">Vogue Jacket</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<img src="/images/product/wear/vogue-jacket/vogue-fr-jacket-image-one.webp" className="img-responsive" alt="Vogue FR Jacket"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Turn down collar + high neck collar with velcro</li>
									<li>CF closing with plastic concealed snap button and velcro closures</li>
									<li>2 chest pockets with concealed snap closures, flap puller with segmented heat transfer</li>
									<li>Adjustable sleeve cuffs with concealed snap closures, cuffs with segmented heat transfer tape</li>
									<li>Adjustable waist with velcro closures, loop with segmented heat transfer tape</li>
									<li>2-way stretch fabric allowing total freedom of movement</li>
									<li>2 bone pockets with zipper closures</li>
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
						
						<div className="col-md-4 col-sm-6 col-md-offset-2">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/wear/vogue-jacket/vogue-fr-jacket-image-two.webp" className="img-responsive" alt="Vogue FR Jacket"/>
								</div>
								<hr/>
								<h3>Segmented heat transfer tape on back vent</h3>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="boxsctn">
								<div className="boxsctnimg">
									<img src="/images/product/wear/vogue-jacket/vogue-fr-jacket-image-three.webp" className="img-responsive" alt="Vogue FR Jacket"/>
								</div>
								<hr/>
								<h3>Stretch fabric on side seam</h3>
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