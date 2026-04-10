import Head from "next/head";

export const metadata = {
  title: "Disclaimer | Tarapro", 
  
  description: "",

  keywords: [ "", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Disclaimer | Tarapro",
	
    description: "",
	
    url: "/disclaimer",
	
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
														<h1>Disclaimer</h1>
														
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/disclaimer-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/disclaimer-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/disclaimer-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
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
								<li className="breadcrumb-item active">Disclaimer</li>
							</ol>
						</nav>
						
						<p className="prvcytxt">This is the official website of Tara Lohia Pvt. Ltd. and provides general information about the company. All content, including trademarks, displayed on this website are owned or licensed by Tara Lohia Pvt. Ltd. Tarapro retains all copyright and other intellectual property rights with respect to the content available and displayed on this website.</p>
						
						<p className="prvcytxt">While Tarapro has made great efforts to include accurate and up-to date information and links, such information and links on this website are provided as a convenience to you on an “as is and as available” basis. The content provided / displayed on this website is only for general purposes and whilst Tarapro does try to ensure the accuracy of such content while incorporating it into this website, such content should not be relied upon for any specific purpose and no representation or warranty is given as regards its accuracy, merchantability or fitness for particular purpose or completeness.</p>
						
						<p className="prvcytxt">To the fullest extent permissible, Tarapro disclaims any warranties, express and / or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, freedom from computer virus and warranties arising from course of dealing or course of performance. Tarapro does not represent or warrant that the functions contained in the website will be uninterrupted or error free, that defects will be corrected or that the website or the server that makes the website available are free of viruses or other harmful components. Tarapro does not make any warranties or representations regarding the use of the materials in the website in terms of their completeness, correctness, accuracy, adequacy, usefulness, timeliness, reliability or otherwise.</p>
						
						<p className="prvcytxt">Under no circumstances Tarapro will be liable for any expense, loss or damage including without limitation any special, indirect, incidental or consequential damages that may arise from the use of or the inability to use, the website and/or the materials contained on the website irrespective of whether the materials contained on the website are provided by Tarapro.</p>
						
						<p className="prvcytxt">Tarapro may change this website at any time without notice but does not assume any responsibility to update it. All users agree that all access and use of this website and on any website linked to from this site and the content thereof is at their own risk.</p>
						
						<p className="prvcytxt">Commercial use of any of the contents of this website in any manner is prohibited without prior written permission from an authorized person of Tarapro. No reproduction of any part of the website may be sold or distributed for commercial gain nor shall it be modified or incorporated in any other work, publication or website, whether in hardcopy or electronic format, including postings to any other website. Tarapro reserves all other rights.</p>
						
						<p className="prvcytxt">The information posted on this website could include hypertext links or pointers to information created and maintained by third parties / other organizations. When you select a link to an outside website you are leaving the website of Tarapro and are subject to privacy policies / security policies of the owners of the outside website. Information contained in any outside web site linked from this website has not been reviewed for accuracy or legal sufficiency. Tarapro is not responsible for the content of any such external hyperlinks and references to any external links should not be construed as an endorsement of the links or their content.</p>

						<p className="prvcytxt">No information on this website shall constitute an invitation to invest in Tara Lohia Pvt. Ltd. or any of its entities. Neither Tarapro nor its entities, nor their respective officers, employees or agents shall be liable for any loss, damage or expense arising out of any access to or use of this website or any website linked to it, including, without limitation, any loss or profit, indirect, incidental or consequential loss. By viewing this website you are deemed to agree to jurisdiction of the courts at Kolkata, India in respect of any action arising therefrom or related there to.</p>
						
						<p className="prvcytxt">Any visitor to this website hereby agrees that this Legal Disclaimer and Terms and Conditions of Usage is to be governed by and construed in accordance with the laws of India, without regard to the choice or conflicts of law provisions of any jurisdiction, and any dispute arising in relation to this website or its Legal Disclaimer and Terms and Conditions of Usage shall be subject to the exclusive jurisdiction of the courts in Kolkata.</p>
						
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
	
	</>
);
}