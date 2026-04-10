import Head from "next/head";

export const metadata = {
  title: "Fresco Polo HV | Tarapro", 
  
  description: "FRESCO Polo HV T-shirt is made in Modacrylic Cellulose Based Multi Fiber, 250gsm, Interlock, designed to make the wearer highly visible in low-light or nighttime conditions",

  keywords: [ "FR T-Shirts", "Fresco Polo HV", "Flame resistant T-Shirts", "Fire resistant T-Shirts", "Flame retardant T-Shirts", "Fire retardant T-Shirts", "FR T-Shirts Manufacturer", "Arc Flash Suit", "FR T-Shirts Supplier", "FRC" ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Fresco Polo T-Shirt | Tarapro",
	
    description: "FRESCO Polo HV T-shirt is made in Modacrylic Cellulose Based Multi Fiber, 250gsm, Interlock, designed to make the wearer highly visible in low-light or nighttime conditions",
	
    url: "/fr-clothing/fr-knits-clothing/fr-fresco-polo-hv",
	
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
														<h1 className="txtbnnr">Fresco Polo HV</h1>
														<h3>Modacrylic Cellulose Based Multi Fiber, 250gsm, Interlock</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/knits-fresco-polo-hv-banner.webp" className="img-responsive visible-lg visible-md" alt="Fresco Flame Resistant Polo HV"/>
									<img src="/images/knits-fresco-polo-hv-banner-ipad.webp" className="img-responsive visible-sm" alt="Fresco Flame Resistant Polo HV"/>
									<img src="/images/knits-fresco-polo-hv-banner-mb.webp" className="img-responsive visible-xs" alt="Fresco Flame Resistant Polo HV"/>
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
								<li className="breadcrumb-item"><a href="/flame-resistant-t-shirts">FR T-Shirt</a></li>
								<li className="breadcrumb-item active" aria-current="page">Fresco Polo HV</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							<ul className="prdctlsttxt visible-xs">
								
							</ul>
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox"><img src="/images/norms/atpv-13.svg" className="img-responsive " alt=""/></div>
								<img src="/images/product/knits/fresco-hv/fresco-polo-hv-image-one.webp" className="img-responsive" alt="Fresco Flame Resistant Polo HV"/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<ul>
									<li>Long sleeves hi-vis T-shirt</li>
									<li>Heat resistant button closure</li>
									<li>Casual look</li>
									<li>Keeps you cool and fresh all day</li>
									<li>Best in className protection</li>
									<li>Also available <a href="/fr-clothing/fr-knits-clothing/fr-fresco-polo">without Hi-Vis</a></li>
								</ul>
								
								
								<img src="/images/norms/ce.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-iso-11612-a1-a2-b1-c1-e1-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-1149-5.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-61482-1-2-apc-1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/f-1506.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-iso-20471.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/hi-vis-1906-4-2010.svg" className="img-responsive" alt=""/>

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