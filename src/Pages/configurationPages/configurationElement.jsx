import axios from 'axios';
import { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ConfigurationElement = (props) => {
  const fixedInfo ="fixedInfo"+ props.index;
  const MySwal = withReactContent(Swal);
    return (
      <>
      <div className="configComponent">
      <div className="fixedInfo" id={fixedInfo}>
        <p className='textComponent'>{props.nombres[props.index]} :    {props.info[props.index]} </p>
        <button className="circularPicture buttonContainer" onClick={async () => {
    const { value: texto } = await MySwal.fire({
      title: ``,
      input: 'text',
      inputLabel: `porfavor escriba su nuevo  ${props.nombres[props.index]}`,
      inputValue: "",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value != '') {
            resolve();
          } else {
            resolve('You need to write something');
          }
    })}
  })
    if(texto){
   MySwal.fire({html: `Se ha cambiado ${props.nombres[props.index]} a  ${texto}`})
   let valores = {};
   switch(props.ident){
   case 'personas':
    valores = {
     [props.comprobante[2]]:props.comprobante[3],
     [props.nombres[props.index]] : texto
    };
   break;
   case 'empresas':
     valores = {
       [props.comprobante[2]]:props.comprobante[3],
       [props.comprobante[4]]:props.comprobante[5],
       [props.nombres[props.index]] : texto
     };
     break;

 };
   try {
     const response = await axios.put(`http://localhost:3000/api/v1/${props.ident}/${parseInt(props.id)}`, valores);
     console.log(response);// /api/v1/persona o empresa/id
     // Handle success, update UI if necessary
   } 
   catch (error) {
     console.error(error);
     // Handle errors
   }
    }
  }

   }> <FontAwesomeIcon icon={faPencil} className="circularPicture" id="icon"/></button>
       </div>
      </div>
    </>
    )
  };
  export default ConfigurationElement;
  