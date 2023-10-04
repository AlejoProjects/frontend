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

    return (
      <>
      <div className="configComponent">
        <p className='textComponent'>{props.item} </p>
        <button className="circularPicture buttonContainer" onClick={() => {
          const divTemporal = document.getElementById(divIden);
          divTemporal.style.display = 'flex';
        }}> <FontAwesomeIcon icon={faPencil} className="circularPicture" id="icon"/></button>
        <div className="edit" id={divIden}>
        <input type="text" value={texto} onChange={(event) => {setTexto(event.target.value)}}></input>
        <button onClick={async () => {
            console.log("holiwi");
            console.log(props.ident);
            visibilidadTemporal(0);
            /**try {
              const response = await axios.put(`/api/v1/${valor[0]}/${valor[5]}/`, texto);// /api/v1/persona o empresa/id
              // Handle success, update UI if necessary
            } 
            catch (error) {
              // Handle errors
            }*/
        }}>confirmar</button>
        <button>cancelar</button> 
        </div>
    </div>
    </>
    )
  };
  export default ConfigurationElement;
  