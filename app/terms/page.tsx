import Head from "next/head";

export const metadata = {
  title: "Terms Of Use | Tarapro", 
  
  description: "",

  keywords: [ "", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Terms Of Use | Tarapro",
	
    description: "",
	
    url: "/terms",
	
    siteName: "Tarapro",
	
    images: [ { url: "https://taralohia.com/images/banner-one-ipad.webp", width: 1200, height: 630, }, ],
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
											<div className="col-md-11 col-sm-7 no-pad">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1>Terms Of Use</h1>
														
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/terms-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/terms-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/terms-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active">Terms Of Use</li>
							</ol>
						</nav>
						
						<p className="prvcytxt">The website is designed, developed and maintained by Tara Lohia Pvt. Ltd.</p>
						
						<p className="prvcytxt">The content on this website is for general information and use only and is subject to change without notice. Though efforts have been made to ensure the accuracy and currency of the content on this website, Tarapro does not warrant or guarantee the accuracy and currency of the content whatsoever. All access to the website and use of the services provided on the website shall be only as permitted by the applicable law in India.</p>
						
						<p className="prvcytxt">The content that you access on the website of Tarapro may be protected by copyright laws. You may not use such content without permission in writing from the authorised person of Tarapro.</p>
						
						<p className="prvcytxt">Tarapro reserves the right to suspend, limit access, completely deny access to the website and remove content without prior notice if such content is in violation of any law in force in India. Tarapro also does not guarantee of any periodical review of content.</p>
						
						<p className="prvcytxt">The use of the website shall be at your own risk and under no circumstances Tarapro shall be liable and responsible for any expense, loss or damage whatsoever arising from use, or loss of use, of data arising out of or in connection with the use of this website.</p>
						
						<p className="prvcytxt">You acknowledge and agree that Tarapro owns all legal right, title and interests in and to the Services, including any intellectual property rights which subsist in the Services (whether those rights are registered or not). You further acknowledge that the Services may contain information that is designated confidential by the Website owner and that you shall not disclose such information without the Website owner’s prior written consent.</p>
						
						<p className="prvcytxt">These terms of use shall be governed by and construed in accordance with the Laws in India. Any dispute arising under these terms of use shall be subject to the exclusive jurisdiction of the courts in Kolkata.</p>
						
						<h4>Additional Terms of Service</h4>
						
						<p className="prvcytxt">You may not assign or otherwise transfer your rights or obligations under these Terms. Website owner may assign its rights and duties under these Terms without any such assignment being considered a change to the Terms and without any notice to you. If we fail to act on your breach or anyone else's breach on any occasion, we are not waiving our right to act with respect to future or similar breaches.</p>
						
						<p className="prvcytxt">Usage of the Website following the posting of notice of any modification will be subject to the Terms in effect at the time of your usage. If you object to these Terms or any subsequent modifications to these Terms or become dissatisfied with the Website and/or the Services in any way, your only recourse is to immediately terminate use of the Website and/or the Services.</p>
						
						<p className="prvcytxt">If any of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that Term will be enforced to the fullest extent permitted by applicable law and the other Terms will continue to remain valid and enforceable.</p>
						
						<p className="prvcytxt">The laws of India, without regard to its conflict of laws rules, will govern these Terms, as well as your and our observance of them. If you take any legal action relating to your use of the Website or these Terms, you agree to file such action only in the courts located in Mumbai, India. In any such action or any action we may initiate, the prevailing party will be entitled to recover all legal expenses incurred in connection with the legal action, including but not limited to costs, both taxable and non-taxable, and reasonable attorney fees.</p>
						
						<p className="prvcytxt">You acknowledge that you have read and have understood these Terms, and that these Terms have the same force and effect as a signed agreement.</p>
						
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		
	</>
);
}