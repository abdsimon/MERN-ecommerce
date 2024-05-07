// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Checkout";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";


const App = () => {
  return (
    <>
     <Header />
      <Routes>
      <Route path="/" element={<ProductList />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
