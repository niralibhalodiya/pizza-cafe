import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Footer1 from './Footer1';
import Header from './Header';

function Orderlist() {
    
  const [mydata, setData] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    var uid = localStorage.getItem('uid');
    if (!localStorage.getItem('uid')) {
      navigate('/Login');
    }
    var myformData = new FormData();
    myformData.append('user_id', uid);
    axios.post('https://akashsir.in/myapi/atecom1/api/api-list-order.php', myformData)
      .then(res => {
        console.log(res.data.order_list);
        setData(res.data.order_list);
      })
      .catch(error => {
        console.error('Error fetching item list:', error);
      });
  }, []);

  return (<div>
    <Header />
    <section class="w3mid-gap"></section>
    <div>
      {/*/Banner-Start*/}
      {/*/inner-page*/}
      <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5 ">
          <div className="container">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="inner-w3-title">
                  OrderList </h2>
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
      {/*//inner-page*/}
      {/*/w3l-ecommerce-main*/}
      <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>
        {/*-728x90-*/}
      </div>
      <section className="w3l-ecommerce-main">
        {/* /products*/}
        <div style={styles.container}>
      <h2 style={styles.heading}>Order List</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Order Status</th>
            <th>Total Amount</th>
            <th>Shipping Name</th>
            <th>Payment Method</th>
            <th>View Order</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((v, i) => {
                    var nav = "/Orderdetails/"+v.order_id;

            return(<React.Fragment>
            <tr key={i} style={i % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td>{i + 1}</td>
              <td>{v.order_date}</td>
              <td>{v.order_status}</td>
              <td>{v.total_amount}</td>
              <td>{v.shipping_name}</td>
              <td>{v.payment_method}</td>
              <Link to = {nav}>
       <td><a href='/view details' style={styles.viewLink}><u>View Details</u></a></td>
       </Link>
            </tr>
            </React.Fragment>)
})}
        </tbody>
      </table>
 
    </div>
      </section>
    </div>
    <Footer1 />
  </div>);
}

const styles = {
  container: {
    maxWidth: '90%',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  headerRow: {
    backgroundColor: '#f8f9fa',
    color: '#333',
    textTransform: 'uppercase',
  },
  evenRow: {
    backgroundColor: '#f3f4f6',
  },
  oddRow: {
    backgroundColor: '#fff',
  },
  viewLink: {
    color: '#007bff',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default Orderlist;