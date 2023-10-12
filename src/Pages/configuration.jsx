import { useState, useEffect } from "react";
import NavMenu from "./nav";
import persona from "../assets/persona.png";
import ConfigurationSensible from "./configurationPages/configurationSensible";
import ConfigurationElement from "./configurationPages/configurationElement";
import ConfigurationPassword from "./configurationPages/configurationPassword";
import ConfiguracionHabilidades from "./configurationPages/configurationHabilidades";
import "../css/configuration.css";
const Configuration = () => {
  const [data, setData] = useState([]);
  const iden = 'empresas';
  let infoContainer = [],nombres = [],nombreSensible =[],infoContainerSensible = [],comprobante = [],soloNombres = "";
  const id_usuario = 2;
  /**La función removeSensible clasifica la información recibida del backend en información sensible y no sensible con sus respectivos nombres*/
  const removeSensible = (nombres,infoContainer) => {
    let resultadoNombres = [],resultadoInfo = [],resultadosNombresSensibles = [],resultadosInfoSensibles = [],comprobante = [],soloNombres = "";
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
   /**Esta función es temporal, se borrara cuando sea implementada la validación del login*/
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/`+iden+"/"+id_usuario)
    .then((response) => response.json())
    .then((jsonData) => {
      setData(jsonData.message[0]);
    })
    .catch((error) => console.log("Ocurrió un error en la consulta"));
  });

  nombres = Object.keys(data);
  nombres.forEach(async (key,index) => {
    if(key == 0){
    }
    infoContainer.push(data[key]);
  });
  const resultado  = removeSensible(nombres,infoContainer);
  nombres = resultado[0],infoContainer = resultado[1],nombreSensible = resultado[2],infoContainerSensible = resultado[3],comprobante = resultado[4],soloNombres = resultado[5];
  /**La función information mapping crea las opciones a modificar en tags de react según la info contenida en el backend */
  const InformationMapping =infoContainer.map((item,index) => (
   
     <ConfigurationElement key={index}  index={index} ident={iden} id={infoContainerSensible[0]} info={infoContainer} nombres={nombres} comprobante={comprobante}/>
  ));
    /**La función informatioMapping sensible crea las opciones a modificar en tags de react segpun la info contenida en el backend para las variables sensibles que no seran editas pero si mostradas */
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
      <div>
        <h3>
          <ConfigurationPassword id={id_usuario} iden={iden} nombres={nombres} comprobante={comprobante}/>
        </h3>
      </div>
      <div>
        <ConfiguracionHabilidades></ConfiguracionHabilidades>
      </div>
    </>
  );
};
export default Configuration;
