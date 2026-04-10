'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false); // submenu toggle

  const openNav = () => setSidebarOpen(true);
  const closeNav = () => {
    setSidebarOpen(false);
    setProductOpen(false); // close submenu when sidebar closes
  };

  const toggleProduct = () => setProductOpen(!productOpen);

  return (
    <div className={`mobile-header visible-sm visible-xs`}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            {/* Logo */}
            <div className="col-xs-7 col-sm-10 no-pad">
              <div className="logoBox">
                <Link href="/" onClick={closeNav}>
                  <img
                    src="/images/logo.svg"
                    className="img-responsive"
                    alt="Tarapro FR Clothing"
                  />
                </Link>
              </div>
            </div>

            {/* Menu Button */}
            <div className="col-xs-5 col-sm-2 no-pad">
              <div className="navigatnBox">
                {/* Sidebar */}
                <div className="sidebar" style={{ width: sidebarOpen ? '80%' : '0' }}>
                  <div className="sclbox">
                    <Link href="/" onClick={closeNav}><img src="/images/logo.svg" className="img-responsive" alt="Tarapro FR Clothing" /></Link>
                  </div>

                  <button className="closebtn" onClick={closeNav}>×</button>

                  <Link href="/" onClick={closeNav}>Home</Link>
                  <Link href="/about" onClick={closeNav}>About Us</Link>

                  {/* Accordion */}
                  <button className="accordion" onClick={toggleProduct}>
                    Product <span><i className={`fas fa-chevron-${productOpen ? 'up' : 'down'}`}></i></span>
                  </button>

                  <div
                    className="panel1"
                    style={{ display: productOpen ? 'block' : 'none' }}
                  >
                    <ul>
						<li> <Link href="/fr-clothing/classic-fr-clothing" onClick={closeNav}> Classic FR Clothing </Link> </li>
						<li>
                        <Link href="/fr-clothing/welder-fr-clothing" onClick={closeNav}>
                          Welder FR Clothing
                        </Link>
						</li>
						<li>
                        <Link href="/fr-clothing/molten-metal-clothing" onClick={closeNav}>
                          Molten Metal FR Clothing
                        </Link>
						</li>
						<li>
                        <Link href="/fr-clothing/oil-gas-fr-clothing" onClick={closeNav}>
                          Oil & Gas FR Clothing
                        </Link>
						</li>
                      <li>
                        <Link href="/fr-clothing/electrical-arc-flash-clothing" onClick={closeNav}>
                          Electrical Arc Flash
                        </Link>
                      </li>
                      <li>
                        <Link href="/fr-clothing/fr-knits-clothing" onClick={closeNav}>
                          FR Knits
                        </Link>
                      </li>
                      <li>
                        <Link href="/fr-clothing/performance-wear-clothing" onClick={closeNav}>
                          Performance Wear
                        </Link>
                      </li>
                      <li>
                        <Link href="/fr-clothing/heat-resistant-gloves" onClick={closeNav}>
                          Heat Resistant Gloves
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <Link href="/why-tarapro" onClick={closeNav}>Why Tarapro</Link>
                  <Link href="/news" onClick={closeNav}>News</Link>
                  <Link href="/events" onClick={closeNav}>Events</Link>
                  <Link href="/contact" onClick={closeNav}>Contact</Link>

                  {/* Social */}
                  <div className="fllwbox">
                    <h4>Follow us on</h4>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/TaraproFR" target="_blank" rel="noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/tara-lohia-pvt-ltd-/" target="_blank" rel="noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/taraprofr/" target="_blank" rel="noreferrer">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Open Button */}
                <div id="main">
                  <button className="openbtn" onClick={openNav}>
                    <i className="fas fa-bars"></i>
                  </button>
                </div>

              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
}