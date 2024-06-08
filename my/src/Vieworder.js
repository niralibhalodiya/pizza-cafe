import React from 'react';
import Header from './Header';
import Footer1 from './Footer1';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
function Vieworder(){
    const[mydta,setData]=React.useState([])

    const{id}=useParams();
    const navigation=useNavigate();
    var myformData =new FormData();
    myformData.append("Order_id","order_id");
    myformData.append("Order_date","Order_date");
    myformData.append("Order_status","Order_status");
    myformData.append("Shipping_address","Shipping_address");
    myformData.append("Payment_method","Payment_method");
    axios.post("https://akashsir.in/myapi/atecom1/api/vieworder-php",myformData)
    .then(res=>{
        console.log(res.data.order_id)
        setData(res.data.order_id)
    })
    
    const AddtoCart=()=>{
        var uid=localStorage.setItem("uid")
        if(!localStorage.getItem("uid"))
        {
            navigation("./Home")
        }
        var pid=id;
        var qty=1;

        var myformData=new FormData();
        myformData.append("user_id","user_id")
        myformData.append("product_id","product_id")
        myformData.append("product_qty","product_qty")
        axios.post("https://akashsir.in/myapi/atecom1/api/cart-php",myformData)
        .then(res=>{
            console.log(res.data)
            if(res.data.flag === "1")
            {
                navigation('./Cart')
                alert('product Added successfully');
            }else{
                alert(res.data.message)
            }
        })
    }
    const Addwish=()=>{
        var uid=localStorage.setItem("uid")
        if(!localStorage.setItem("uid"))
        {
            navigation('./Login')
        }
        var pid=id;

        myformData.append("product_id","product_id")
        myformData.append("order_id","order_id")
        axios.post("https://akashsir.in/myapi/atecom1/api/wishlist.php",myformData)
        .then(res=>{
            console.log(res.data)
            if(res.data.flag === "1")
            {
                navigation("/Home");
                alert('product are existsted');
            }else{
                alert(res.data.message)
            }
        })
    }
}
export default Vieworder;