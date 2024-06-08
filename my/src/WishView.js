import React from 'react'
import Header from './Header';
import Footer1 from './Footer1';
import axios from 'axios'
 function WishView() {
    const [mydata, setData] = React.useState([])
    React.useEffect(() => {
      var uid = localStorage.getItem('uid');
      if (!localStorage.getItem('uid')) {
      }
      var myformData = new FormData();
      myformData.append('user_id', uid);
      axios.post('https://akashsir.in/myapi/atecom1/api/api-list-wishlist.php', myformData)
        .then(res => {
          console.log(res.data.wishlist);
          setData(res.data.wishlist);
    })
    }, []);
    const Remove=()=>{
      var uid=localStorage.getItem('uid');
      if(!localStorage.getItem('uid')){
      }
      var myformData =new FormData();
      myformData.append("user_id",uid);
      axios.post("https://akashsir.in/myapi/atecom1/api/api-delete-wishlist.php",myformData)
      .then(res=>{
        console.log(res.data.wishlist);
        setData(res.data.wishlist);
      })
    }
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
                      Wishlist</h2>
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
            <div style={styles.container}>
            <h2 style={styles.heading}>Order List</h2>
            <table style={styles.table}>
              <thead>
                <tr style={styles.headerRow}>
                  <th> ID</th>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Remove </th>
                </tr>
              </thead>
              <tbody>
                {mydata.map((v, i) => {
                  return(<React.Fragment>
                  <tr key={i} style={i % 2 === 0 ? styles.evenRow : styles.oddRow}>
                    <td>{i + 1}</td>
                    <td><img src={v.product_image} width={100}/></td>
                    <td>{v.product_name}</td>
                    <td>{v.product_price}</td>
                    <td><button onClick={()=>Remove()} type='submit' value="Remove">Remove</button></td>  
                  </tr>
                  </React.Fragment>)
      })}
              </tbody>
            </table>
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
}  
export default WishView;