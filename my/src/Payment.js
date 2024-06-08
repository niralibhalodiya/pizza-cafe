import React from 'react'
import Footer1 from './Footer1'
import Header from './Header'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

 function Payment() {

    const [name, setName] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [payment, setPayment] = React.useState("");
    const navigate = useNavigate();
  
    var uid = localStorage.getItem("uid")

    const Payment = () =>{
        var myformData = new FormData();
        myformData.append("user_id",uid)
        myformData.append("shipping_name",name)
        myformData.append("shipping_mobile",mobile)
        myformData.append("shipping_address",address)
        myformData.append("payment_method","COD")
        
        axios.post('https://akashsir.in/myapi/atecom1/api/api-add-order.php',myformData)
        .then(res=>{
            console.log(res.data);
            if(res.data.flag === "1")
            {
               navigate('/ThankYouPage');
               
            }else{
                alert("Faild")
            } 
        })  
        .catch(error => {
          console.error("Error occurred during payment:", error);
      });
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
              Payment </h2>
          </div>
          <div className="controls">
          <ul className="breadcrumbs-custom-path">
          <li><a href="/Home">Home</a></li>
              <li className="active"><span className="fas fa-angle-double-right mx-2" /> Payment </li>
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
    <div className="ecom-contenthny py-5">
      <div className="container py-lg-5">
        {/* about */}
        <div className="ecom-contenthny-w3lcheckout privacy">
          {/* payment */}
          <h3>Payment</h3>
          <div className="checkout-right mt-4">
            {/*Horizontal Tab*/}
            <div id="parentHorizontalTab">
              
              <div className="resp-tabs-container hor_1">
              <div>
              <div className="vertical_post check_box_agile pb-lg-5 pb-4">
                    
                  </div>
                </div>
                <div>
                  <form onSubmit={(e)=>{e.preventDefault()}} method="post" className="creditly-card-form agileinfo_form information-wrapper">
                    <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                      <div className="credit-card-wrapper">
                        <div className="first-row form-group">
                          <div className="controls">
                            <label className="control-label"> Name </label>
                            <input className="billing-address-name form-control" onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder='Enter your name'/>
                          </div>
                          <div className="w3_agileits_card_number_grids">
                            <div className="w3_agileits_card_number_grid_left">
                              <div className="controls">
                                <label className="control-label"> Mobile</label>
                                <input className="number credit-card-number form-control" onChange={(e) => setMobile(e.target.value)} type="text" name="number" inputMode="numeric" autoComplete="cc-number" autocompletetype="cc-number" x-autocompletetype="cc-number" placeholder='Enter your mobile number' />
                              </div>
                            </div>
                            <div className="w3_agileits_card_number_grid_right">
                            <div className="controls">
                            <label className="control-label">Address</label>
                                <input className="security-code form-control" Â· inputMode="numeric" onChange={(e) => setAddress(e.target.value)} type="text" name="security-code" placeholder='Enter your address' />
                              </div>
                            </div>
                            <div className="clear"> </div>
                          </div>
                          <div className="controls">
                          <label for="payment">Select Payment method</label>
                          <select onChange={(e)=>setPayment(e.target.value)} name="Select Payment Method.." id="payment">
                            <option value="COD" >COD</option>
                            <option value="ONLINE">ONLINE</option>
                          </select>
                          </div>
                        </div>
                        <button className="submit btn btn-style btn-primary mt-4" onClick={()=>Payment()}>Make a payment</button>
                      </div>
                    </section>
                  </form>
                </div>
                <div>
                <div className="vertical_post">   
                </div>
                </div>
                <div>
                  <div id="tab4" className="tab-grid" style={{display: 'block'}}>
                  <div className="row">    
                  <div className="col-md-6">    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Plug-in Initialisation*/}
            {/* // Pay */}
          </div>
        </div>
      </div>
      {/* //payment */}
    </div>
  </section>
  {/* //products*/}
  <div style={{margin: '8px auto', display: 'block', textAlign: 'center'}}>
    {/*-728x90-*/}
  </div>
  <Footer1/>
</div>

  )
}
export default Payment;