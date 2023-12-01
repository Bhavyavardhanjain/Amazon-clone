import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React,{useEffect} from 'react';
import Header from '../header/header';
import Home from '../home/home';
import Login from '../login/login';
import Checkout from "../checkout/checkout";
import Orders from "../orders/orders";
import Payment from "../payment/payment";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51O8GFmSG16eJomu8KJ6uljw0jarznNZyuofu7ItmX0vAa72M2nB66FAE5QMeamaay9drW1kQQZZcqS3QMyG5dgFQ00CUJCmacM")

function App() {
  
  const [{ basket, user }, dispatch] = useStateValue();
    useEffect(() => {
        // will only run once when the app component loads...
      
        auth.onAuthStateChanged((authUser) => {
          console.log("THE USER IS >>> ", authUser);
      
          if (authUser) {
            // the user just logged in / the user was logged in
      
            dispatch({
              type: "SET_USER",
              user: authUser,
            });
          } else {
            // the user is logged out
            dispatch({
              type: "SET_USER",
              user: null,
            });
          }
        });
      }, []);


  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/checkout" element={
            <React.Fragment>
              <Header/>
              <Checkout/>
            </React.Fragment>} />

            <Route path="/orders" element={
            <React.Fragment>
              <Header/>
              <Orders/>
            </React.Fragment>} />

          <Route path="/login" element={
            <React.Fragment>
              <Login/>
            </React.Fragment>} />

          <Route path="/payment" element={
            <React.Fragment>
              <Header/>
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
              
            </React.Fragment>} />

          <Route path="/" element={
            <React.Fragment>
              <Header/>
              <Home/>
            </React.Fragment>} />
          
        </Routes>
      </Router>
    </div>
  );

  
}


export default App;