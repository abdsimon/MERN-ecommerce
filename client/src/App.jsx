// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Checkout";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {
  return (
    <>
     <Header />
      <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
