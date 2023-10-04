import axios from 'axios';
import { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil} from "@fortawesome/free-solid-svg-icons";
import "../css/configuration.css";
const ConfigurationElement = (props) => {
  const divIden ="updateInfo"+ props.index;
  const fixedInfo ="fixedInfo"+ props.index;
  const [texto,setTexto] = useState('');

  const visibilidadTemporal = (valor)=> {
    const divTemporal = document.getElementById(divIden);
    switch(valor){
      case 1:divTemporal.style.display = 'flex';
      break;
      case 0:divTemporal.style.display = 'none'
    }
  };
    return (
      <>
      <div className="configComponent">
      <div className="fixedInfo" id={fixedInfo}>
        <p className='textComponent'>{props.nombres[props.index]} :    {props.info[props.index]} </p>
        <button className="circularPicture buttonContainer" onClick={() => {
          const divTemporal = document.getElementById(divIden);
          const divFixed = document.getElementById(fixedInfo);
          divTemporal.style.display = 'flex';
          divFixed.style.display = 'none';
        }}> <FontAwesomeIcon icon={faPencil} className="circularPicture" id="icon"/></button>
       </div>
        <div className="edit" id={divIden}>
        <input type="text" value={texto} onChange={(event) => {setTexto(event.target.value)}}></input>
        <button onClick={async () => {
            const divFixed = document.getElementById(fixedInfo);
            visibilidadTemporal(0);
            divFixed.style.display = 'flex';
            const valores = {
              [props.nombres[0]]:props.info[0],
              [props.nombres[3]]:props.info[3],
              [props.nombres[props.index]] : texto
            };
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
        <button onClick={async () => {
            const divFixed = document.getElementById(fixedInfo);
            visibilidadTemporal(0);
            divFixed.style.display = 'flex';}}>cancelar</button> 
        </div>
    </div>
    </>
    )
  };
  export default ConfigurationElement;
  