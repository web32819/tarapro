import Head from "next/head";

export const metadata = {
  title: "Contact | Tarapro", 
  
  description: "Tarapro offers a range of Flame Resistant protective, made using a wide selection of fabrics, styles and colors for use in varied working conditions",

  keywords: [ "FR Clothing", "FR Coveralls", "Flame resistant Coveralls", "Fire resistant Coveralls", "Flame retardant Coveralls", "Fire retardant Coveralls", "Flame resistant Coveralls", "Fire resistant Coveralls", "Flame retardant Coveralls", "Fire retardant Coveralls", "Flame resistant Boiler suits", "Fire resistant Boiler suits", ],

  authors: [{ name: "Tarapro" }],

  openGraph: {
    title: "Contact | Tarapro",
	
    description: "Tarapro offers a range of Flame Resistant protective, made using a wide selection of fabrics, styles and colors for use in varied working conditions",
	
    url: "/contact",
	
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
											<div className="col-md-5 col-sm-5 no-pad">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1>Contact</h1>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/contact-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/contact-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/contact-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		
		<section className="rngsctn prdctbxdtls cntctbx">
			<div className="container">
				<div className="row">
					<div className="col-md-12 no-pad">
						
						<nav aria-label="breadcrumb" className="visible-lg visible-md visible-sm">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="index.html">Home</a></li>
								<li className="breadcrumb-item active">Contact</li>
							</ol>
						</nav>
						
						<div className="col-md-6 col-sm-6">
							<div className="addrssbx">
								<h3><span>We are always ready</span> to help you and answer your questions</h3>
								<div className="col-md-6">
									<h4>Address</h4>
									<p>Tara Lohia Pvt Ltd. <br className="visible-lg visible-md"/>45/4A, Chakraberia Road (S) <br className="visible-lg visible-md"/>Block A, 3rd Floor, Nahar Park<br className="visible-lg visible-md"/> Kolkata - 700 025</p>
								</div>
								<div className="col-md-6">
									<h4>PHONE</h4>
									<p>+91 33 4073 1175</p>
								</div>
								<div className="clearfix"></div>
								<div className="col-md-6">
									<h4>Follow us</h4>
									<ul>
										<li><a href="https://www.facebook.com/TaraproFR" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
										<li><a href="https://www.linkedin.com/company/tara-lohia-pvt-ltd-/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
										<li><a href="https://www.instagram.com/taraprofr/" target="_blank"><i className="fab fa-instagram"></i></a></li>
									</ul>
								</div>
								<div className="col-md-6">
									<h4>Email</h4>
									<p><a href="mailto:info@tarapro.in">info@tarapro.in</a></p>
								</div>
							</div>
						</div>
						
						
						<div className="col-md-6 col-sm-6">
					
							<div className="frmbx">
								<h1>Get in Touch</h1>
								<form action="/contact.php" method="post" id="contact" className="contact">
									<div className="col-md-12 no-pad">
										<input type="text" name="name" id="name" className="form-control" placeholder="Full Name" required />
									</div>
									
									<div className="col-md-12 no-pad">
										<input type="text" name="cname" id="cname" className="form-control" placeholder="Company Name" required />
									</div>
									
									<div className="col-md-12 no-pad">
										<input type="email" name="email" id="email" className="form-control" placeholder="Email" />
									</div>
									
									<div className="col-md-12 no-pad">
										<input type="text" name="phone" id="phone" className="form-control" placeholder="Phone No" />
									</div>
									
									<div className="col-md-12 no-pad">
										<textarea name="message" id="message" className="form-control" placeholder="Enquiry" required ></textarea>
									</div>

									<div className="col-md-5 no-pad">
										<input type="hidden" name="submit_check" value="submitted"/>
										<button type="submit" className="btn btn-primary enqry hvr-sweep-to-right">Submit</button>
									</div>
									
									<div className="clearfix"></div>
								</form>
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