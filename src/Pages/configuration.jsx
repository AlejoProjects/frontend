import axios from 'axios';
import { useState , useEffect } from "react";
import NavMenu from "./nav";
import persona from "../assets/persona.png";
import ConfigurationElement from "./configurationElement";
import "../css/configuration.css";
const Configuration = () => {
  const  id_usuario = 1;
  const [data,setData] = useState([]);
/**Esta función es temporal, se borrara cuando sea implementada la validación del login*/
let contenido = ['','','','','','',''];
let fetc = '';
const identificador = (identificador) => {
  switch(identificador){
    case 'usuario':
      fetc = 'http://localhost:3000/api/v1/Personas/';
    break;
    case 'empresa':
      fetc = 'http://localhost:3000/api/v1/empresa/';
    break;
  };
  
  return(fetc);
};
const identificadorContainer = (identificador) => {
  switch(identificador){
    case 'usuario':
      contenido[0]=data.nombre_persona;
      contenido[1]=data.apellido_persona;
      contenido[2]=data.locacion;
      contenido[3]=data.email;
      contenido[4]=data.precio_servicio;
      contenido[5]=data.estatus;
      contenido[6]=data.password;
      contenido.push(data.perfil);
      contenido.push(data.calificacion);

    break;
    case 'empresa':
      contenido[0]=data.nombre_empresa;
      contenido[1]=data.nit;
      contenido[2]=data.direccion;
      contenido[3]=data.email;
      contenido[4]=data.telefono_empresa;
      contenido[5]=data.status;
      contenido[6]=data.password;
    break;
  };
  
  return(contenido);
};
useEffect(() => {
  fetchData();
});
  const fetchData = async () => {
    const iden = 'usuario';
    const info = identificador(iden);
    
    fetch(info+`?&id=${id_usuario}`)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.message[id_usuario]);
        identificador('persona');
      })
      .catch((error) => console.log("Ocurrió un error en la consulta"));
  }
  identificadorContainer('usuario');
/**Aqui finaliza la parte a ser removida del codigo */
  
  return (
    <>
      <NavMenu></NavMenu>
      <div id="title">
      <img src={persona} className="circularPicture" id="profilePicture"></img>
      <h2>nombre apellido</h2>
      </div>
      <div className="elementsContainer">
        <h3>Información personal</h3>
        <ConfigurationElement valor={contenido[0]}></ConfigurationElement>
        <ConfigurationElement valor={contenido[1]}></ConfigurationElement>
        <ConfigurationElement valor={contenido[2]}></ConfigurationElement>
        <ConfigurationElement valor={contenido[3]}></ConfigurationElement>
      </div>
      <div className="elementsContainer">
        <h3>Información sensible</h3>
        <ConfigurationElement valor={contenido[4]}></ConfigurationElement>
        <ConfigurationElement valor={contenido[8]}></ConfigurationElement>
        <ConfigurationElement valor={contenido[6]}></ConfigurationElement>

      </div>
      <div></div>
  </>
  )
};
export default Configuration;
