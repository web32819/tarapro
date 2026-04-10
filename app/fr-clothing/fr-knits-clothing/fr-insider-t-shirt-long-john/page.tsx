import Head from "next/head";

export const metadata = {
  title: "Tarapro", 
  
  description: "",

  keywords: [ "" ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Tarapro",
	
    description: "",
	
    url: "/fr-clothing/fr-knits-clothing/fr-insider-t-shirt-long-john",
	
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
														<h1 className="txtbnnr">Insider T-shirt & Long John</h1>
														<h3>60% Modacrylic, 38% Cotton, 2% Antistatic, 180gsm, Rib</h3>
														
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/insider-banner.webp" className="img-responsive visible-lg visible-md" alt="Insider Fire Retardant T-Shirt & Long John"/>
									<img src="/images/insider-banner-ipad.webp" className="img-responsive visible-sm" alt="Insider Fire Retardant T-Shirt & Long John"/>
									<img src="/images/insider-banner-mb.webp" className="img-responsive visible-xs" alt="Insider Fire Retardant T-Shirt & Long John"/>
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
								<li className="breadcrumb-item active" aria-current="page">Insider T-shirt & Long John</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							<ul className="prdctlsttxt visible-xs">
								
							</ul>
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox"></div>
								<img src="/images/product/knits/insider/insider-image-one.webp" className="img-responsive" alt="Insider Fire Retardant T-Shirt & Long John"/>
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