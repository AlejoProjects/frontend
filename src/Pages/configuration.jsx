import axios from "axios";
import { useState, useEffect } from "react";
import NavMenu from "./nav";
import persona from "../assets/persona.png";
import ConfigurationElement from "../Pages/configurationElement";
import "../css/configuration.css";

const Configuration = () => {
  const [data, setData] = useState([]);
  let infoContainer = ["", "", "", "", "", ""];
  const iden = "usuario";
  const clasificador = (iden) => {
    switch (iden) {
      case "usuario":
        infoContainer = [
          data.id_persona,
          data.nombre_persona,
          data.email,
          data.locacion,
          data.password,
          data.status,
        ];
        infoContainer.push(data.apellido_persona);
        infoContainer.push(data.precio_servicio);
        infoContainer.push(data.perfil);
        infoContainer.push(data.calificacion);
        break;
      case "empresa":
        infoContainer = [
          data.id,
          data.nombre_empresa,
          data.email,
          data.direccion,
          data.password,
          data.estatus,
        ];
        infoContainer.push(data.nit);
        infoContainer.push(data.telefono_empresa);
    }
  };
  /**Esta función es temporal, se borrara cuando sea implementada la validación del login*/
  const id_usuario = 1;
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    fetch(`http://localhost:3000/api/v1/Personas/` + `?&id=${id_usuario}`)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.message[id_usuario]);
      
       
      })
      .catch((error) => console.log("Ocurrió un error en la consulta"));
  };
  /**Aqui finaliza la parte a ser removida del codigo */
  /**la idea es realizar el recorrido de contenido[i] con un map (recordarlo) */
  clasificador(iden);
  const InformationMapping =infoContainer.map((item,index) => (
   
     <ConfigurationElement key={index} item={item} index={index} ident={iden}/>
  ));


  return (
    <>
      <NavMenu></NavMenu>
      <div id="title">
        <img
          src={persona}
          className="circularPicture"
          id="profilePicture"
        ></img>
        <h2>nombre apellido</h2>
      </div>
      
      <div className="elementsContainer">
        <h3>Información personal</h3>
      
        {InformationMapping}
      </div>
      <div className="elementsContainer">
        <h3>Información sensible</h3>

      </div>
      <div></div>
    </>
  );
};
export default Configuration;
