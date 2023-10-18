import axios from 'axios';
import React ,{ useState , useEffect } from "react";
//import { useAuth } from "../AuthContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


const ConfigurationElement  = (props) =>  {
  const MySwal = withReactContent(Swal); 
  console.log(props);
  const {id, typeUser, campo,email,nit} = props;
  // console.log(`element entrada: ${{props}} `);
  //console.log(`element entrada: ${id} ${route} ${props} `);

  const showModal = async () => {
    const { value: texto } = await MySwal.fire({
      title: ``,
      input: 'text',
      inputLabel: `Por favor, escriba su nuevo valor`,
      inputValue: "",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Debe escribir algo';
        }
      }
    });

    if (texto) {
      const url ='http://localhost:3000/api/v1'
      let route =''
      if (typeUser == 'user') {
        route = 'Personas'
      }else if (typeUser !== 'user') {
        route = 'Empresas'
      }
      console.log(route);
      console.log(`${url}/${route}/${id}`);
      try {
        const data ={
          email: email,
          campo:[campo],
          value: texto
        }
        if (typeUser === 'empresa') {
          data.nit = nit;
        }
        console.log(data);
        const response = await axios.put(`${url}/${route}/${id}`, data);
        console.log(response);
        if (response.status === 200) {
          MySwal.fire({ html: `Se ha cambiado ${[campo]} a: ${texto}` });
        } else {
          MySwal.fire({ html: `Hubo un error al actualizar ${campo}` });
        }
      } catch (error) {
        console.log(error);
      }
      
      
      MySwal.fire({ html: `Se ha cambiado ${[campo]} a: ${texto}` });

      // Aquí puedes realizar cualquier acción necesaria con el valor "texto".
      // Por ejemplo, enviarlo al servidor o actualizar el estado de tu componente.
    }
  };
  
   return(
    
    <button onClick={showModal} className="btn btn-warning">
      ¿seguro desea actualizar datos? &nbsp;
      <FontAwesomeIcon icon={faPenToSquare} />
    </button>
    
   )
}
  
export default ConfigurationElement;
  