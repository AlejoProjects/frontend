import { useState, useEffect } from "react";
import NavMenu from "./nav";
import persona from "../assets/persona.png";
import ConfigurationElement from "../Pages/configurationElement";
import ConfigurationSensible from "./configurationSensible";
import "../css/configuration.css";

const Configuration = () => {
  const [data, setData] = useState([]);
  let size = 0;
  let infoContainer = [];
  let nombres = [];
  let nombreSensible =[];
  let infoContainerSensible = [];
  let comprobante = [];
  let soloNombres = "";
  const iden = 'personas';
  /**Esta función es temporal, se borrara cuando sea implementada la validación del login*/
  const id_usuario = 1;
  const removeSensible = (nombres,infoContainer) => {
    let resultadoNombres = [];
    let resultadoInfo = [];
    let resultadosNombresSensibles = [];
    let resultadosInfoSensibles = [];
    let comprobante = [];
    let soloNombres = "";
    if(iden == 'empresas'){
       resultadoNombres = [nombres[2],nombres[3],nombres[5]];
       resultadoInfo = [infoContainer[2],infoContainer[3],infoContainer[5]];
       resultadosNombresSensibles =  [nombres[0],nombres[1],nombres[4],nombres[6]];
       resultadosInfoSensibles = [infoContainer[0],infoContainer[1],infoContainer[4],infoContainer[6]];
       comprobante = [nombres[0],infoContainer[0],nombres[1],infoContainer[1],nombres[4],infoContainer[4]];
       soloNombres = infoContainer[2];
      }
    else if(iden == 'personas'){
      resultadoNombres = [nombres[1],nombres[2],nombres[5],nombres[6],nombres[7]];
      resultadoInfo = [infoContainer[1],infoContainer[2],infoContainer[5],infoContainer[6],infoContainer[7]];
      resultadosNombresSensibles =  [nombres[0],nombres[3]];
      resultadosInfoSensibles = [infoContainer[0],infoContainer[3]];
      comprobante = [nombres[0],infoContainer[0],nombres[3],infoContainer[3]]
      soloNombres = infoContainer[1] +" "+ infoContainer[2];
    }
    
   return([resultadoNombres,resultadoInfo,resultadosNombresSensibles,resultadosInfoSensibles,comprobante,soloNombres]);


  };
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/`+iden+"/"+id_usuario)
    .then((response) => response.json())
    .then((jsonData) => {
      setData(jsonData.message[0]);
    })
    .catch((error) => console.log("Ocurrió un error en la consulta"));
  });

  /**Aqui finaliza la parte a ser removida del codigo */
  /**la idea es realizar el recorrido de contenido[i] con un map (recordarlo) */
  nombres = Object.keys(data);
  nombres.forEach(async (key,index) => {
    if(key == 0){
    }
    infoContainer.push(data[key]);
  });
  const resultado  = removeSensible(nombres,infoContainer);
  nombres = resultado[0];
  infoContainer = resultado[1];
  nombreSensible = resultado[2];
  infoContainerSensible = resultado[3];
  comprobante = resultado[4];
  soloNombres = resultado[5];

  const InformationMapping =infoContainer.map((item,index) => (
   
     <ConfigurationElement key={index}  index={index} ident={iden} id={infoContainerSensible[0]} info={infoContainer} nombres={nombres} comprobante={comprobante}/>
  ));
  const InformationMappingSensible =infoContainerSensible.map((item,index) => (
    <ConfigurationSensible key={index} item={item} index={index} ident={iden} info={infoContainerSensible} nombres={nombreSensible}/>
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
        <h2>{soloNombres}</h2>
      </div>
      
      <div className="elementsContainer">
        <h3>Información personal</h3>
      
        {InformationMapping}
      </div>
      <div className="elementsContainer">
        <h3>Información sensible</h3>
        {InformationMappingSensible}
      </div>
      <div></div>
    </>
  );
};
export default Configuration;
