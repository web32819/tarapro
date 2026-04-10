import Head from "next/head";

export const metadata = {
  title: "Arc Flash Balaclava", 
  
  description: "Tarapro Arc Flash Balaclava is a protective headwear designed to prevent electrical burn injuries in workers who may be exposed to arc flash hazards",

  keywords: [ "Arc Flash Balaclava", "FR Balaclava", "FR Hoods", "Flame resistant Hoods", "Flame resistant Balaclava", "Fire resistant Hoods", "Flame retardant Balaclava", "FR Hoods Manufacturer", "FR Balaclava Manufacturer", "FR Hoods Supplier", "FR Balaclava Supplier", "FRC", "Arc Flash Suit", "FR Clothing" ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Arc Flash Balaclava",
	
    description: "Tarapro Arc Flash Balaclava is a protective headwear designed to prevent electrical burn injuries in workers who may be exposed to arc flash hazards",
	
    url: "/fr-clothing/fr-knits-clothing/fr-arc-flash-balaclava",
	
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
														<h1 className="txtbnnr">ARC Flash Balaclava</h1>
														<h3>60% Modacrylic, 38% Cotton, 2% Antistatic, 180gsm, Rib</h3>
														
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/knits-arc-balaclava-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/knits-arc-balaclava-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/knits-arc-balaclava-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item"><a href="/fr-clothing/fr-knits-clothing">FR Knits</a></li>
								<li className="breadcrumb-item"><a href="/flame-resistant-hoods-balaclava">FR Hoods / FR Balaclava</a></li>
								<li className="breadcrumb-item active" aria-current="page">Arc Flash Balaclava</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox"></div>
								<img src="/images/product/knits/arc-balaclava/arc-flash-balaclava-image-one.webp" className="img-responsive" alt=""/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								
								<img src="/images/norms/en-iso-11612-a1-a2-b1-c1-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-1149-5.svg" className="img-responsive" alt=""/>
								
								

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