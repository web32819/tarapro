import Head from "next/head";

export const metadata = {
  title: "Tarapro", 
  
  description: "",

  keywords: [ "", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Tarapro",
	
    description: "Tarapro",
	
    url: "/fr-clothing/molten-metal-clothing/xtreme-long-fr-coat",
	
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
														<h1 className="txtbnnr">Xtreme Long Coat</h1>
														<h3>Outer - layer: Aluminized Para-aramid 400gsm <br/>Inner - layer: Flame Retardant Satin, 350gsm</h3> 
														<ul className="">
															<li>Heavy duty protection against extreme heat, flame and molten metal</li>
															<li>Multi layered workwear</li>
														</ul>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div> 
									<img src="/images/molten-long-coat-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/molten-long-coat-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/molten-long-coat-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item"><a href="/fr-clothing/molten-metal-clothing">Molten Metal</a></li>
								<li className="breadcrumb-item active" aria-current="page">Aluminized Long Coat</li>
							</ol>
						</nav>
						<div className="mbltxtbx">
							
						</div>
					
						<div className="col-md-7 col-sm-6">
							<div className="prdctimgbx">
								<div className="thumBox">
									
								</div>
								<img src="/images/product/molten-metal/titan-coat/molten-metal-coat-image-one.webp" className="img-responsive" alt=""/>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="prdctcntntfull">
								<h3 className="hdtxt">Hood + Helmet</h3>
								<ul>
									<li>Gold plated face-shield for molten metal protection</li>
									<li>Molded propionate offers best cross-usage protection and easeof installation</li>
									<li>Extended coverage</li>
									<li>True-view gray tint to reduce ambient glare in outdoor use</li>
									<li>Gold plated visor</li>
								</ul>

								<img src="/images/norms/en-iso-11612-a1-a2-b2-c4-d3-e3-f2.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/en-iso-11612-a1-a2-b1-c1-e3-f1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/ansi-z87-1.svg" className="img-responsive" alt=""/>
								
								<img src="/images/norms/csa-z94-3.svg" className="img-responsive" alt=""/>
							
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