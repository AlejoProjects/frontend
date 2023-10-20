//import { useState } from 'react'
import NavMenu from "./nav";
import Entities from "./Entidad";
import "../css/services.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
const ServiceCenter = () => {
  const url = "http://localhost:3000/api/v1";
  const { user } = useAuth();
  const [servicios, setServicios] = useState([]);
  const tipo = user.type;

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios
        .get(url + `/Servicios`)
        .then((response) => {
          const jsonData = response.data.message;
          setServicios(jsonData);

        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.log("Ocurrió un error en la consulta " + error.message);
    }
  };
  const createEntities = (usuario) => {
    let informacion = [];
    console.log(usuario);
    switch (usuario) {
      case 'user':
        for (let i = 0; i < servicios.length; i++) {
          if (servicios[i].id_persona == user.id) {
            informacion.push(servicios[i]);
          }
        }
        break;
      case 'empresa':
        for (let i = 0; i < servicios.length; i++) {
          if (servicios[i].id == user.id) {
            informacion.push(servicios[i]);
          }
        }
    
        break;
    }
    return(informacion);
    
  };
  const mostrarServicios = () => {
    const usuariosPorMostrar = createEntities(tipo);
  
    return usuariosPorMostrar.map((usuario, index) => (

      <Entities  key={index} datos={usuario} cual={tipo} />
    ));
  };

  return (
    <>
      <NavMenu></NavMenu>
      <div className="box" id="service_container">
        <div id="entities">{mostrarServicios()}</div>
      </div>
    </>
  );
};

export default ServiceCenter;
