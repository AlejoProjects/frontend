//import { useState } from 'react'
import NavMenu from "./nav";
import Entities from "./entities";
import "../css/services.css";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";
const ServiceCenter = () => {
  const url = 'http://localhost:3000/api/v1';
  useEffect(() => {
    fetchServices();
  }, [counter]);

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
/**La propuesta que tengo es crear una entidad por cada servicio encontrado. 
 * Haciendo un fetch desde aquí por cada elemento y mandandole como props la info del servicio.
 * Traemos los servicios y por un filtro solo utilizamos los que pertenezcan al que inicio la sesión poniendo al final del fetch user.table para hacer fetch a la base de datos persona o empresa
 * Luego almacenamos los id de los usuarios que deseamos llamar en el siguiente array **/
 /*  let informacionParaLlamar = [];
 let informacionParaUsar = [];
 Luego de esto necesitamos crear un fetch que llame a las personas/empresas en cuestion para obtener su nombre y el estado de su proceso
      haciendo un fetch asi
   try {
      const response = await axios.get(url+table, {
           headers: {
            Authorization: `Bearer ${user.token}`,
          },
          for(let i = 0;i < informacionParaLlamar.length;i++){
           const jsonData = response.data.message[i];
           informacionParaUsar.push(jsonData);
          }
        setServicios(jsonData);
        });
    };
    catch (error) {
        console.log('Ocurrió un error en la consulta ' + error.message);
      }
      y pues lo demás es lo que ya se explico:
 *  const fetchServices = async () => {
    try {
      const response = await axios.get(url+`/Servicios`, {
           headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const jsonData = response.data.message;
        setServicios(jsonData);
      } catch (error) {
        console.log('Ocurrió un error en la consulta ' + error.message);
      }
  
    };
    Se crean las entidades según el id 
    const createEntities = (usuario) => {
        for(let i = 0;i < servicios.length){
            if(usuario == user.id){
            informacionParaLlamar.push(usuario);
             };
        };
  
    };
    const  getServicios() => {
      let usuarioLlamado = '';
      switch(user.type){
      case 'user':
        usuarioLlamado = servicios.fk_empresaid;
      break;
      case 'empresa':
        usuarioLlamado = servicios[i].fk_personaid;

      break;
        }
    }
  }
 */
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
