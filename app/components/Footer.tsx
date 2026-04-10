"use client";

import React from "react";

const Footer = () => {
  return (
    
	<footer id="footer">
		<section className="upprFooter">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
					
						<div className="col-md-3 col-sm-6">
							<div className="footrbx">
								<img src="/images/logo.svg" className="img-responsive" alt="Tarapro FR Garments"/>
								<p>Tara Lohia Pvt Ltd.<br />45/4A, Chakraberia Road (S),<br />Block A, 3rd Floor, Nahar Park<br />Kolkata - 700 025</p>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-6">
							<div className="footrbx">
								<h3>Quick Links</h3>
								<ul className="srvcnav">
									<li><a href="/">Home</a></li>
									<li><a href="/about">About Us</a></li>
									<li><a href="/download-brochure">Request A Brochure</a></li>
									<li><a href="/wash-instruction">Wash Instructions</a></li>
								</ul>
							</div>
						</div>
						
						<div className="clearfix visible-sm"></div>
						
						<div className="col-md-3 col-sm-6">
							<div className="footrbx">
								<h3>Products We offer</h3>
								<ul className="srvcnav">
									<li><a href="/flame-resistant-coverall">FR Coveralls</a></li>
									<li><a href="/flame-resistant-jacket">FR Jackets</a></li>
									<li><a href="/flame-resistant-trouser-pant">FR Trousers and Bib Pants</a></li>
									<li><a href="/flame-resistant-shirts">FR Shirts</a></li>
									<li className="visible-xs"><a href="/flame-resistant-t-shirts">FR T-Shirt</a></li>
									<li className="visible-xs"><a href="/flame-resistant-hoods-balaclava">FR Hoods / FR Balaclava</a></li>
									<li className="visible-xs"><a href="/arc-flash-suit">Arc Flash Suit</a></li>
								</ul>
							</div>
						</div>
		
						<div className="col-md-3 col-sm-6 visible-lg visible-md visible-sm">
							<div className="footrbx">
								<h3>&nbsp;</h3>
								<ul className="srvcnav">
									<li><a href="/flame-resistant-t-shirts">FR T-Shirt</a></li>
									<li><a href="/flame-resistant-hoods-balaclava">FR Hoods / FR Balaclava</a></li>
									<li><a href="/flame-resistant-high-visibility-clothing">High Visibility FR Clothing</a></li>
									<li><a href="/arc-flash-suit">Arc Flash Suit</a></li>
								</ul>
							</div>
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="lowerfooter">
			<div className="container">
				<div className="col-md-12">
					<div className="lowersctn">
						<div className="col-md-6 col-sm-7 no-pad">
							<ul>
								<li><a href="/privacy-policy">Privacy Policy</a></li>
								<li><a href="/terms">Terms Of Use</a></li>
								<li><a href="/disclaimer">Disclaimer</a></li>
							</ul>
							<p className="cpytxt">Copyright @2025 Tarapro. All Rights Reserved.</p>
						</div>
						<div className="col-md-6 col-sm-5 no-pad">
							<p>Website Design: <a href="https://www.32bytes.net" target="_blank">32bytes</a></p>
						</div>
						<div className="clearfix"></div>
					</div>
					<div className="clearfix"></div>
				</div>    
			</div>
		</section>
		
	</footer>
	
	
  );
};

export default Footer;
