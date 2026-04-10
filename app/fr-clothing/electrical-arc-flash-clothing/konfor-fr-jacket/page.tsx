import Head from "next/head";

export const metadata = {
  title: "Konfor FR Jacket | Tarapro", 
  
  description: "Konfor FR Jacket made in FR Viscose, Aramid, Antistatic, 190gsm, Twill.Stay protected from arc flash hazards in style.Special design features for all day comfort",

  keywords: [ "Flame Resistant Konfor FR Jacket", "Flame Resistant Jacket", "Flame Retardant Jacket", "Fire Resistant Jacket", "Fire Retardant Jacket", "FR Jacket", "Flame Resistant Jackets", "Flame Retardant Jackets", "Fire Resistant Jackets", "Fire Retardant Jackets", "FR Jackets", "Fireproof Jackets", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Konfor FR Jacket | Tarapro",
	
    description: "Konfor FR Jacket made in FR Viscose, Aramid, Antistatic, 190gsm, Twill.Stay protected from arc flash hazards in style.Special design features for all day comfort",
	
    url: "/fr-clothing/electrical-arc-flash-clothing/konfor-fr-jacket",
	
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
														<h1 className="txtbnnr">Konfor FR Jacket</h1>
														<h3>FR Viscose, Aramid, Antistatic, 190gsm, Twill</h3>
														<ul className="">
															<li>Special design features for all day comfort</li>
															<li>Stay protected from arc flash hazards in style</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/electric-konfor-jacket-banner.webp" className="img-responsive visible-lg visible-md" alt="Konfor Arc Flash Jacket"/>
									<img src="/images/electric-konfor-jacket-banner-ipad.webp" className="img-responsive visible-sm" alt="Konfor Arc Flash Jacket"/>
									<img src="/images/electric-konfor-jacket-banner-mb.webp" className="img-responsive visible-xs" alt="Konfor Arc Flash Jacket"/>
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
								<li className="breadcrumb-item active" aria-current="page">Konfor FR Jacket</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox"><img src="/images/norms/atpv-10.svg" className="img-responsive " alt=""/></div>
								<img src="/images/product/electrical/jacket/konfor-fr-jacket-image-one.webp" className="img-responsive" alt="Konfor Arc Flash Jacket"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>High neck collar with velcro closure</li>
									<li>Center front with plastic zip and plastic snap closure</li>
									<li>2 chest pockets with flaps and plastic snap closures</li>
									<li>Down bone pockets with flaps</li>
									<li>Action back</li>
									<li>50mm FR reflective tape on front, back & arms</li>
									<li>Cuffs with adjustable velcro loops</li>
									<li>Bar-tacked at all stress points</li>
								</ul>
								
								
								<img src="/images/norms/ce.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-iso-11612-a1-b1-c1-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-1149-5.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-61482-1-2-class-1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/nfpa-70-e-cat-2.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/nfpa-2112.svg" className="img-responsive" alt=""/>

								<div className="clearfix"></div>
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