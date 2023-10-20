//import { useState } from 'react'
import NavMenu from "./nav";
import Entities from "./entities";
import "../css/services.css";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
const ServiceCenter = () => {
  const url = 'http://localhost:3000/api/v1';
  const { user } = useAuth();
  const [servicios,setServicios] = useState([]);
  const [UsuariosPorMostrar,setUsuariosPorMostrar] = useState([]);
  useEffect(() => {
    fetchServices();
  }, [counter]);

const fetchServices = async () => {
    try {
      const response = await axios.get(url+`/Servicios`);
      const jsonData = response.data.message;
      setServicios(jsonData);
    } catch (error) {
      console.log('Ocurrió un error en la consulta ' + error.message);
    };

  };

  const createEntities = (usuario) => {
        let informacion = [];
        for(let i = 0;i < servicios.length;i++){
            if(usuario == user.id){
            informacion.push(servicios[usuario]);
             };
             return informacion;
        };
    };
  const  getServicios = () => {
      let usuarioLlamado = '';
      switch(user.type){
      case 'user':
           usuarioLlamado = servicios.id_persona;          
      break;
      case 'empresa':
        usuarioLlamado = servicios.id_empresa;
      break;
        };
      setUsuariosPorMostrar(createEntities(usuarioLlamado));
    };
  const mostrarServicios = () => {
    getServicios();
    return UsuariosPorMostrar.map((usuario, index) => (
      <Entities key={index} datos={usuario} />
    ));
  }
 
  return (
    <>
      <NavMenu></NavMenu>
      <div className="box" id="service_container">
        <div id="entities">
        {mostrarServicios()}
        </div>
      </div>
    </>
  );
};

export default ServiceCenter;
