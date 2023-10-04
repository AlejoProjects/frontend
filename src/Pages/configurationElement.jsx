import axios from 'axios';
import { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil} from "@fortawesome/free-solid-svg-icons";
const ConfigurationElement = (props) => {
  const divIden ="updateInfo"+ props.index;
  const [texto,setTexto] = useState('');

  const visibilidadTemporal = (valor)=> {
    const divTemporal = document.getElementById(divIden);
    switch(valor){
      case 1:divTemporal.style.display = 'flex';
      break;
      case 0:divTemporal.style.display = 'none'
    }
  };
  const logObject = (obj, indent = '') => {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // If the property is an object (including arrays), log it recursively
        console.log(`${indent}${key}: `);
        logObject(obj[key], indent + '  '); // Increase the indent
      } else {
        // Otherwise, log the property and its value
        console.log(`${indent}${key}: ${obj[key]}`);
      }
    }
  }
  
    return (
      <>
      <div className="configComponent">
        <p className='textComponent'>{props.info[props.index]} </p>
        <button className="circularPicture buttonContainer" onClick={() => {
          const divTemporal = document.getElementById(divIden);
          divTemporal.style.display = 'flex';
        }}> <FontAwesomeIcon icon={faPencil} className="circularPicture" id="icon"/></button>
        <div className="edit" id={divIden}>
        <input type="text" value={texto} onChange={(event) => {setTexto(event.target.value)}}></input>
        <button onClick={async () => {
            visibilidadTemporal(0);
            const valores = {
              [props.nombres[0]]:props.info[0],
              [props.nombres[3]]:props.info[3],
              [props.nombres[props.index]] : texto
            };
            logObject(valores);
            try {
              const response = await axios.put(`http://localhost:3000/api/v1/${props.ident}/${props.info[0]}`, valores);
              console.log(response);// /api/v1/persona o empresa/id
              // Handle success, update UI if necessary
            } 
            catch (error) {
              console.error(error);
              // Handle errors
            }
        }}>confirmar</button>
        <button>cancelar</button> 
        </div>
    </div>
    </>
    )
  };
  export default ConfigurationElement;
  