import axios from "axios";
import Footer1 from "./Footer1";
import Header from "./Header";
import React from 'react'
import { useNavigate } from "react-router-dom";


function Cart() {
  const [mydata, setData] = React.useState([])
  const navigation = useNavigate();
  React.useEffect(() => {
    var uid = localStorage.getItem("uid")
    if (!localStorage.getItem("uid")) {
      navigation('/LoginPage')
    }
    var myformData = new FormData();
    myformData.append("user_id", uid)
    axios.post('https://akashsir.in/myapi/atecom1/api/api-list-cart.php', myformData)
      .then(res => {
        console.log(res.data);
        setData(res.data.cart_list)
      })
  }, [])
  return (<>
    <Header />
    <section class="w3mid-gap"></section>
    <div>
      
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
                  <li><a href="index.html">Home</a></li>
                  <li className="active"><span className="fas fa-angle-double-right mx-2" /> Products </li>
                </ul>
              </div>
            </div>
          </div>
        </section>  
      </div>
      
      <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>
        
      </div>
      <section className="w3l-ecommerce-main">
       
        <div className="ecom-contenthny py-5">
          <div className="container py-lg-5">
           
                <div className="ecom-contenthny-w3lcheckout privacy">
                  <h3>Chec<span>kout</span></h3>
                  <div className="checkout-right">
                    <p className="mb-5">Your shopping cart contains: <span></span></p>
                    <table className="timetable_sub">
                      <thead>
                        <tr>
                          <th>SL.</th>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                      {mydata.map((v, i) => {
                        return (<React.Fragment>
                        <tr className="rem1">
                          <td className="invert">{i + 1}</td>
                          <td className="invert-image"><a href={v.pr}>
                            <img src={v.product_image} className="img-fluid radius-image" alt /></a></td>
                          <td className="invert">
                            <div className="quantity">
                              <div className="quantity-select">
                                <div className="entry value-minus">&nbsp;</div>
                                <div className="entry value"><span>{v.product_qty}</span></div>
                                <div className="entry value-plus active">&nbsp;</div>
                              </div>
                            </div>
                          </td>
                          <td className="invert">{v.product_name}</td>
                          <td className="invert">₹{v.product_price}</td>
                          <td className="invert">
                            <div className="rem">
                              <div className="close1"><i className="far fa-window-close" /> </div>
                            </div>
                          </td>
                        </tr>
                        </React.Fragment>)
                      })}
                      </tbody>
                    </table>
                  </div>
                  <div className="row checkout-left mt-5">
                    <div className="col-md-8 address_form_agile ps-lg-5">                     
                      <div className="checkout-right-basket">
                        <a className="btn btn-style btn-primary" href="/Payment">Make a Payment <i className="fas fa-arrow-right ms-lg-3 ms-2" /></a>
                      </div>
                    </div>
                  </div>
                </div> 
          </div>
        </div>
      </section>
    </div>
    <Footer1 />
  </>
  );
}

export default Cart;