import React from 'react';

function Header(props) {
    return (
        <>
            <header className="header header-1">
  <div className="header-top header-1--top">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 text-lg-start text-center">
          {/* Contact Info Start */}
          <ul className="contact-info contact-info--1">
            <li className="contact-info__list">
              <i className="fa fa-envelope-open" />
              <a href="mailto:demo@example.com">demo@example.com</a>
            </li>
            <li className="contact-info__list">
              <i className="fa fa-phone" />
              <a href="#">+88 123 456 7899</a>
            </li>
          </ul>
          {/* Contact Info End */}
        </div>
        <div className="col-lg-6 text-end">
          {/* Header Top Nav Start */}
          <div className="header-top__nav header-top__nav--1 d-flex justify-content-lg-end justify-content-center">
            <div className="user-info header-top__nav--item">
              <div className="dropdown header-top__dropdown">
                <a
                  className="dropdown-toggle"
                  id="userID"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Account
                </a>
                <div className="dropdown-menu" aria-labelledby="userID">
                  <a className="dropdown-item" href="#">
                    My Account
                  </a>
                  <a className="dropdown-item" href="#">
                    Checkout
                  </a>
                  <a className="dropdown-item" href="#">
                    Sign In
                  </a>
                </div>
              </div>
            </div>
            <div className="currency-selector header-top__nav--item">
              <div className="dropdown header-top__dropdown">
                <a
                  className="dropdown-toggle"
                  id="currencyID"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Currency: </span>
                  USD
                </a>
                <div className="dropdown-menu" aria-labelledby="currencyID">
                  <a className="dropdown-item" href="#">
                    USD
                  </a>
                  <a className="dropdown-item" href="#">
                    EURO
                  </a>
                </div>
              </div>
            </div>
            <div className="language-selector header-top__nav--item">
              <div className="dropdown header-top__dropdown">
                <a
                  className="dropdown-toggle"
                  id="languageID"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Language: </span>
                  <img src="assets/img/header/1.jpg" alt="English" /> ENGLISH
                </a>
                <div className="dropdown-menu" aria-labelledby="languageID">
                  <a className="dropdown-item" href="#">
                    <img src="assets/img/header/1.jpg" alt="English" /> English
                  </a>
                  <a className="dropdown-item" href="#">
                    <img src="assets/img/header/2.jpg" alt="Français" />{" "}
                    Français
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Header Top Nav End */}
        </div>
      </div>
    </div>
  </div>
  <div className="header-middle header-1--middle brand-bg d-flex align-items-center">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-3 tex-xl-left text-center">
          {/* Logo Start */}
          <a href="index.html" className="logo-box">
            <img src="assets/img/logo/logo-white.png" alt="logo" />
          </a>
          {/* Logo End */}
        </div>
        <div className="col-xl-5 col-lg-7 d-none d-lg-block">
          <nav className="main-navigation">
            {/* Mainmenu Start */}
            <ul className="mainmenu">
              <li className="mainmenu__item active menu-item-has-children">
                <a href="index.html" className="mainmenu__link">
                  Home
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home 1</a>
                  </li>
                </ul>
              </li>
              <li className="mainmenu__item menu-item-has-children">
                <a href="shop.html" className="mainmenu__link">
                  Shop
                </a>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a href="shop.html">Shop Gird</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop.html">Shop Left Sidebar</a>
                      </li>
                      <li>
                        <a href="shop-right-sidebar.html">Shop Right Sidebar</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth.html">Shop Full Width</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-4-column.html">Shop 4 Column</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="shop-list.html">Shop List</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-list-left-sidebar.html">
                          Shop List Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list-right-sidebar.html">
                          Shop List Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list.html">Shop List Full Width</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="single-product.html">Single Product</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="single-product.html">Tab Style 1</a>
                      </li>
                      <li>
                        <a href="single-product-tab-style-2.html">
                          Tab Style 2
                        </a>
                      </li>
                      <li>
                        <a href="single-product-tab-style-3.html">
                          Tab Style 3
                        </a>
                      </li>
                      <li>
                        <a href="single-product-gallery-left.html">
                          Gallery Left
                        </a>
                      </li>
                      <li>
                        <a href="single-product-gallery-right.html">
                          Gallery Right
                        </a>
                      </li>
                      <li>
                        <a href="single-product-slider-box.html">Slider Box</a>
                      </li>
                      <li>
                        <a href="single-product-slider-full-width.html">
                          Slider Full Width
                        </a>
                      </li>
                      <li>
                        <a href="single-product-sticky-left.html">
                          Sticky Left
                        </a>
                      </li>
                      <li>
                        <a href="single-product-sticky-right.html">
                          Sticky Right
                        </a>
                      </li>
                      <li>
                        <a href="single-product-group.html">Group Product</a>
                      </li>
                      <li>
                        <a href="single-product-variable.html">
                          Variable Product
                        </a>
                      </li>
                      <li>
                        <a href="single-product-affiliate.html">
                          Affiliate Product
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="mainmenu__item">
                <a href="portfolio.html" className="mainmenu__link">
                  Portfolio
                </a>
              </li>
              <li className="mainmenu__item">
                <a href="blog.html" className="mainmenu__link">
                  Blog
                </a>
              </li>
              <li className="mainmenu__item menu-item-has-children">
                <a href="#" className="mainmenu__link">
                  Features
                </a>
                <ul className="megamenu three-column">
                  <li>
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="about-us-2.html">About Us 2</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="contact-2.html">Contact 2</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="services-2.html">Services 2</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                      <li>
                        <a href="login-register.html">
                          Login &amp; Registration
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                    <ul>
                      <li>
                        <a href="blog.html">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-3-column.html">Blog 3 Column</a>
                      </li>
                      <li>
                        <a href="blog-4-column.html">Blog 4 Column</a>
                      </li>
                      <li>
                        <a href="single-blog-image.html">Image Format</a>
                      </li>
                      <li>
                        <a href="single-blog-gallery.html">Gallery Format</a>
                      </li>
                      <li>
                        <a href="single-blog-audio.html">Audio Format</a>
                      </li>
                      <li>
                        <a href="single-blog-video.html">Video Format</a>
                      </li>
                      <li>
                        <a href="single-blog-right-sidebar.html">
                          Right Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                    <ul>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="compare.html">Compare</a>
                      </li>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            {/* Mainmenu End */}
          </nav>
        </div>
        <div className="col-xl-4 col-lg-5">
          {/* Search Form Start */}
          <form action="#" className="search-form search-form--1">
            <div className="search-form__group search-form__group--select">
              <select
                name="category"
                id="searchCategory"
                className="search-form__select"
              >
                <option value="all">All Categories</option>
                <optgroup label="Books, Magazines">
                  <option>Bedroom</option>
                  <option>Kitchen</option>
                  <option>Livingroom</option>
                </optgroup>
                <optgroup label="Electronics">
                  <option>Fridge</option>
                  <option>Laptops, Desktops</option>
                  <option>Mobiles, Tablets</option>
                </optgroup>
                <optgroup label="Furniture">
                  <option>Accessories</option>
                  <option>Men</option>
                  <option>Women</option>
                </optgroup>
                <option value={3}>Home, Garden</option>
                <option value={3}>Kids, Baby</option>
                <option value={3}>Sport</option>
              </select>
            </div>
            <input
              type="text"
              className="search-form__input"
              placeholder="Enter your search..."
            />
            <button className="search-form__submit hover-scheme-2">
              <i className="fa fa-search" />
            </button>
          </form>
          {/* Search Form End */}
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex d-lg-none">
          {/* Main Mobile Menu Start */}
          <div className="mobile-menu" />
          {/* Main Mobile Menu End */}
        </div>
      </div>
    </div>
  </div>
  <div className="header-bottom header-1--bottom">
    <div className="container">
      <div className="row custom-row align-items-end">
        <div className="col-lg-3">
          {/* Category Nav Start */}
          <div className="category-nav">
            <h2
              className="category-nav__title bg-primary"
              id="js-cat-nav-title"
            >
              <i className="fa fa-bars" /> <span>Categories</span>
            </h2>
            <ul className="category-nav__menu" id="js-cat-nav">
              <li className="category-nav__menu__item has-children">
                <a href="shop.html">
                  <i className="fa fa-coffee" /> Fashion
                </a>
                <div className="category-nav__submenu">
                  <div className="category-nav__submenu--inner">
                    <ul>
                      <li>
                        <a href="shop.html">Health &amp; Beauties</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="category-nav__menu__item has-children">
                <a href="shop.html">
                  <i className="fa fa-lightbulb-o" /> Electronics
                </a>
                <div className="category-nav__submenu mega-menu three-column">
                  <div className="category-nav__submenu--inner">
                    <h3 className="category-nav__submenu__title">Television</h3>
                    <ul>
                      <li>
                        <a href="shop.html">LED TV</a>
                      </li>
                      <li>
                        <a href="shop.html">LCD TV</a>
                      </li>
                      <li>
                        <a href="shop.html">Curved TV</a>
                      </li>
                      <li>
                        <a href="shop.html">Plasma TV</a>
                      </li>
                    </ul>
                  </div>
                  <div className="category-nav__submenu--inner">
                    <h3 className="category-nav__submenu__title">
                      Refrigerator
                    </h3>
                    <ul>
                      <li>
                        <a href="shop.html">LG</a>
                      </li>
                      <li>
                        <a href="shop.html">Samsung</a>
                      </li>
                      <li>
                        <a href="shop.html">Toshiba</a>
                      </li>
                      <li>
                        <a href="shop.html">Panasonic</a>
                      </li>
                    </ul>
                  </div>
                  <div className="category-nav__submenu--inner">
                    <h3 className="category-nav__submenu__title">
                      Air Conditioners
                    </h3>
                    <ul>
                      <li>
                        <a href="shop.html">Samsung</a>
                      </li>
                      <li>
                        <a href="shop.html">Panasonic</a>
                      </li>
                      <li>
                        <a href="shop.html">Sanaky</a>
                      </li>
                      <li>
                        <a href="shop.html">Toshiba</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="category-nav__menu__item">
                <a href="shop.html">
                  <i className="fa fa-tree" /> Baby
                </a>
              </li>
              <li className="category-nav__menu__item has-children">
                <a href="shop.html">
                  <i className="fa fa-mobile" /> Mobile
                </a>
                <div className="category-nav__submenu">
                  <div className="category-nav__submenu--inner">
                    <ul>
                      <li>
                        <a href="shop.html">Apple</a>
                      </li>
                      <li>
                        <a href="shop.html">Samsung</a>
                      </li>
                      <li>
                        <a href="shop.html">Nokia</a>
                      </li>
                      <li>
                        <a href="shop.html">Walton</a>
                      </li>
                      <li>
                        <a href="shop.html">Sony</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="category-nav__menu__item">
                <a href="shop.html">
                  <i className="fa fa-shield" /> Furniture
                </a>
                <div className="category-nav__submenu">
                  <div className="category-nav__submenu--inner">
                    <ul>
                      <li>
                        <a href="shop.html">Apple</a>
                      </li>
                      <li>
                        <a href="shop.html">Samsung</a>
                      </li>
                      <li>
                        <a href="shop.html">LG</a>
                      </li>
                      <li>
                        <a href="shop.html">Sony</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="category-nav__menu__item">
                <a href="shop.html">
                  <i className="fa fa-plane" /> Sport
                </a>
              </li>
              <li className="category-nav__menu__item">
                <a href="shop.html">
                  <i className="fa fa-gift" /> Gift, Parties
                </a>
              </li>
              <li className="category-nav__menu__item">
                <a href="shop.html">
                  <i className="fa fa-cog" /> Accessories
                </a>
              </li>
              <li className="category-nav__menu__item hidden-lg-menu-item">
                <a href="shop.html">
                  <i className="fa fa-tv" /> Toshiba
                </a>
              </li>
              <li className="category-nav__menu__item hidden-lg-menu-item">
                <a href="shop.html">
                  <i className="fa fa-tv" /> Samsung
                </a>
              </li>
              <li className="category-nav__menu__item hidden-menu-item">
                <a href="shop.html">
                  <i className="fa fa-cube" /> Jewlery &amp; watches
                </a>
              </li>
              <li className="category-nav__menu__item">
                <a href="shop.html" className="js-expand-hidden-menu">
                  {" "}
                  More Categories
                </a>
              </li>
            </ul>
          </div>
          {/* Category Nav End */}
          <div className="category-mobile-menu" />
        </div>
        <div className="col-lg-8 col-md-10">
          <div className="corporate corporate--1">
            <div className="corporate__single">
              <div className="corporate__icon">
                <i className="fa fa-refresh" />
              </div>
              <div className="corporate__content">
                <h3 className="corporate__title">Free Return</h3>
                <p className="corporate__text">30 days money back guarantee!</p>
              </div>
            </div>
            <div className="corporate__single">
              <div className="corporate__icon">
                <i className="fa fa-paper-plane-o" />
              </div>
              <div className="corporate__content">
                <h3 className="corporate__title">FREE SHIPPING</h3>
                <p className="corporate__text">Free shipping on all order</p>
              </div>
            </div>
            <div className="corporate__single">
              <div className="corporate__icon">
                <i className="fa fa-support" />
              </div>
              <div className="corporate__content">
                <h3 className="corporate__title">SUPPORT 24/7</h3>
                <p className="corporate__text">We support online 24hrs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-md-2 align-self-start">
          {/* Header Cart Start */}
          <div className="mini-cart mini-cart--1">
            <a className="mini-cart__dropdown-toggle" id="cartDropdown">
              <i className="fa fa-shopping-bag mini-cart__icon" />
              <sub className="mini-cart__count">0</sub>
            </a>
            <div className="mini-cart__dropdown-menu">
              <div className="mini-cart__content">
                <div className="mini-cart__item">
                  <div className="mini-cart__item--single">
                    <div className="mini-cart__item--image">
                      <img
                        src="assets/img/products/electronics-4-150x167.jpg"
                        alt="product"
                      />
                    </div>
                    <div className="mini-cart__item--content">
                      <h4>
                        <a href="single-product.html">Odio tortor consequat</a>{" "}
                      </h4>
                      <p>Qty: 1</p>
                      <p>$100.00</p>
                    </div>
                    <a className="mini-cart__item--remove" href="">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                  <div className="mini-cart__item--single">
                    <div className="mini-cart__item--image">
                      <img
                        src="assets/img/products/furniture-6-150x167.jpg"
                        alt="product"
                      />
                    </div>
                    <div className="mini-cart__item--content">
                      <h4>
                        <a href="single-product.html">Integer eget augue</a>{" "}
                      </h4>
                      <p>Qty: 1</p>
                      <p>$100.00</p>
                    </div>
                    <a className="mini-cart__item--remove" href="">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                <div className="mini-cart__total">
                  <h4>
                    <span className="mini-cart__total--title">Subtotal</span>
                    <span className="mini-cart__total--ammount">$0.00</span>
                  </h4>
                </div>
                <div className="mini-cart__btn">
                  <a
                    href="cart.html"
                    className="btn btn-small btn-icon btn-style-1 color-1"
                  >
                    View Cart <i className="fa fa-angle-right" />
                  </a>
                  <a
                    href="checkout.html"
                    className="btn btn-small btn-icon btn-style-1 color-1"
                  >
                    Checkout <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Header Cart End */}
        </div>
      </div>
    </div>
  </div>
  {/* Sticky Header Start */}
  <div className="fixed-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          {/* Sticky Logo Start */}
          <a className="sticky-logo" href="index.html">
            <img src="assets/img/logo/logo-white.png" alt="logo" />
          </a>
          {/* Sticky Logo End */}
        </div>
        <div className="col-lg-9">
          {/* Sticky Mainmenu Start */}
          <nav className="sticky-navigation">
            <ul className="mainmenu sticky-menu">
              <li className="mainmenu__item active menu-item-has-children sticky-has-child">
                <a href="index.html" className="mainmenu__link">
                  Home
                </a>
                <ul className="sub-menu hidden-sub">
                  <li>
                    <a href="index.html">Home 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home 3</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home 4</a>
                  </li>
                  <li>
                    <a href="index-5.html">Home 5</a>
                  </li>
                  <li>
                    <a href="index-6.html">Home 6</a>
                  </li>
                  <li>
                    <a href="index-7.html">Home 7</a>
                  </li>
                  <li>
                    <a href="index-8.html">Home 8</a>
                  </li>
                </ul>
              </li>
              <li className="mainmenu__item menu-item-has-children sticky-has-child sticky-has-child">
                <a href="shop.html" className="mainmenu__link">
                  Shop
                </a>
                <ul className="sub-menu hidden-sub">
                  <li className="menu-item-has-children sticky-has-child">
                    <a href="shop.html">Shop Gird</a>
                    <ul className="sub-menu hidden-sub">
                      <li>
                        <a href="shop.html">Shop Left Sidebar</a>
                      </li>
                      <li>
                        <a href="shop-right-sidebar.html">Shop Right Sidebar</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth.html">Shop Full Width</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-4-column.html">Shop 4 Column</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children sticky-has-child">
                    <a href="shop-list.html">Shop List</a>
                    <ul className="sub-menu hidden-sub">
                      <li>
                        <a href="shop-list-left-sidebar.html">
                          Shop List Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list-right-sidebar.html">
                          Shop List Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list.html">Shop List Full Width</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children sticky-has-child">
                    <a href="single-product.html">Single Product</a>
                    <ul className="sub-menu hidden-sub">
                      <li>
                        <a href="single-product.html">Tab Style 1</a>
                      </li>
                      <li>
                        <a href="single-product-tab-style-2.html">
                          Tab Style 2
                        </a>
                      </li>
                      <li>
                        <a href="single-product-tab-style-3.html">
                          Tab Style 3
                        </a>
                      </li>
                      <li>
                        <a href="single-product-gallery-left.html">
                          Gallery Left
                        </a>
                      </li>
                      <li>
                        <a href="single-product-gallery-right.html">
                          Gallery Right
                        </a>
                      </li>
                      <li>
                        <a href="single-product-slider-box.html">Slider Box</a>
                      </li>
                      <li>
                        <a href="single-product-slider-full-width.html">
                          Slider Full Width
                        </a>
                      </li>
                      <li>
                        <a href="single-product-sticky-left.html">
                          Sticky Left
                        </a>
                      </li>
                      <li>
                        <a href="single-product-sticky-right.html">
                          Sticky Right
                        </a>
                      </li>
                      <li>
                        <a href="single-product-group.html">Group Product</a>
                      </li>
                      <li>
                        <a href="single-product-variable.html">
                          Variable Product
                        </a>
                      </li>
                      <li>
                        <a href="single-product-affiliate.html">
                          Affiliate Product
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="mainmenu__item">
                <a href="portfolio.html" className="mainmenu__link">
                  Portfolio
                </a>
              </li>
              <li className="mainmenu__item">
                <a href="blog.html" className="mainmenu__link">
                  Blog
                </a>
              </li>
              <li className="mainmenu__item menu-item-has-children sticky-has-child">
                <a href="#" className="mainmenu__link">
                  Features
                </a>
                <ul className="megamenu three-column hidden-sub">
                  <li>
                    <a href="#" className="megamenu__heading">
                      Pages
                    </a>
                    <ul className="hidden-sub">
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="about-us-2.html">About Us 2</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="contact-2.html">Contact 2</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="services-2.html">Services 2</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                      <li>
                        <a href="login-register.html">
                          Login &amp; Registration
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="megamenu__heading">
                      Blog
                    </a>
                    <ul className="hidden-sub">
                      <li>
                        <a href="blog.html">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-3-column.html">Blog 3 Column</a>
                      </li>
                      <li>
                        <a href="blog-4-column.html">Blog 4 Column</a>
                      </li>
                      <li>
                        <a href="single-blog-image.html">Image Format</a>
                      </li>
                      <li>
                        <a href="single-blog-gallery.html">Gallery Format</a>
                      </li>
                      <li>
                        <a href="single-blog-audio.html">Audio Format</a>
                      </li>
                      <li>
                        <a href="single-blog-video.html">Video Format</a>
                      </li>
                      <li>
                        <a href="single-blog-right-sidebar.html">
                          Right Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="megamenu__heading">
                      Shop
                    </a>
                    <ul className="hidden-sub">
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="compare.html">Compare</a>
                      </li>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="sticky-mobile-menu">
              <span className="sticky-menu-btn" />
            </div>
          </nav>
          {/* Sticky Mainmenu End */}
        </div>
      </div>
    </div>
  </div>
  {/* Sticky Header End */}
</header>

        </>
    );
}

export default Header;