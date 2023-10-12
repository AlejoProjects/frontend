
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from "./nav";
import InformacionUsuario from './userInformation';
import { useAuth } from "./AuthContext";
import axios from "axios";

const TarjetaPersona = ({ info }) => {
  const [counter, setCounter] = useState(0);
  const [size, setSize] = useState(0);
  const [data,setData] = useState([]);
  const {user} = useAuth();
  let size = 0;
  /**Este efecto llama a cada persona mostrada en la carta */
 

/**Este efecto llama a todos los elementos de la columna personas para poder calcular la cantidad total de personas */
  useEffect(() => {
    const fetchPersonas = async () =>{
      try {
        const response = await axios.get('http://localhost:3000/api/v1/Personas', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const jsonData = response.data;
        setSize(jsonData.message.length);
      } catch (error) {
        console.log('Ocurrió un error en la consulta', error);
      }
    };
    fetchPersonas();
  },[user.token]);
  const fetchData = async () => {
    fetch(`http://localhost:3000/api/v1/Personas/?&id=${counter}`)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.message[counter]);
        console.log("data "+ data.calificacion);
      })
      .catch((error) => console.log("Ocurrió un error en la consulta"));
  }

  return (
    <>
    <NavMenu></NavMenu>
   
     <h1>{data.nombre_persona}</h1>
    <div className="card">
      <h3>{data.nombre_persona}&nbsp;{data.apellido_persona}</h3>
    <InformacionUsuario info={[data.nombre_persona,data.apellido_persona,data.locacion,data.precio_servicio,data.perfil,data.calificacion]}></InformacionUsuario>
    <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">
        <p><InformacionUsuario info={[data.nombre_persona,data.apellido_persona]}></InformacionUsuario> </p>
          </h5>
        <p className="card-text">Otros datos: </p>
        <p> {[data.precio_servicio]} </p>
        <p> {[data.calificacion]} </p>
      </div>
    </div>
    </>
  );//tengo un errorcito en assets/Captura lo dejo mientras veo bien lo del jwt

}

export default TarjetaPersona;
