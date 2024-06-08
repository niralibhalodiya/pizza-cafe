import React from 'react'
import Header from './Header'
import Footer1 from './Footer1'
import axios from 'axios'
import { Link } from 'react-router-dom'
 function Product() {
  const[mydata,setData] = React.useState([])
  React.useEffect(()=>{
      axios.get('https://akashsir.in/myapi/atecom1/api/api-list-product.php?project_id=6')
      .then(res=>{
          console.log(res.data.product_list);
          setData(res.data.product_list)
      })  
  },[])
  
  return (
<div>
  {/*/Header*/}
  <Header/>
  <section className="w3mid-gap" />
  {/*/Banner-Start*/}
  {/*/inner-page*/}
  <div className="inner-banner py-5">
    <section className="w3l-breadcrumb text-left py-sm-5 ">
      <div className="container">
        <div className="w3breadcrumb-gids">
          <div className="w3breadcrumb-left text-left">
            <h2 className="inner-w3-title">
              Products </h2>
          </div>
          <div className="w3breadcrumb-right">
            <ul className="breadcrumbs-custom-path">
              <li><a href="/Home">Home</a></li>
              <li className="active"><span className="fas fa-angle-double-right mx-2" /> Products </li>
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
  {/*/w3l-ecommerce-main*/}
  <section className="w3l-ecommerce-main">
    {/* /products*/}
    <div className="ecom-contenthny w3l-ecommerce-main-inn py-5">
      <div className="container py-lg-5">
        <div className="ecommerce-grids row">
          <div className="ecommerce-left-hny col-lg-4">
            {/*/ecommerce-left-hny*/}
            <aside className="pe-lg-4">
              <div className="sider-bar">
                {/* /Gallery-imgs */}
                <div className="single-gd mb-5">
                  <h4>Product Categories</h4>
                  <ul className="list-group single">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Schewan magherita
                      <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      garden delights
                      <span className="badge badge-primary badge-pill">18</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      burn to hell
                      <span className="badge badge-primary badge-pill">12</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      momo mazedar 
                      <span className="badge badge-primary badge-pill">10</span>
                    </li>
                  </ul>
                </div>
                <div className="single-gd mb-5">
                  <h4>Filter by Price</h4>
                  <ul className="dropdown-vjm-transitu6">
                    <li>
                      <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                        <div className="ui-slider-range ui-widget-header" style={{left: '0.555556%', width: '18.5556%'}} /><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: '0.555556%'}} /><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: '66.6667%'}} />
                        <div className="ui-slider-range ui-widget-header" style={{left: '0.555556%', width: '66.1111%'}} />
                      </div>
                      <input type="text" id="amount" style={{border: 0, color: '#ffffff', fontWeight: 'normal'}} />
                    </li>
                  </ul>
                  {/*//Gallery-imgs*/}
                </div>
                
                <div className="single-gd left-side mb-5">
                  <h4>Customer Ratings</h4>
                  <ul className="ratingshyny">
                    <li>
                      <a href="#">
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star" aria-hidden="true" />
                        <span>5.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star-half-alt" aria-hidden="true" />
                        <span>4.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star-half-o" aria-hidden="true" />
                        <span className="fas fa-star-half-alt" aria-hidden="true" />
                        <span>3.5</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star-half-alt" aria-hidden="true" />
                        <span className="fas fa-star-half-alt" aria-hidden="true" />
                        <span>3.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star" aria-hidden="true" />
                        <span className="fas fa-star-half-alt" aria-hidden="true" />
                        <span className="fas fa-star-half-alt" aria-hidden="true" />
                        <span className="fas fa-star-half-alt" aria-hidden="true" />
                        <span>2.5</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="single-gd mb-5 border-0">
                  <h4>Recent Products</h4>
                  <div className="row special-sec1 mt-4">
                    <div className="col-4 img-deals">
                      <a href="product-single.html"><img src="assets/images/shop-8.jpg" className="img-fluid radius-image" alt /></a>
                    </div>
                    <div className="col-8 img-deal1">
                      <h5 className="post-title">
                        <a href="product-single.html">Schewan magherita</a>
                      </h5>
                      <a href="product-single.html" className="price-right">499.00</a>
                    </div>
                  </div>
                  <div className="row special-sec1 mt-4">
                    <div className="col-4 img-deals">
                      <a href="product-single.html"><img src="assets/images/shop-7.jpg" className="img-fluid radius-image" alt /></a>
                    </div>
                    <div className="col-8 img-deal1">
                      <h5 className="post-title">
                        <a href="product-single.html">garden delights</a>
                      </h5>
                      <a href="product-single.html" className="price-right">575.00</a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            {/*//ecommerce-left-hny*/}
          </div>
          {/* /row*/}
          <div className="ecommerce-right-hny col-lg-8">
            <div className="row ecomhny-topbar">
              <div className="col-6 ecomhny-result">
                <h4 className="ecomhny-result-count"> Showing all Results</h4>
              </div>
              <div className="col-6 ecomhny-topbar-ordering">
                <div className="ecom-ordering-select d-flex">
                </div>
              </div>
            </div>
            <div className='container'>
            <div className='row'>
            {mydata.map((v,i)=>{
              var nav = "/ProductDetails/"+v.product_id;
              return(
             <div className="col-lg-4 col-6 product-incfhny mt-4">
        <div className="product-grid2">
          <div className="product-image2">
              <Link to = {nav}>
              <img className="pic-1 img-fluid radius-image" src={v.product_image} />
              <img className="pic-2 img-fluid radius-image" src= {v.product_image}/>
              </Link>
              <ul className="social">
              <Link to = {nav}>
              <li><a href="/ProductDetails" data-tip="Quick View"><span className="fa fa-eye" /></a></li>
              <li><a href="/Cart" data-tip="Add to Cart"><span className="fa fa-shopping-bag" /></a>
              </li>
              </Link>
            </ul>
            <div className="shopv single-item">
              <form action="#" method="post">
                <input type="hidden" name="cmd" defaultValue="_cart" />
                <input type="hidden" name="add" defaultValue={1} />
                <input type="hidden" name="shopv_item" defaultValue="Dark Blue Top" />
                <input type="hidden" name="amount" defaultValue="599.99" />
              </form>
            </div>
          </div>
          <div className="product-content">
            <h3 className="title"><a href="/ProductDetails">{v.product_name} </a></h3>
            <span className="price"><del>₹{v.product_price}</del>₹{v.product_price}</span>
          </div>
        </div>
      </div>
              )
            })}
            </div>
            </div> 
            <div className="pagination">  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //products*/}
  <div style={{margin: '8px auto', display: 'block', textAlign: 'center'}}>
    {/*-728x90-*/}
  </div>
  {/*/w3l-footer-29-main*/}
  <Footer1/>
</div>
  )
}
export default Product;