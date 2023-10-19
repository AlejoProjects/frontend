import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ProfileCenter from "../Pages/ProfileCenter";
import ServiceCenter from "../Pages/ServiceCenter";
import Configuration from "../Pages/ShowDatos";
import NewUserForm from "../Pages/createNewUser";

const RouterIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/user" element={<ProfileCenter />} />
      <Route path="/services" element={<ServiceCenter />} />
      <Route path='/configuration' element={<Configuration/>} />
      <Route path="/createNewUser" element={<NewUserForm/>} />
     
    </Routes>
  );
};

export default RouterIndex;
