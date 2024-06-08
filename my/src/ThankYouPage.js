import React from 'react';
import Header from './Header';
import Footer1 from './Footer1';

function ThankYouPage() {
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
                ThankYouPage</h2>
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
            <div style={styles.box}>
              <center>
                <h1 style={styles.title}>Thank you!</h1>
                <p style={styles.text}>Your order has been processed successfully.</p>
                <button style={styles.button}><a href="/Home" style={styles.link}>Back to Home</a></button>
                <a href='/OrderList' style={styles.viewOrderLink}><u>View order</u></a>
              </center>
            </div>
          </div>
        
      </section>
    </div>
    <Footer1 />
  </div>);
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f4f4f4',
  },
  box: {
    width: '400px',
    padding: '40px',
    background: '#fff',
    boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)',
    borderRadius: '10px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#555',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    marginRight: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  viewOrderLink: {
    color: '#007bff',
    textDecoration: 'none',
    marginLeft: '10px',
  },
};

export default ThankYouPage;