'use client';
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

// Add this at the top
declare global {
  interface Window {
    $: any;
  }
}

export default function CeUlCertifiedClothing() {
	useEffect(() => {
    const interval = setInterval(() => {
      if (window.$ && window.$.fn.imageLightbox) {
        window.$('a[data-imagelightbox="demo"]').imageLightbox({
          selector: 'a[data-imagelightbox]',
          id: 'imagelightbox',
          allowedTypes: 'webp|png|jpg|jpeg|gif',
          animationSpeed: 250,
          activity: true,
          arrows: true,
          button: true,
          caption: true,
          enableKeyboard: true,
          lockBody: false,
          navigation: true,
          overlay: true,
          preloadNext: true,
          quitOnEnd: false,
          quitOnImgClick: false,
          quitOnDocClick: true,
          quitOnEscKey: true
        });

        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  
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
											<div className="col-md-6 col-sm-7">
												<div className="bannrTxtbox mobilebnnr">
													<div className="bannrBox">
														<h1 className="">News</h1>
														<h3>Tarapro attends the first edition of Safety Talks, Jharkhand</h3>
													</div>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<img src="/images/safety-news-banner.webp" className="img-responsive visible-lg visible-md" alt=""/>
									<img src="/images/safety-news-banner-ipad.webp" className="img-responsive visible-sm" alt=""/>
									<img src="/images/safety-news-banner-mb.webp" className="img-responsive visible-xs" alt=""/>
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="innrsctn newscntnt">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
					
						<nav aria-label="breadcrumb" className="visible-lg visible-md visible-sm">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="/">Home</a></li>
								<li className="breadcrumb-item"><a href="/news">News</a></li>
								<li className="breadcrumb-item active" aria-current="page">Tarapro attends the first edition of Safety Talks, Jharkhand</li>
							</ol>
						</nav>
						
						<div className="col-md-4">
							<img src="/images/news/2022/november/jharkand-image/jharkand-image-feature.webp" className="img-responsive" alt=""/>
						</div>
						
						<div className="col-md-8">
							<p>12 November 2022</p>
							<p>Tarapro recently participated in the first edition of <strong>Safety Talks Jharkhand</strong>, organized by The Confederation of Indian Industry, on 10 November 2022 at The Alcor Hotel, Jamshedpur. The theme of the event was <strong>‘Transforming Health & Safety Culture to ensure Business Sustainability’</strong>. Safety Talks aims to bring together global innovators and change-makers, who are invited to share their opinions and experiences in ensuring business sustainability by transforming the OHS culture.</p>
							<p>The event featured five talk sessions starting with CEO Speaks, followed by Talks on Digital Safety, Process Safety, Construction Safety, and Road Safety.</p>
							<p className="visible-lg visible-lg">Safety is one of the most important elements of organizational culture. Enhancing the safety of the workplace environment makes good business sense in more ways than one. Being the foremost manufacturer and supplier of workplace fire-safety gear in India,</p>
						</div>
						<div className="clearfix"></div>
						
						<div className="col-md-12"> 
							<p className="visible-lg visible-md">Safety Talks Jharkhand is the <strong>ideal platform for us to showcase our latest advancements in PPE clothing that ensures safety best practices in haphazard-prone industries</strong>.</p>
							
							<p className="visible-sm visible-xs">Safety is one of the most important elements of organizational culture. Enhancing the safety of the workplace environment makes good business sense in more ways than one. Being the foremost manufacturer and supplier of workplace fire-safety gear in India, Safety Talks Jharkhand is the <strong>ideal platform for us to showcase our latest advancements in PPE clothing that ensures safety best practices in haphazard-prone industries</strong>.</p>
							
							<p>The event provided us an exclusive opportunity to gather in-depth learnings from some of industry’s frontline thought leaders and decision-makers.</p>
							
							<p>We were especially delighted to meet the top executives from the Tata group and its sister concerns, who are consistently setting new benchmarks in workplace safety management, technology and best practices to drive compliance as part of their organizational vision.</p>

							<p>Beginning with Mr. Neeraj Kumar Sinha’s (Convener, CII Jharkhand Safety Panel, Chief – Safety, Tata Steel Limited) talk on Safety Leadership that outlined the necessity and required skillsets to lead an efficient and effective workplace safety program, expert Tata personnel such as, Mr. Vikash Srivastava (Head Data Officer – Tata Steel Limited) gave an enriching speech about Digital Safety headlining the impact of technology for safety compliance. This was followed by a Process Safety talk by Mr. Ranadip Das (Chief – Process Safety, Tata Steel Limited, a vital talk on Construction safety by Mr. Sunil Kumar (Head-Safety, Tata Steel Ltd.), and finally a highly relevant address on Road Safety by Mr. Rahul Wadia (Co-Convener – CII Jharkhand Safety Panel, Deputy General Manager – Safety, Tata Motors Ltd.). Apart from Tata delegates, the event saw enthusiastic participation in discourses from other industry giants.</p>
							
							<p>The Tarapro team presented an extensive range of products, ideas, and solutions for a variety of industries which attracted the attention of several business houses. We received <strong>good responses for our latest portfolio of PPE clothing, safety training solutions, safety technology, risk management applications, lone worker protection solutions, and many more offerings</strong>.</p>
						
							<div className="tstmnlbx">
								<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
									<p>The discourse on the necessities of a safety culture is gaining relevance as the key to sustaining businesses in the long run. <strong>Productivity and profitability go hand in hand with health and safety</strong>. We had a rewarding experience sharing industry knowledge and showcasing our huge collection of workplace safety gears to an informed audience and business prospects from across India.</p>
									<h3>Mr. Rohit Lohia</h3>
									<h4>Director, Tarapro</h4>
								</div>
								<div className="clearfix"></div>
							</div>
							
							<p>The Tarapro team thanks the organizers and concerned authorities for giving us the perfect platform to participate in work-safety discourses and a chance to reach erudite audiences.</p>
						</div>

						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
	
		<Script src="/js/imagelightbox.min.js" strategy="afterInteractive"/>
	</>
);
}