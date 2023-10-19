import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
//import AddHabilidad from "./addHabilidad";

const ConfiguracionHabilidades = () => {
  /**Debemos ingresar la ruta para las habilidades */

  /** 
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/`+iden+"/"+id_usuario)
    .then((response) => response.json())
    .then((jsonData) => {
      let habilidades = Array(data.length);
      //añade nombres de habilidades
       for(i in data){
         habilidades[i] = '';//aquí deben ir el nombre del endpoint de las habilidades o el id
       }
       const dataArr = new Set(habilidades);
          habilidades = [...dataArr];
      //we test if there´s a match in any of the names on the array
       for(i in names){
          let resultado = false;
          let habilidad = data[i];
          let localName = habilidades[i];
          let info  = [    habilidad.id];
            //toda la info de la habilidad
      
        for(let j = 0;j < inputText.length;j++){
         if(localName[j] == inputText[j]){
            resultado = true;
            }
         else{
          resultado = false;
          break;
         }
        }
        if(resultado == true){
          //Si se encuentra un match, se añade el boton para escoger la habilidad y añadirla a a base de datos habilidad persona
          //
          addHabilidad(localName,i,info);
  
        }      
       }
  
    })
    .catch((error) => console.log("Ocurrió un error en la consulta"));
  });
**/
  return (
    <></>
  );
};

export default ConfiguracionHabilidades;

