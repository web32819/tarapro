import Head from "next/head";

export const metadata = {
  title: "Events | Tarapro", 
  
  description: "Tarapro recently had the pleasure of attending the 6th edition of the India Health, Safety, and Environment (HSE) Summit and Awards 2022",

  keywords: [ "Fire resistant Clothing", "FR Resistant Clothing", "Flame resistant Clothing", "Fire Retardant Clothing", "FR Coveralls", "FR Jackets", "Fireproof jackets", "Pants FR", "Arc Flash Suit", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Events | Tarapro",
	
    description: "Tarapro recently had the pleasure of attending the 6th edition of the India Health, Safety, and Environment (HSE) Summit and Awards 2022",
	
    url: "/events",
	
    siteName: "Tarapro",
	
    images: [ { url: "https://taralohia.com/images/banner-one-ipad.webp", width: 1200, height: 630, }, ],
    type: "website",
  },
};

export default function () {
  return (
    <>
		<section className="bannerSection innrbr newsbnnr">
			<div className="container-fluid">
				<div className="row">
				
					<div className="col-md-12 no-pad">
						<div id="myCarousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
							
								<div className="item active">
									<div className="container">
										<div className="row">
											<div className="col-md-5 col-sm-5 no-pad">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1>Events</h1>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/events-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/events-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/events-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="rngsctn prdctbxdtls">
			<div className="container">
				<div className="row">
					<div className="col-md-12 no-pad">
						
						<div className="newsbx">
						
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2025/sep/fire-india/fire-india-feature-image.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>Fire India 2025</strong></h3>
									<p><strong>Date:</strong> 25th – 27th  September 2025 <br/> <strong>Stall No:</strong> D22 <br/> <strong>Location:</strong> Bombay Exhibition Centre, Nesco, Mumbai</p>
									<a href="/news/tarapro-september-expo-tour-2025" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
									
								</div>
							</div>
							
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									<img src="/images/events/2025/sep/osh-india/osh-india-feature-image.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>OSH India 2025</strong></h3>
									<p><strong>Date:</strong> 16th – 18th  September 2025 <br/> <strong>Hall No.</strong> 06 <br/> <strong>Booth No:</strong> G20<br/> <strong>Location:</strong> Bombay Exhibition Centre, Goregaon East, Mumbai</p>

									<a href="/news/tarapro-september-expo-tour-2025" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>

								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2025/aug/cii-safety/cii-safety-feature-image.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>CII - 19th Safety Symposium & Exposition (Eastern Region)</strong></h3>
									<p><strong>Date:</strong> 11th – 12th  September 2025 <br/> <strong>Stall No:</strong> 1 & 2  <br/><strong>Location:</strong> Mumbai Exhibition Centre, Mumbai</p>
									
									<a href="/news/tarapro-india-steel-expo-25" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
									
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									<img src="/images/events/2025/april/india-steel/india-steel-featured-img.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>India Steel Expo</strong></h3>
									<p><strong>Date:</strong> 24th - 26th April  2025 <br/> <strong>Stall No:</strong> A06 <br/><strong>Location:</strong> Mumbai Exhibition Centre, Mumbai</p>
									<a href="/news/tarapro-india-steel-expo-25" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a> 
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2025/march/icfarefcon/icfarefcon-featured.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>ICFAREFCON</strong></h3>
									<p><strong>Date:</strong> 7th - 8th March 2025 <br/> <strong>Stall No:</strong> E1 <br/><strong>Location:</strong> Biswa Bangla Convention Centre, Kolkata</p>
									
									<a href="/news/icfarefcon-exhibition-steel-mettalurgy" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
									
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2025/feb/elecrama/elecrama-featured.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>Elecrama 2025</strong></h3>
									<p><strong>Date:</strong> 22nd - 26th February 2025 <br/> <strong>Stall No:</strong> B26<br/><strong>Hall No.</strong> H1A <br/><strong>Location:</strong> India Expo Mart, Greater Noida</p>
									<a href="/news/tarapro-shines-elecrama-25" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2024/nov/iim-atm/iim-atm-featured.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>IIM - ATM 2024</strong></h3>
									<p><strong>Date:</strong> 20th - 22nd November 2024 <br/> <strong>Stall No:</strong> 13 <br/><strong>Location:</strong> Gandhi Krishi Vignana Kendra (GKVK), Bengaluru</p>
									<a href="/news/tarapro-iim-atm-flame-resistant" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2024/sep/fire-india/fire-india-featured.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>Fire India 2024 Exhibition</strong></h3>
									<p><strong>Date:</strong> 26th - 28th September 2024 <br/> <strong>Stall No:</strong> D22 <br/><strong>Location:</strong> Yashobhoomi, IICC, Dwarka, New Delhi</p>
									<a href="/news/fire-india-exhibition-2024" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2024/aug/cii-safety/Tarapro-CII-featured.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>CII-18th Safety Symposium & Exposition Eastern Region</strong></h3>
									<p><strong>Date:</strong> 22nd - 23rd August 2024 <br/> <strong>Stall No:</strong> 1&2 <br/><strong>Location:</strong> ITC Sonar, Kolkata</p>
									<a href="/news/cii-18th-safety-symposium-exposition" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2024/june/osh-india/osh-india-image-featured.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>OSH India South</strong></h3>
									<p><strong>Date:</strong> 27th-28th June 2024 <br/> <strong>Booth No:</strong> A25 <br/><strong>Location:</strong> Bengaluru International Exhibition Centre, Bengaluru</p>
									<a href="/news/tarapro-showcases-cutting-edge-flame-resistant-innovations-osh-india-south-2024" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2024/feb/safety-summit/World-of-Safety-Summit-And-Expo-2024-featured.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>World of Safety Summit and Expo 2024</strong></h3>
									<p><strong>Date:</strong> 5th-6th February 2024 <br/> <strong>Stall No:</strong> C12 <br/><strong>Location:</strong> Nesco Centre, Goregaon (East)</p>
									<a href="/news/tarapro-makes-waves-CII-enterprise-odisha-world-safety-summit" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2024/jan/enterprise-odisha/enterprise-odisha-banner.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>CII Enterprise Odisha</strong></h3>
									<p><strong>Date:</strong> 19th-21st January 2024 <br/> <strong>Stall No:</strong> B3 & B4 <br/><strong>Location:</strong> Circuit House Road Ground, Jharsuguda</p>
									<a href="/news/tarapro-makes-waves-CII-enterprise-odisha-world-safety-summit" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2023/november/safety-symposium/safety-symposium-banner.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>CII Jharkhand Safety Symposium and Exposition</strong></h3>
									<p><strong>Date:</strong> 3rd November 2023 <br/> <strong>Stall No:</strong> 10<br/><strong>Location:</strong> The Cruze, Jamshedpur</p>
									<a href="/news/tarapro-pioneering-safety-solutions-innovations" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2023/november/osh-market/osh-market-banner.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>OSH INDIA</strong></h3>
									<p><strong>Date:</strong> 23rd - 25th November 2023 <br/><strong>Hall No.</strong> 04 <br/><strong>Location:</strong> Bombay Exhibition Centre Goregaon</p>
									<a href="/news/tarapro-pioneering-safety-solutions-innovations" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2023/november/conference-metal/conference-metal-banner.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>IIM - ATM 2023</strong></h3>
									<p><strong>Date:</strong> 22nd - 24th November 2023 <br/><strong>Hall No.</strong> 04 <br/><strong>Location:</strong> KIIT, Bhubaneswar</p>
									<a href="/news/tarapro-pioneering-safety-solutions-innovations" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2023/august/safety-symposium/safety-symposium-banner.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>17th Safety Symposium & Exposition</strong></h3>
									<p><strong>Date:</strong> 22nd - 23rd August 2023 <br/><strong>Stall No:</strong> 1 & 2 <br/><strong>Location:</strong> ITC Sonar, Kolkata</p>
									<a href="/news/tarapro-17th-safety-symposium-exposition" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2023/april/summit-expo/summit-expo-banner.webp" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>Summit And Expo 2023 - World Of Safety</strong></h3>
									<p><strong>Date:</strong> 27th - 28th April 2023 <br/><strong>Booth No:</strong> C-24 & C-19<br/><strong>Hall No.</strong> 04<br/><strong>Location:</strong> NESCO Center, Goregaon (East)</p>
									<a href="/news/tarapro-innovative-FR-clothing-solutions-steal-show-summit-expo" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2023/march/she-con-image/she-con-web-banner.webp" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>NSCI's 13th National Conference and Exhibition on SHE</strong></h3>
									<p><strong>Date:</strong> 16th - 17th March 2023 <br/><strong>Stall No:</strong> 07 & 08<br/><strong>Location:</strong> Taleigao Community Centre, Caranzalem, Panjim, Goa</p>
									<a href="/news/tarapro-cutting-edge-FR-Workwear-solutions-shines-shecon-expo-2023" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2022/december/summit-award/summit-award-feature-image.webp" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
										<h3><strong>India Health, Safety, and Environment (HSE) Summit and Awards</strong></h3>
										<p><strong>Date:</strong> 15th - 16th December 2022 <br/><strong>Stall No:</strong> 09 <br/><strong>Location:</strong> Hotel Radisson Blu, Dwarka, New Delhi</p>
									<a href="/news/tarapro-participates-6th-edition-of-india-hse-summit" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2022/november/safety-jharkand/safety-jharkand-feature-image.webp" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>CII Safety Talks Jharkhand</strong></h3>
									<p><strong>Date:</strong> 10th November 2022 <br/><strong>Location:</strong> The Alcor Hotel, Jamshedpur</p>
									<a href="/news/tarapro-attends-the-first-edition-safety-talks-jharkhand" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2022/august/materials/materials-feature-image.webp" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>Minerals, Metals, Metallurgy and Materials (MMMM)</strong></h3>
									<p><strong>Date:</strong> 25th - 27th August 2022 <br/><strong>Stall No:</strong> M-130 (Hall 03) <br/><strong>Location:</strong> Pragati Maidan, New Delhi</p>
									<a href="/news/tarapro-participates-mmmm-new-delhi" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<hr className="hr"/>
						
						<div className="newsbx">
					
							<div className="col-md-3 col-sm-6">
								<div className="nwsimgbx">
									 <img src="/images/events/2022/august/exposition/exposition-feature-image.webp" className="img-responsive" alt=""/>
								</div>
							</div>
							
							<div className="col-md-9 col-sm-6">
								<div className="nwstxtbx">
									<h3><strong>16th Safety Symposium & Exposition</strong></h3>
									<p><strong>Date:</strong> 4th - 5th August 2022 <br/><strong>Stall No</strong>: 02<br/><strong>Location:</strong> ITC Sonar, Kolkata</p>
									<a href="/news/tarapro-showcases-smart-fr-solutions-cii-safety-symposium-exposition" className="dscvrtxt hvr-sweep-to-right btn btn-primary">View Story</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
	</>
);
}