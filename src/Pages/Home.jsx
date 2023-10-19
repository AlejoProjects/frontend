import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./AuthContext";
import React, { useState } from "react";
import axios from "axios";
import "../css/Login.css";

// import NewUserForm from "./createNewUser";




const Home = () => {
  const [datos, setDatos] = useState({email: "",type: "",password: ""});
  const url = 'https://tinderhabilidadesapiv1.fly.dev/api/v1';
  const navigate = useNavigate();

  const handleInputChage = (e) => {
    let { name, value } = e.target;
      if (name === "type") {
        // For the 'type' field, set the value and also update 'table'
        const newTableValue = value === "empresa" ? "Personas" : "Empresas";//selecciona el campo de type y define los valores predeterminados para user y empresa de table
        setDatos({ ...datos, [name]: value, table: newTableValue });
      } else {
        // For other fields, update as usual
        let newDatos = { ...datos, [name]: value };
        setDatos(newDatos);
      }
  };
const { updateUser } = useAuth();

const handleSubmit = async (e)=> {
  e.preventDefault();
  if (!e.target.checkValidity()) {
    console.log("no enviar");
  }else{
    try {
      let res = await axios.post(url+"/Login/", datos);
      const typeUserCheck = datos.type;
      const dataBaseCheck = datos.table;
      const idDinamico = typeUserCheck === "user" ? res.data.ndatos[0].id_persona : res.data.ndatos[0].id;

      console.log(res.data);
      //console.log(`id: ${idDinamico}, token: ${res.data.ndatos.token}`);
      updateUser({ id: idDinamico, token: res.data.ndatos.token, type: typeUserCheck, table:dataBaseCheck});
         navigate("/user")
        
      } catch (error) {
        console.log(error);
      }
    }
  }
  
    const handleNavigate = () => {
      navigate('/createNewUser'); // Replace '/another-page' with the URL of the page you want to navigate to.
    };
  
  return (
    <>
      <div className="body-login">
      <div className="logo-box">
          
        
       <FontAwesomeIcon
        icon={faFire}
        style={{
          WebkitMask: "radial-gradient(circle at 50% 10.64%, #d7c35d 0, #deba54 8.33%, #e4b04d 16.67%, #e9a546 25%, #ed9841 33.33%, #f0893e 41.67%, #f2793c 50%, #f3673d 58.33%, #f35542 66.67%, #f34249 75%, #f22b52 83.33%, #f0065d 91.67%, #ec0069 100%)",
          mask: "radial-gradient(circle at 50% 10.64%, transparent 0, transparent 8.33%, transparent 16.67%, transparent 25%, transparent 33.33%, transparent 41.67%, transparent 50%, transparent 58.33%, transparent 66.67%, transparent 75%, transparent 83.33%, transparent 91.67%, transparent 100%)",
          color: "red", // Cambia el color del ícono aquí
        }}
      />

      <h2 className="texto">Iniciar sesión en Tinder de habilidades</h2>
      
      <hr></hr>
      <form onSubmit={handleSubmit} noValidate={true} autoComplete="off">

        <select name="type" id="typeUser" required value={datos.type} onChange={handleInputChage}>
          <option value="" disabled className="texto">Seleccione una opción</option>
          <option value="empresa"  className="texto">Empresas</option>
          <option value="user"  className="texto">Personas</option>
        </select>

        <input id="email" type="text" onChange={handleInputChage} value={datos.email} placeholder="Correo electrónico" name = "email" required className="texto"/>

          <input id="password" type="password" onChange={handleInputChage} value={datos.password} placeholder="Contraseña" name="password" required  className="texto"/>
          <button>Ingresar</button>
        </form>
       
        
        <div>
        <button  className="texto">Forget Password</button>
        <p>
          Don't Have an account
            <button className="texto" onClick={handleNavigate}>
              Register New Account</button>
              
             
            </p>
        </div>

          
        
      </div>
    </div>
    </>
  );
}


export default Home;
