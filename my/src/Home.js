
  import React from 'react';
  import Header from './Header';
  import Footer1 from './Footer1';
  import axios from 'axios';
  import { Navigate, useNavigate } from 'react-router-dom';
  function Home(){
    const addtocart=()=>{
      var uid=localStorage.getItem("uid");
      if(!localStorage.getItem('uid'))
      {
        Navigate('/Login');
      }
      var pid=pid;
      var qty=1;

      var myformData=new FormData();
      myformData.append("user_id",uid);
      myformData.append("product_id",pid);
      myformData.append("product_qty",qty);

      axios.post("https://akashsir.in/myapi/atecom1/api/api-add-cart.php",myformData)
      .then(res=>{
        console.log(res);
        if(res.data.flag === "1")
        {
          Navigate('./Cart');
          alert("product added successfully")
        }else{
          alert(res.data.message);
        }
      })
    }
  return(
      <>
  <div>
    <div className="pull-right toggle-right-sidebar">
      <span className="fa title-open-right-sidebar tooltipstered fa-angle-double-right" />
    </div>
    <div id="right-sidebar" className="right-sidebar-notifcations nav-collapse">
      <div className="bs-example bs-example-tabs right-sidebar-tab-notification" data-example-id="togglable-tabs">
        <div id="w3lDemoBar" className="w3l-demo-bar">
          
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
  </div>
  {/*/Header*/}
  <header id="site-header" className="fixed-top">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
        <h1><a className="navbar-brand pe-xl-5 pe-lg-4" href="index.html">
            <span className="w3yellow">Pizza</span>studio
          </a></h1>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon fa icon-expand fa-bars" />
          <span className="navbar-toggler-icon fa icon-close fa-times" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">About</a>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#Pages" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pizza <span className="fa fa-angle-down ms-1" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item pt-2" href="hot passion pizza.html">Hot passion pizza</a></li>
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
          {/*/search-right*/}
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
        {/*//search-right*/}
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
  <section className="w3mid-gap"></section>
  {/*/Banner-Start*/}
  {/*/main-slider */}
  <section className="w3l-main-slider banner-slider position-relative" id="home">
    <div className="owl-one owl-carousel owl-theme">
      <div className="item">
        <div className="slider-info banner-view banner-top1">
          <div className="container">
            <div className="banner-info header-hero-19">
              <h5></h5>
              <h3 className="title-hero-19">Flavour explossion</h3>
              <p></p>
              <a href="products.html" className="btn btn-style btn-primary mt-sm-5 mt-4">Order<i className="fas fa-arrow-right ms-lg-3 ms-2" ></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="slider-info banner-view banner-top2">
          <div className="container">
            <div className="banner-info header-hero-19">
              <h5></h5>
              <h3 className="title-hero-19">fun time taking enjoy</h3>
              <p></p>
              <a href="products.html" className="btn btn-style btn-primary mt-sm-5 mt-4">Order<i className="fas fa-arrow-right ms-lg-3 ms-2"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="slider-info banner-view banner-top3">
          <div className="container">
            <div className="banner-info header-hero-19">
              <h5></h5>
              <h3 className="title-hero-19">cooking enjoy recipe</h3>
              <p></p>
              <a href="products.html" className="btn btn-style btn-primary mt-sm-5 mt-4">Order<i className="fas fa-arrow-right ms-lg-3 ms-2"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="owl-stage-outer">
        <div className="slider-info banner-view banner-top4">
          <div className="container">
            <div className="banner-info header-hero-19">
              <h5></h5>
              <h3 className="title-hero-19">Pizza, we crust</h3>
              <p></p>
              <a href="products.html" className="btn btn-style btn-primary mt-sm-5 mt-4">order <i className="fas fa-arrow-right ms-lg-3 ms-2" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //main-slider */}
  {/* /Free-Ship*/}
  <section className="w3free-ship text-center py-md-5 py-4">
    <h2>Free Shipping For You Till Midnight <i className="fas fa-shipping-fast ms-lg-3" /></h2>
  </section>
  {/*//Free-Ship*/}
  {/*/bottom-3-grids*/}
  
  {/*//bottom-3-grids*/}
 
  {/*/w3l-ecommerce-main*/}
  <div style={{margin: '8px auto', display: 'block', textAlign: 'center'}}>
    {/*-728x90-*/}
  </div>
  <section className="w3l-ecommerce-main">
    {/* /products*/}
    <div className="ecom-contenthny py-5">
      <div className="container py-lg-5">
        <h3 className="title-w3l">Category</h3>
        {/* /row*/}
        <div className="ecom-products-grids row mt-lg-4 mt-3">
          <div className="col-lg-3 col-6 product-incfhny mt-4">
            <div className="product-grid2 shopv">
              <div className="product-image2">
                <a href="product-single.html">
                  <img className="pic-1 img-fluid radius-image" src="assets/images/shop-4.jpg" />
                  <img className="pic-2 img-fluid radius-image" src="assets/images/shop-4.jpg" />
                </a>
                <ul className="social">
                  <li><a href="#" data-tip="Quick View"><span className="fa fa-eye" /></a></li>
                  <li><a href="ecommerce.html" data-tip="Add to Cart"><span className="fa fa-shopping-bag" /></a>
                  </li>
                </ul>
                <div className="shopv single-item">
                  <form action="#" method="post">
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="shopv_item" defaultValue="Checkered Casual Shirt" />
                    <input type="hidden" name="amount" defaultValue="899.99" />
                    <button type="button" onClick={(e)=>addtocart()}className="shopv-cart pshopv-cart add-to-cart">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </div>
              <div className="product-content">
                <h3 className="title"><a href="product-single.html">paneertikkapizza </a></h3>
                <span className="price"><del></del></span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 product-incfhny mt-4">
            <div className="product-grid2">
              <div className="product-image2">
                <a href="product-single.html">
                  <img className="pic-1 img-fluid radius-image" src="assets/images/shop-5.jpg" />
                  <img className="pic-2 img-fluid radius-image" src="assets/images/shop-5.jpg" />
                </a>
                <ul className="social">
                  <li><a href="#" data-tip="Quick View"><span className="fa fa-eye" /></a></li>
                  <li><a href="ecommerce.html" data-tip="Add to Cart"><span className="fa fa-shopping-bag" /></a>
                  </li>
                </ul>
                <div className="shopv single-item">
                  <form action="#" method="post">
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="shopv_item" defaultValue="Cotton Flared Kurta" />
                    <input type="hidden" name="amount" defaultValue="599.99" />
                    <button type="button"onClick={(e)=>addtocart()} className="shopv-cart pshopv-cart add-to-cart">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </div>
              <div className="product-content">
                <h3 className="title"><a href="product-single.html">garden delights</a></h3>
                <span className="price"><del></del></span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 product-incfhny mt-4">
            <div className="product-grid2">
              <div className="product-image2">
                <a href="product-single.html">
                  <img className="pic-1 img-fluid radius-image" src="assets/images/shop-7.jpg" />
                  <img className="pic-2 img-fluid radius-image" src="assets/images/shop-7.jpg" />
                </a>
                <ul className="social">
                  <li><a href="#" data-tip="Quick View"><span className="fa fa-eye" /></a></li>
                  <li><a href="ecommerce.html" data-tip="Add to Cart"><span className="fa fa-shopping-bag" /></a>
                  </li>
                </ul>
                <div className="shopv single-item">
                  <form action="#" method="post">
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="shopv_item" defaultValue="Men Casual Shirt" />
                    <input type="hidden" name="amount" defaultValue="799.99" />
                    <button type="button"onClick={(e)=>addtocart()} className="shopv-cart pshopv-cart add-to-cart">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </div>
              <div className="product-content">
                <h3 className="title"><a href="product-single.html">Farm Vila pizza </a></h3>
                <span className="price"><del></del></span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 product-incfhny mt-4">
            <div className="product-grid2">
              <div className="product-image2">
                <a href="product-single.html">
                  <img className="pic-1 img-fluid radius-image" src="assets/images/shop-6.jpg" />
                  <img className="pic-2 img-fluid radius-image" src="assets/images/shop-6.jpg" />
                </a>
                <ul className="social">
                  <li><a href="#" data-tip="Quick View"><span className="fa fa-eye" /></a></li>
                  <li><a href="ecommerce.html" data-tip="Add to Cart"><span className="fa fa-shopping-bag" /></a>
                  </li>
                </ul>
                <div className="shopv single-item">
                  <form action="#" method="post">
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="shopv_item" defaultValue="Blend Straight Kurta" />
                    <input type="hidden" name="amount" defaultValue="399.99" />
                    <button type="button"onClick={(e)=>addtocart()} className="shopv-cart pshopv-cart add-to-cart">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </div>
              <div className="product-content">
                <h3 className="title"><a href="product-single.html">momo mazedar pizza </a></h3>
                <span className="price"><del></del></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //products*/}
  
  {/*//w3l-subscription-infhny*/}
  {/*/w3l-footer-29-main*/}
  <footer className="w3l-footer-29-main">
    <div className="footer-29 py-5">
      <div className="container py-lg-4">
        <h2> All Branded pizza<br /></h2>
        <div className="row footer-top-29 mt-md-5">
          <div className="col-lg-3 col-md-6 footer-list-29 footer-3 pe-lg-5">
            <h6 className="footer-title-29">USeful Links</h6>
            <div className="footer-listw3-grids">
              <ul className="footer-listw3">
                <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Contact">Contact</a></li>
                <li><a href="support">Support</a></li>
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
    </footer>
    <button onclick="topFunction()" id="movetop" title="Go to top">
      <span class="fa fa-angle-up"></span>
    </button>
    </>
    )
    }
    export default Home;
  
