import "./css/bootstrap.min.css";
import "./css/hover.css";
import "./css/imagelightbox.min.css";
import "./css/owl.carousel.css";
import "./css/owl.theme.default.min.css";
import "./css/style.css";

import Script from "next/script";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import SetProductFromURLWrapper from "./components/SetProductFromURLWrapper";


export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001/"
  ),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
		<head>
			<link rel="shortcut icon" href="/images/favicon.ico" />
			<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" type="text/css"/>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" crossOrigin="anonymous" />
			
			{/* Google Tag Manager */}
			<Script id="gtm-script" strategy="afterInteractive">
			  {`
				(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-NRT2RJQ');
			  `}
			</Script>
			{/* End Google Tag Manager */}
			
		</head>

		<body>
			{/* Google Tag Manager (noscript) */}
			<noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NRT2RJQ" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>
			{/* End Google Tag Manager (noscript) */}
			
			<Navbar />
			<MobileNav />
			
			{/* ✅ Social Bar (ADD HERE) */}
			<div className="social-bar visible-lg visible-md visible-sm">
				<a href="https://www.facebook.com/TaraproFR" target="_blank" rel="noopener noreferrer">
				  <i className="fab fa-facebook-f"></i>
				</a>

				<a href="https://www.linkedin.com/company/tara-lohia-pvt-ltd-/" target="_blank" rel="noopener noreferrer">
				  <i className="fab fa-linkedin-in"></i>
				</a>

				<a href="https://www.instagram.com/taraprofr/" target="_blank" rel="noopener noreferrer">
				  <i className="fab fa-instagram"></i>
				</a>
			</div>
			

			{/* Page content */}
			{children}
			
			
			<Footer/>
			
			<Script id="navbar-hover" strategy="afterInteractive">
			  {`
				$(window).on("load resize", function () {
				  if (window.matchMedia("(min-width: 991px)").matches) {
					$(".dropdown").hover(
					  function () {
						$(this).addClass("open");
					  },
					  function () {
						$(this).removeClass("open");
					  }
					);
				  }
				});
			  `}
			</Script>
			
			{/* Sidebar */}
			<Script id="sidebar-js" strategy="afterInteractive">
			  {`
				function openNav() {
				  document.getElementById("mySidebar").style.width = "80%";
				  document.getElementById("main").style.marginRight = "80%";
				}

				function closeNav() {
				  document.getElementById("mySidebar").style.width = "0";
				  document.getElementById("main").style.marginRight = "0";
				}
			  `}
			</Script>

			{/* Accordion */}
			<Script id="accordion-js" strategy="afterInteractive">
			  {`
				var acc = document.getElementsByClassName("accordion");
				for (var i = 0; i < acc.length; i++) {
				  acc[i].addEventListener("click", function() {
					this.classList.toggle("active");
					var panel1 = this.nextElementSibling;
					if (panel1.style.display === "block") {
					  panel1.style.display = "none";
					} else {
					  panel1.style.display = "block";
					}
				  });
				}
			  `}
			</Script>

			<Script id="navbar-scroll" strategy="afterInteractive">
			  {`
				$(function() {
				  var header = $(".navbar");
				  $(window).scroll(function() {
					var scroll = $(window).scrollTop();
					if (scroll >= 50) {
					  header.addClass("scrolled");
					} else {
					  header.removeClass("scrolled");
					}
				  });
				});
			  `}
			</Script>
			

			{/* Scripts */}
			<Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" strategy="beforeInteractive" />
			<Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
			<Script src="/js/owl.carousel.js" strategy="afterInteractive" />

		</body>
    </html>
  );
}
