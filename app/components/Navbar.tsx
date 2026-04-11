'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-inverse visible-lg visible-md">
      <div className="container">
        <div className="row">

          {/* Navbar Header */}
          <div className="navbar-header">
            <div className="col-md-10 col-sm-4 col-xs-6">
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/logo.svg"
                  className="img-responsive mainLogo"
                  alt="Tarapro FR Clothing"
                />
              </Link>
            </div>

            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav text-center">

              <li>
                <Link href="/about">About Us</Link>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <Link href="/fr-clothing" className="nav-link dropdown-toggle" data-toggle="dropdown">Product</Link>

                <div className="dropdown-menu dropdown-large menusctn">
                  <div className="container">
                    <div className="row">

                      {/* FR Clothing */}
                      <div className="col-md-6 menusctninnr">
                        <div className="col-md-12"><h1><Link href="/fr-clothing">FR Clothing</Link></h1></div>

                        {[
                          { href: '/fr-clothing/classic-fr-clothing', img: 'classic-nav-image.webp', title: 'Classic' },
                          { href: '/fr-clothing/welder-fr-clothing', img: 'welder-nav-image.webp', title: 'Welder' },
                          { href: '/fr-clothing/molten-metal-clothing', img: 'molten-nav-image.webp', title: 'Molten Metal' },
                          { href: '/fr-clothing/oil-gas-fr-clothing', img: 'oil-gas-nav-image.webp', title: 'Oil & Gas' },
                          { href: '/fr-clothing/electrical-arc-flash-clothing', img: 'electric-nav-image.webp', title: 'Electrical' },
                          { href: '/fr-clothing/fr-knits-clothing', img: 'knits-nav-image.webp', title: 'FR Knits' },
                        ].map((item) => (
                          <div className="col-md-4" key={item.title}>
                            <div className="menubox">
                              <Link href={item.href}>
                                <img
                                  src={`/images/${item.img}`}
                                  className="img-responsive"
                                  alt={item.title}
                                />
                                <h2>{item.title}</h2>
                              </Link>
                            </div>
                          </div>
                        ))}
                        <div className="clearfix"></div>
                      </div>

                      {/* Non-FR Clothing */}
                      <div className="col-md-3 menusctninnr">
                        <div className="col-md-12"><h1>Non-FR Clothing</h1></div>
                        <div className="col-md-8">
                          <div className="menubox">
                            <Link href="/fr-clothing/performance-wear-clothing">
                              <img
                                src="/images/performance-nav-image.webp"
                                className="img-responsive"
                                alt="Performance Wear"
                              />
                              <h2>Performance Wear</h2>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Gloves */}
                      <div className="col-md-3 menusctninnr">
                        <div className="col-md-12"><h1>Heat Resistant Gloves</h1></div>
                        <div className="col-md-10">
                          <div className="menubox">
                            <Link href="/fr-clothing/heat-resistant-gloves">
                              <img
                                src="/images/product/gloves/heat-nav-gloves.png"
                                className="img-responsive"
                                alt="Heat Resistant Gloves"
                              />
                              <h2>Heat Resistant Gloves</h2>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </li>

              <li><Link href="/why-tarapro">Why Tarapro</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li>
                <a href="mailto:info@tarapro.in" className="lastchild">
                  info@tarapro.in
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}
