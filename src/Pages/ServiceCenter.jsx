//import { useState } from 'react'
import NavMenu from "./nav.jsx";
import Entities from "./entities";
import "../css/services.css";
import { useEffect } from "react";
const ServiceCenter = () => {
  const url = 'http://localhost:3000/api/v1';
  useEffect(() => {
    fetchServices();
  });

  const fetchServices = async () => {
    try {
      const response = await axios.get(url+`/Servicios`, {
        /**   headers: {
            Authorization: `Bearer ${user.token}`,
          },*/
      });
      const jsonData = response.data.message[id];
      setServicios(jsonData);
    } catch (error) {
      console.log('Ocurrió un error en la consulta ' + error.message);
    }

  };

  return (
    <>
      <NavMenu></NavMenu>
      <div className="box" id="service_container">
        <div id="entities">
          <Entities></Entities>
          <Entities></Entities>
          <Entities></Entities>
        </div>
      </div>
    </>
  );
};

export default ServiceCenter;
