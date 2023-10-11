import ServiceProviderSearch from './ServiceProviderSearch'; 
import { useState, useEffect } from "react";
import RouterIndex from "./routes/RouterIndex";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RouterIndex />
      <ServiceProviderSearch/>
    </BrowserRouter>
   
  );
}

export default App;
