import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil} from "@fortawesome/free-solid-svg-icons";
import { useState , useEffect } from "react";
const ConfigurationPassword = (props) => {
    const [contAntigua,setContAntigua] = useState('');
    const [contNueva,setContNueva] = useState('');
    const [contRep,setContRep] = useState('');
    const [password,setPassword] = useState('');
    const divIden ="updateInfoPassword";
    const fixedInfo ="fixedInfoPassword";
    const id = parseInt(props.id);
    
    const visibilidadTemporal = (valor)=> {
        let getFixedInfo = document.getElementById(fixedInfo);
        let getDivIden = document.getElementById(divIden);
        switch(valor){
          case 1:
                getFixedInfo.style.display = 'flex';
                getDivIden.style.display = 'none';
          break;
          case 0:
            getFixedInfo.style.display = 'none';
            getDivIden.style.display = 'grid';
        }
      };
     
      useEffect(() => {
        fetch(`http://localhost:3000/api/v1/`+props.iden+'/'+id)
        .then((response) => response.json())
        .then((jsonData) => {
          setPassword(jsonData.message[0].password); 
        })
        .catch((error) => console.log("Ocurrió un error en la consulta"));
      });
      return (
        <>
        <div className="configComponentPassword">
        <div className="fixedInfoPasswordClass" id={fixedInfo}>
           <p>Cambiar contraseña</p>
           <button className="circularPicture buttonContainer" onClick={() => {
          const divTemporal = document.getElementById(divIden);
          const divFixed = document.getElementById(fixedInfo);
          divTemporal.style.display = 'grid';
          divFixed.style.display = 'none';
        }}> <FontAwesomeIcon icon={faPencil} className="circularPicture" id="icon"/></button>
         </div>
      <div id={divIden}>
        <p>contraseña antigua:</p> <input type="text" value={contAntigua} onChange={(event) => {setContAntigua(event.target.value)}}></input>
        <p>contraseña nueva:</p> <input type="text" value={contNueva} onChange={(event) => {setContNueva(event.target.value)}}></input>  
        <p>repita la contraseña:</p> <input type="text" value={contRep} onChange={(event) => {setContRep(event.target.value)}}></input>
       
        <div>
        <button onClick={async ()=>{
            visibilidadTemporal(1);
            if(contAntigua == password){
            if(contNueva == contRep){
            try {
                const response = await axios.put(`http://localhost:3000/api/v1/${props.iden}/${parseInt(props.id)}`, contNueva);
                console.log(response);// /api/v1/persona o empresa/id
                // Handle success, update UI if necessary
              } 
              catch (error) {
                console.error(error);
                // Handle errors
              }
            }
        }}
    }>Confirmar</button>
        <button onClick={()=>{
             visibilidadTemporal(1);
        }}>Cancelar</button>
        </div>
      </div>
      </div>
      </>
      )
  
  };
    export default ConfigurationPassword;
    