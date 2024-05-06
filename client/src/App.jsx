import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Checkout";
import 


const App = () => {
  return (
    <>
     
      <Routes>
        <Header />
        <Route path="/" element={< />} />
        <Route path="/" element={</>} />
        <Route path="/" element={</>} />
      </Routes>
    </>
  );
};

export default App;
