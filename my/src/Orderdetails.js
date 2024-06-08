import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Footer1 from './Footer1';

function Orderdetails() {
  const [mydata, setData] = React.useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    var uid = localStorage.getItem('uid');
    if (!localStorage.getItem('uid')) {
      navigate('/Login');
    }
    var oid = id;
    var myformData = new FormData();
    myformData.append("user_id", uid);
    myformData.append("order_id", oid);
    axios.post(`https://akashsir.in/myapi/atecom1/api/api-list-order-detail.php?product_id=${id}`, myformData)
      .then(res => {
        console.log(res.data.order_details);
        setData(res.data.order_details);
      })
      .catch(error => {
        console.error('Error fetching item list:', error);
      });
  }, []);

  const goToOrdersList = () => {
    navigate('/Orderlist');
  };

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
                  Orderdetails </h2>
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
        <div>
      <div style={styles.container}>
        <h2 style={styles.heading}>Order List</h2>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th>Product ID</th>
              <th>Product</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {mydata.map((v, i) => (
              <tr key={i} style={i % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td>{i + 1}</td>
                <td><img src={v.product_image} width={100} alt={v.product_name} /></td>
                <td>{v.product_name}</td>
                <td>₹{v.product_price}</td>
                <td>{v.product_qty}</td>
                <td>₹{v.sub_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={goToOrdersList} style={styles.button}>Go to Orders List</button>
      </div>
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
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Orderdetails;