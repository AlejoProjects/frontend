
import { useState, useEffect } from "react";
import RouterIndex from "./routes/RouterIndex";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RouterIndex />
    </BrowserRouter>
  );
}

export default App;
