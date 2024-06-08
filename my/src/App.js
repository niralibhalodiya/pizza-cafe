import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Footer1 from './Footer1';
import Header from './Header';
import Login from './Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './Signup';
import Product from './Product';
import Changepassword from './Changepassword';
import ProductDetails from './ProductDetails';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Payment from './Payment';
import Section from './Section';
import Orderdetails from './Orderdetails';
import Orderlist from './Orderlist';
import WishView from './WishView';
import Logout from './Logout';
import ThankYouPage from './ThankYouPage';
import Feedback from './Feedback';
import Add from './Add';
import Display from './Display';
import Edit from './Edit';
import Show from './Show';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Login"element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Footer1" element={<Footer1/>}></Route>
        <Route path="/Header" element={<Header/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Payment" element={<Payment/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Changepassword" element={<Changepassword/>}></Route>
        <Route path="/Section" element={<Section/>}></Route>
        <Route path="/Orderdetails" element={<Orderdetails/>}></Route>
        <Route path="/Orderlist" element={<Orderlist/>}></Route>
        <Route path="/Logout" element={<Logout/>}></Route>
        <Route path="/WishView" element={<WishView/>}></Route>
        <Route path="/ProductDetails/:id" element={<ProductDetails/>}></Route>
        <Route path="/ThankYouPage" element={<ThankYouPage/>}></Route>
        <Route path="/Feedback" element={<Feedback/>}></Route>
        <Route path="/Add" element={<Add/>}></Route>
        <Route path="/Display" element={<Display/>}></Route>
        <Route path="/Edit" element={<Edit/>}></Route>
        <Route path="/Show" element={<Show/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
