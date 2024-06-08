import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <>
        <div>
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
              <a className="nav-link" href="/about.html">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#Pages" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pizza<span className="fa fa-angle-down ms-1" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item pt-2" href="hot passion.html">Hot passion pizza</a></li>
                <li><a className="dropdown-item" href="peri peri veg pizza.html">peri peri veg pizza</a></li>
                <li><a className="dropdown-item" href="paneer tikka.html">paneer tikkapizza</a></li>
                <li><a className="dropdown-item" href="burn to hell.html">burn to hell</a></li>
                <li><a className="dropdown-item" href="garden delights.html">garden delighys</a></li>
              </ul>
            </li>
            <li className="nav-item">
              
              <Link className='nav-link' to='/Product'>Product</Link>
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
  </div>
        </>
    )
}
export default Header;
