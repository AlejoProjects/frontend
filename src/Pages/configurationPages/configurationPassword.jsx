import axios from 'axios';
import React ,{ useState , useEffect } from "react";
//import { useAuth } from "../AuthContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


const ConfigurationPassword  = (props) =>  {
  const MySwal = withReactContent(Swal); 
  console.log(props);
  const {id, typeUser} = props;
  // console.log(`element entrada: ${{props}} `);
  //console.log(`element entrada: ${id} ${route} ${props} `);

  const showModal = async () => {
    const { value: passwords } = await MySwal.fire({
      title: `Cambio de contraseña`,
      html: `<input type="password" id="current-password" class="swal2-input" placeholder="Contraseña actual" required>
            <input type="password" id="new-password" class="swal2-input" placeholder="Nueva contraseña" required>`,
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: () => {
        const currentPassword = document.getElementById("current-password").value;
        const newPassword = document.getElementById("new-password").value;
        return [currentPassword, newPassword];
      },
      inputValidator: (values) => {
        if (!values[0] || !values[1]) {
          return 'Ambos campos son obligatorios';
        }
      }
    });

    if (passwords) {
      const currentPassword = passwords[0];
      const newPassword = passwords[1];
      const url ='http://localhost:3000/api/v1'
      let route =''
      if (typeUser == 'user') {
        route ='Personas/passwordUpdate'
      }else if (typeUser !== 'user') {
        route = 'Empresas/passwordUpdate'
      }
      console.log(route);
      console.log(`${url}/${route}/${id}`);
      try {
        const data ={
          password: currentPassword,
          new_pwd: newPassword
        }

        const response = await axios.put(`${url}/${route}/${id}`, data);
        console.log(response);
        if (response.status === 201) {
          MySwal.fire({ html: `Se ha cambiado la contraseña correctamente` });
        }
      } catch (error) {
        console.log(error);
        MySwal.fire({ html: `Hubo un error al actualizar Contraseña` });
      }
    }
  };
  
   return(
    
    <button onClick={showModal} className="btn btn-warning">
      ¿seguro desea actualizar datos? &nbsp;
      <FontAwesomeIcon icon={faPenToSquare} />
    </button>
    
   )
}
  
export default ConfigurationPassword;