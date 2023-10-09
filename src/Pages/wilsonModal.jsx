
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from "./nav";
import InformacionUsuario from './userInformation';


const TarjetaPersona = ({ info }) => {
  const [counter, setCounter] = useState(0);
  const [data,setData] = useState([]);
  let size = 0;
  /**Este efecto llama a cada persona mostrada en la carta */
  useEffect(() => {
      fetchData();
  }, [counter]);

/**Este efecto llama a todos los elementos de la columna personas para poder calcular la cantidad total de personas */
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/Personas/`)
      .then((response) => response.json())
      .then((jsonData) => {
        size = jsonData.message.length;
      })
      .catch((error) => console.log("Ocurrió un error en la consulta"));
  });
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
    <InformacionUsuario info={[data.nombre_persona,data.apellido_persona,data.locacion,data.precio_servicio,data.perfil,data.calificacion]}></InformacionUsuario>
     <h1>{data.nombre_persona}</h1>
    <div className="card">{data.nombre_persona}&nbsp;{data.apellido_persona}
    <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">
        <p></p>
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
