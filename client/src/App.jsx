import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Checkout";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
     <Header />
      <Routes>
        
        <Route path="/" element={< />} />
        <Route path="/" element={</>} />
        <Route path="/" element={</>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
