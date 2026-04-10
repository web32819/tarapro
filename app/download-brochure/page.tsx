export default function () {
  return (
    <>
		
		<section className="bannerSection innrbr dwnld">
			<div className="container-fluid">
				<div className="row">
				
					<div className="col-md-12 no-pad">
						<div id="myCarousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
							
								<div className="item active">
									<div className="container">
										<div className="row">
											<div className="col-md-6 col-sm-7">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<div className="frmbx">
															<h2 className="txtbnnr">Download Our <span>Brochure</span></h2>
															<form action="/download-brchure.php" method="post" id="download">
																<input type="text" name="honeypot" id="honeypot" style={{ display: "none" }}/>
																<div className="col-md-12 no-pad">
																	<input type="text" name="name" id="name" className="form-control" placeholder="Full Name" required />
																</div>
															
																<div className="col-md-12 no-pad">
																	<input type="text" name="cname" id="cname" className="form-control" placeholder="Company Name" required />
																</div>
																
																<div className="col-md-12 no-pad">
																	<input type="email" name="email" id="email" className="form-control" placeholder="Email Address" required />
																</div>

																<div className="col-md-12 no-pad">
																	<input type="number" name="phone" id="phone" className="form-control" placeholder="Phone Number" required />
																</div>

																<div className="col-md-6 no-pad">
																	<button type="submit" className="btn btn-primary enqry hvr-sweep-to-right">Submit</button>
																</div>
																
																<div className="clearfix"></div>
															</form>
														</div>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/download-brchure-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/download-brchure-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/download-brchure-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
								</div>
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