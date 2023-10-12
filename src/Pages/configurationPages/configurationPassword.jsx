import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil} from "@fortawesome/free-solid-svg-icons";
import { useState , useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ConfigurationPassword = (props) => {
    const fixedInfo ="fixedInfoPassword";
    const id = parseInt(props.id);
    const MySwal = withReactContent(Swal);
    const [password,setPassword] = useState('');
    const logObject = (obj, indent = '')=> {
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
    };
    const setValores = (cont) => {
      let valores = {};
      switch(props.iden){
        case 'personas':
         valores = {
          [props.comprobante[2]]:props.comprobante[3],
          password : cont
         };
        break;
        case 'empresas':
          valores = {
            [props.comprobante[2]]:props.comprobante[3],
            [props.comprobante[4]]:props.comprobante[5],
            password : cont
          };
          break;
        
      };
      return valores;
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
        <div className="fixedInfoPasswordClass" id={fixedInfo}>
          <p>Cambiar contraseña</p>
          <button
            className="circularPicture buttonContainer"
            onClick={async () => {
              const { value: pass } = await MySwal.fire({
                title: `Cambio de contraseña`,
                input: "password",
                inputLabel: `ingrese su contraseña actual`,
                showCancelButton: true,
                inputValidator: (value) => {
                  return new Promise((resolve) => {
                    if (value == password) {
                      resolve();
                    } else {
                      resolve("contraseña incorrecta");
                    }
                  });
                }
              })
              if (pass) {
                const { value: formValues } = await Swal.fire({
                  title: "Multiple inputs",
                  html:
                    "<p>nueva:" +
                    '<input id="swal-input1" class="swal2-input" type="password">' +
                    "<p>repetir:" +
                    '<input id="swal-input2" class="swal2-input" type="password">',
                  focusConfirm: false,
                  preConfirm: () => {
                    return [
                      document.getElementById('swal-input1').value,
                      document.getElementById('swal-input2').value
                    ]
                    }
                  
                });
                let a = formValues[0];
                let b = formValues[1];
                if(a === b){
                  console.log(typeof(a));
                  const allValues = setValores(a);
                  logObject(allValues);
                  try {
                    const response = await axios.put(`http://localhost:3000/api/v1/${props.iden}/${parseInt(props.id)}`,allValues);
                    console.log(response);// /api/v1/persona o empresa/id
                    // Handle success, update UI if necessary
                  } 
                  catch (error) {
                    console.error(error);
                    // Handle errors
                  }
                  Swal.fire('Se ha actualizado la contraseña');
                }
                else {
                  Swal.fire('Los nuevos valores no concuerdan');
                }
              }
            }}
          >
            {" "}
            <FontAwesomeIcon
              icon={faPencil}
              className="circularPicture"
              id="icon"
            />
          </button>
        </div>
      </>
      )
  
  };
    export default ConfigurationPassword;
    