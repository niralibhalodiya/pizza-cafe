import Header from './Header';
import Footer1 from './Footer1';
import axios from "axios";
import {useNavigate} from "react-router-dom";
function About(){
  return(
    <>
    <div>

  <div className="pull-right toggle-right-sidebar">
    <span className="fa title-open-right-sidebar tooltipstered fa-angle-double-right" />
  </div>
  <div id="right-sidebar" className="right-sidebar-notifcations nav-collapse">
    <div className="bs-example bs-example-tabs right-sidebar-tab-notification" data-example-id="togglable-tabs">
      <div id="w3lDemoBar" className="w3l-demo-bar">
        <div className="demo-btns">
        </div>
        {/*-<div class="responsive-icons">
      <a href="#url" class="desktop-mode">
          <span class="w3l-icon -desktop">
              <span class="fa fa-desktop"></span>
          </span>
      </a>
      <a href="#url" class="tablet-mode">
          <span class="w3l-icon -tablet">
              <span class="fa fa-tablet"></span>
          </span>
      </a>
      <a href="#url" class="mobile-mode no-margin-bottom">
          <span class="w3l-icon -mobile">
              <span class="fa fa-mobile"></span>
          </span>
      </a>
  </div>*/}
      </div>
      <div className="right-sidebar-panel-content animated fadeInRight" tabIndex={5003} style={{overflow: 'hidden', outline: 'none'}}>
      </div>
    </div>
  </div>
  {/*/Header*/}
  <header id="site-header" className="fixed-top">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
        <h1><a className="navbar-brand pe-xl-5 pe-lg-4" href="index.html">
            <span className="w3yellow">pizza</span>studio
          </a></h1>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon fa icon-expand fa-bars" />
          <span className="navbar-toggler-icon fa icon-close fa-times" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about.html">About</a>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/Pizza" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pizza <span className="fa fa-angle-down ms-1" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item pt-2" href="Hot passion pizza.html"></a>Hot passion pizza</li>
                <li><a className="dropdown-item" href="paneer tikka pizza.html">paneertikkapizza</a></li>
                <li><a className="dropdown-item" href="peri peri veg pizza.html">Peri peri veg pizza</a></li>
                <li><a className="dropdown-item" href="burn to hell.html">Burn to hell</a></li>
                <li><a className="dropdown-item" href="garden delights.html">Garden delights</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact.html">Contact</a>
            </li>
            <li className="nav-item search-right">
              <a href="#search" className="btn search-btn" title="search"><span className="fas fa-search me-2" aria-hidden="true" /></a>
              {/* search popup */}
              <div id="search" className="pop-overlay">
                <div className="popup">
                  <h3 className="title-w3l two mb-4 text-left">Search Here</h3>
                  <form action="#" method="GET" className="search-box d-flex position-relative">
                    <input type="search" placeholder="Enter Keyword here" name="search" required="required" autofocus />
                    <button type="submit" className="btn"><span className="fas fa-search" aria-hidden="true" /></button>
                  </form>
                </div>
                <a className="close" href="#close">×</a>
              </div>
              {/* /search popup */}
            </li>
          </ul>
        </div>
        <ul className="header-search me-lg-4 d-flex">
          <li className="get-btn me-2">
            <a href="login.html" className="btn btn-style btn-primary" title="search"><i className="fas fa-user me-lg-2" /> <span className="btn-texe-inf">Login</span></a>
          </li>
          <li className="shopvcart galssescart2 cart cart box_1 get-btn">
            <form action="#" method="post" className="last">
              <input type="hidden" name="cmd" defaultValue="_cart" />
              <input type="hidden" name="display" defaultValue={1} />
              <button className="top_shopv_cart" type="submit" name="submit" value>
                <span className="fas fa-shopping-bag me-lg-2" /> <span className="btn-texe-inf">Cart</span>
              </button>
            </form>
          </li>
        </ul>
        {/* toggle switch for light and dark theme */}
        <div className="mobile-position">
          <nav className="navigation">
            <div className="theme-switch-wrapper">
              <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="mode-container">
                  <i className="gg-sun" />
                  <i className="gg-moon" />
                </div>
              </label>
            </div>
          </nav>
        </div>
        {/* //toggle switch for light and dark theme */}
      </nav>
    </div>
  </header>
  {/*//Header*/}
  <section className="w3mid-gap" />
  {/*/Banner-Start*/}
  {/*/inner-page*/}
  <div className="inner-banner py-5">
    <section className="w3l-breadcrumb text-left py-sm-5 ">
      <div className="container">
        <div className="w3breadcrumb-gids">
          <div className="w3breadcrumb-left text-left">
            <h2 className="inner-w3-title">
              About Us </h2>
          </div>
          <div className="w3breadcrumb-right">
            <ul className="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li className="active"><span className="fas fa-angle-double-right mx-2" /> About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/*//inner-page*/}
  <div style={{margin: '8px auto', display: 'block', textAlign: 'center'}}>
    {/*-728x90-*/}
  </div>
  {/*/bottom-3-grids*/}
  <div className="w3l-3-grids py-5" id="about-1">
    <div className="container py-md-5 py-2 pb-0">
      {/*/row-1*/}
      <div className="w3abin-top text-center">
        <div className="title-content">
          <h6 className="title-subw3hny mb-1">Our Info</h6>
          <h3 className="title-w3l">About Our pizzastudio</h3>
        </div>
        <p className="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
          ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
          elit ipsum dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non ipsum soluta perferendis veniam qui esse magnam commodi quisquam.</p>
        <a href="#" className="btn btn-style btn-primary mt-sm-5 mt-4">Read More<i className="fas fa-arrow-right ms-lg-3 ms-2" /></a>
      </div>
      {/*//row-1*/}
    </div>
  </div>
  {/*//bottom-3-grids*/}
  {/*/Counts-Section*/}
  
  {/*//Counts-Section*/}
  {/*/w3l-project*/}
 
  {/*//w3l-project*/}
  <div style={{margin: '8px auto', display: 'block', textAlign: 'center'}}>
    {/*-728x90-*/}
  </div>
  {/*/team*/}
  
            
  <div style={{margin: '8px auto', display: 'block', textAlign: 'center'}}>
    {/*-728x90-*/}
  </div>
  {/*/w3l-footer-29-main*/}
  <footer className="w3l-footer-29-main">
    <div className="footer-29 py-5">
      <div className="container py-lg-4">
        <h2>All Branded Pizza <br /></h2>
        <div className="row footer-top-29 mt-md-5">
          <div className="col-lg-3 col-md-6 footer-list-29 footer-3 pe-lg-5">
            <h6 className="footer-title-29">USeful Links</h6>
            <div className="footer-listw3-grids">
              <ul className="footer-listw3">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#news">News &amp; Media</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-list-29 footer-1 ps-lg-5 mt-lg-0 mt-md-5 mt-4">
            <h6 className="footer-title-29">Information</h6>
            <div className="footer-listw3-grids">
              <ul className="footer-listw3">
                <li><a href="#terms">Terms &amp; Conditions</a></li>
                <li><a href="#deivery">Delivery Terms</a></li>
                <li><a href="#order">Order Tracking</a></li>
                <li><a href="#returns">Returns Policy</a></li>
                <li><a href="#support">Privacy Policy</a></li>
                <li><a href="#shop">The Shop</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-list-29 footer-3 mt-lg-0 mt-md-5 mt-4 pe-lg-5">
            <h6 className="footer-title-29">Address</h6>
            <div className="footer-listw3-grids">
              <ul className="footer-listw3">
                <li>surat</li>
                <li>998 13h Street, Office 436</li>
                <li>Harlo 61466</li>
                <li><a href="tel:+(21) 255 999 8888">+(91) 255 999 8888</a></li>
                <li><a href="mailto:ShoppyKart@mail.com" className="mail">pizzastudio@mail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-list-29 footer-4 mt-lg-0 mt-md-5 mt-4  ps-lg-5">
            <h6 className="footer-title-29">Payment Method</h6>
            <ul className="pay-method-grids">
              <li><a className="pay-method" href="#"><span className="fab fa-cc-visa" aria-hidden="true" /></a>
              </li>
              <li><a className="pay-method" href="#"><span className="fab fa-cc-discover" aria-hidden="true" /></a>
              </li>
              <li><a className="pay-method" href="#"><span className="fab fa-cc-paypal" aria-hidden="true" /></a>
              </li>
              <li><a className="pay-method" href="#"><span className="fab fa-cc-mastercard" aria-hidden="true" /></a>
              </li><li><a className="pay-method" href="#"><span className="fab fa-cc-stripe" aria-hidden="true" /></a>
              </li><li><a className="pay-method" href="#"><span className="fab fa-cc-amex" aria-hidden="true" /></a>
              </li>
              <li><a className="pay-method" href="#"><span className="fab fa-cc-jcb" aria-hidden="true" /></a>
              </li>
              <li><a className="pay-method" href="#"><span className="cc-diners-club" aria-hidden="true" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row bottom-copies">
          <p className="copy-footer-29 col-lg-8">© 2024 pizzastudio. All rights reserved | Designed by <a href="https://w3layouts.com/" target="_blank"></a></p>
          <div className="col-lg-4 main-social-right mt-lg-0 mt-4">
            <div className="main-social-footer-29">
              <a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a>
              <a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
              <a href="#instagram" className="instagram"><span className="fab fa-instagram" /></a>
              <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* move top */}
    <button onclick="topFunction()" id="movetop" title="Go to top">
      <span className="fa fa-angle-up" />
    </button>
  </footer>
  </div>

    </>
    )
    }
    export default About;
  
