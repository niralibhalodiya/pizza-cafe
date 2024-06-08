import React from 'react'
import Header from './Header'
import Footer1 from './Footer1'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
export default function ProductDetails() {
    const[mydata,setData] = React.useState([])

const {id} = useParams();
const navigation = useNavigate();


    React.useEffect(()=>{     
      axios.get(`https://akashsir.in/myapi/atecom1/api/api-list-product.php?product_id=${id}`)
      .then(res=>{
          console.log(res.data.product_list);
          setData(res.data.product_list)
      })
  })


  
  const addtoCart = () =>{
    //API Call for AddtoCart


    var uid = localStorage.getItem("uid")

    if(!localStorage.getItem("uid"))
    {
      navigation('/LoginPage')
    }

    var pid = id;
    var qty = 1;

    var myformData = new FormData();
    myformData.append("user_id",uid)
    myformData.append("product_id",pid)
    myformData.append("product_qty",qty)
    axios.post("https://akashsir.in/myapi/atecom1/api/api-add-cart.php",myformData)
    .then(res=>{
      console.log(res.data);

      if(res.data.flag === "1")
      {
        navigation('/Cart');
        alert('Product Added into Cart')

      }else{
        alert(res.data.message);
      }
    })


  }
  const Addwish=()=>{
    var uid = localStorage.getItem("uid");
    if (!localStorage.getItem("uid")) {
      navigation("/Login");
    }
    var pid = id;

    var myformData = new FormData();
    myformData.append("user_id", uid);
    myformData.append("product_id", pid);

    axios
      .post(
        "https://akashsir.in/myapi/atecom1/api/api-add-wishlist.php",
        myformData
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.flag === "1") {
          alert("Product Added to Wishlist");
        } else {
          alert(res.data.message);
        }
      });
  ;

}

  return (
    <div>

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
              Single </h2>
          </div>
          <div className="w3breadcrumb-right">
            <ul className="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li className="active"><span className="fas fa-angle-double-right mx-2" /> Single Page</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/*//inner-page*/}
  {/*/w3l-ecommerce-main*/}
  <div style={{margin: '8px auto', display: 'block', textAlign: 'center'}}>
    {/*-728x90-*/}
  </div>
  <section className="w3l-ecommerce-main">
    {/* /products*/}
    {mydata.map((v,i)=>{
      return(
        
    <div className="ecom-contenthny w3l-ecommerce-main-inn py-5">
      <div className="container py-lg-5">
        {/*/row1*/}
        <div className="sp-store-single-page row">
          <div className="col-lg-5 single-right-left">
            <div className="flexslider1">
              <ul className="slides">
                <li data-thumb="assets/images/cart1.jpg">
               
                  <div className="thumb-image"> <img src={v.product_image} data-imagezoom="true" className="img-fluid radius-image" alt=" " /> </div>
                </li>
              </ul>
              <div className="clearfix" />
            </div>
            <div className="eco-buttons mt-5 d-flex">
              <div className="shopv single-item">
                <form action="#" method="post">
                  <input type="hidden" name="cmd" defaultValue="_cart" />
                  <input type="hidden" name="add" defaultValue={1} />
                  <input type="hidden" name="shopv_item" defaultValue="Cotton Flared Kurta" />
                  <input type="hidden" name="amount" defaultValue="599.99" />
                  <button  type="button" onClick={()=>addtoCart()} className="shopv-cart pshopv-cart add-to-cart btn btn-style btn-primary">
                    Add to Cart
                  </button>
                </form>
              </div>
              <div className="buyhny-now"> <button type='button' onClick={()=>Addwish()} className="btn btn-style btn-primary">Wish Add</button></div>
            </div>
          </div>
          
          <div className="col-lg-7 single-right-left ps-lg-5">
            <h3>{v.product_name} </h3>
            <div className="caption">
              <ul className="rating-single">
                <li>
                  <a href="#">
                    <span className="fa fa-star yellow-star" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-star yellow-star" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-star yellow-star" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-star-half-o yellow-star" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-star-half yellow-star" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <h6>
                <span className="item_price">₹{v.product_price}</span>
                <del>₹1,199</del> Free Delivery
              </h6>
            </div>
            <div className="desc_single my-4">
              <ul className="emi-views">
                <li><span>Special Price</span> Get extra 5% off (price inclusive of discount)</li>
                <li><span>Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
                <li><span>Bank Offer</span> 5% Cashback* on HDFC Bank Debit Cards</li>
                <li><span>Bank Offer</span> Extra 5% off* with Axis Bank Buzz Credit Card</li>
              </ul>
            </div>
            <div className="desc_single mb-4">
              <h5>Description:</h5>
              <p>{v.product_details}</p>
            </div>
            <div className="description-apt d-grid mb-4">
              <div className="occasional">
                <h5 className="sp_title mb-3">Highlights:</h5>
                <ul className="single_specific">
                  <li>
                    Neck : Collar Neck</li>
                  <li>
                    Fit : Slim</li>
                  <li> Sleeve : Full Sleeve
                  </li>
                  <li> Material : Pure Cutton</li>
                </ul>
              </div>
              <div className="color-quality">
                <h5 className="sp_title">Services:</h5>
                <ul className="single_serv">
                  <li>
                    <a href="#">30 Day Return Policy</a>
                  </li>
                  <li className="gap">
                    <a href="#">Cash on Delivery available</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="description mb-4">
              <h5>Check delivery, payment options and charges at your location</h5>
              <form action="#" className="d-flex" method="post">
                <input type="text" placeholder="Enter pincode" required />
                <button className="submit btn btn-style btn-primary ms-3" type="submit">Check</button>
              </form>
            </div>
          </div>

        </div>
      </div>
      
      {/*//row1*/}
      
    </div>
      )
      
    })}
  </section>
  {/*/w3l-ecommerce-main*/}
  {/* //products*/}
  {/* //products*/}
  <div style={{margin: '8px auto', display: 'block', textAlign: 'center'}}>
    {/*-728x90-*/}
    
  </div>
  <Footer1/>
</div>
    
  )
}
