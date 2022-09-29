import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MobileMenu from "./components/MobileMenu";
import PhotoSwipe from "./components/PhotoSwipe";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import EditProfile from "./pages/EditProfile";
import OrderHistory from "./pages/OrderHistory";
import OrderDetails from "./pages/OrderDetails";
import PageNotFound from "./pages/PageNotFound";
import ContactUs from "./pages/ContactUs"
import Deliveryinfo from "./pages/DeliveryInfo";
import Privecy from "./pages/Privecy"
import WishList from "./pages/WishList"
import Gift from "./pages/Gift"
import Affilate from "./pages/Affilate"
import NewsLetter from "./pages/NewsLetter"
import Brand from "./pages/Brand"
import Storelocation from "./pages/StoreLocation"

const App = () => {
  return (
    <>
      <div className="site">
        <Header />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login-signup" element={<LoginSignUp />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/DelivaryInfo" element={<Deliveryinfo />} />
          <Route path="/Privecy" element={<Privecy />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/Gift" element={<Gift />} />
          <Route path="/Affilate" element={<Affilate />} />
          <Route path="/NewsLetter" element={<NewsLetter />} />
          <Route path="/Brand" element={<Brand />} />
          <Route path="/StoreLocation" element={<Storelocation />} />
        </Routes>
        <Footer />
        <MobileMenu />
        <PhotoSwipe />
        <ToastContainer/>
      </div>
    </>
  );
};

export default App;
