import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ProfileCenter from "../Pages/ProfileCenter";
import ServiceCenter from "../Pages/ServiceCenter";
import Configuration from "../Pages/configuration";
import PrimeraPagina from "../Pages/PrimeraPagina";
const RouterIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<PrimeraPagina />} />
      <Route path="/home/:dbIdentifier" element={<Home/>} />
      <Route path="/user" element={<ProfileCenter />} />
      <Route path="/services" element={<ServiceCenter />} />
      <Route path='/configuration' element={<Configuration/>} />
    </Routes>
  );
};

export default RouterIndex;
