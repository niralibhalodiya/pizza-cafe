import React from 'react';
import Header from './Header';
import Footer1 from './Footer1';
import {useNavigate} from 'react-router-dom';
function Section(){
    return(
        <>
<section className="w3mid-gap" />
  {/*/Banner-Start*/}
  {/*/main-slider */}
  <section className="w3l-main-slider banner-slider position-relative" id="home">
    <div className="owl-one owl-carousel owl-theme">
      <div className="item">
        <div className="slider-info banner-view banner-top1">
          <div className="container">
            <div className="banner-info header-hero-19">
              <h5></h5>
              <h3 className="title-hero-19">fun time taking enjoy</h3>
              <p></p>
              <a href="products.html" className="btn btn-style btn-primary mt-sm-5 mt-4">order<i className="fas fa-arrow-right ms-lg-3 ms-2" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="slider-info banner-view banner-top2">
          <div className="container">
            <div className="banner-info header-hero-19">
              <h5></h5>
              <h3 className="title-hero-19">Flavour explossion</h3>
              <p></p>
              <a href="products.html" className="btn btn-style btn-primary mt-sm-5 mt-4">order<i className="fas fa-arrow-right ms-lg-3 ms-2" /></a>
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
              <a href="products.html" className="btn btn-style btn-primary mt-sm-5 mt-4">order<i className="fas fa-arrow-right ms-lg-3 ms-2" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="slider-info banner-view banner-top4">
          <div className="container">
            <div className="banner-info header-hero-19">
              <h5></h5>
              <h3 className="title-hero-19">Pizza, we crust</h3>
              <p></p>
              <a href="products.html" className="btn btn-style btn-primary mt-sm-5 mt-4">order<i className="fas fa-arrow-right ms-lg-3 ms-2" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  
        </>
    )
}
export default Section;