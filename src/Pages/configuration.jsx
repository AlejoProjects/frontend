import { useState, useEffect } from "react";
import NavMenu from "./nav";
import persona from "../assets/persona.png";
import ConfigurationElement from "../Pages/configurationElement";
import "../css/configuration.css";

const Configuration = () => {
  const [data, setData] = useState([]);
  let size = 0;
  let infoContainer = [];
  let nombres = [];
  const iden = 'Personas';
  /**Esta función es temporal, se borrara cuando sea implementada la validación del login*/
  const id_usuario = 1;
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    fetch(`http://localhost:3000/api/v1/`+iden+"/"+id_usuario)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.message[0]);
      })
      .catch((error) => console.log("Ocurrió un error en la consulta"));
  };
  /**Aqui finaliza la parte a ser removida del codigo */
  /**la idea es realizar el recorrido de contenido[i] con un map (recordarlo) */
  nombres = Object.keys(data);
  nombres.forEach(async (key,index) => {
    if(key == 0){

    }
    infoContainer.push(data[key]);
  });
  const InformationMapping =infoContainer.map((item,index) => (
   
     <ConfigurationElement key={index} item={item} index={index} ident={iden} info={infoContainer} nombres={nombres}/>
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
        <h2>{infoContainer[1]} {infoContainer[2]}</h2>
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
