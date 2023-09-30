import { useParams } from 'react-router-dom';
import NavMenu from "./nav";
import "../css/stylesheet.css";
import { useState } from 'react';
/**
 * La función de home esta hecha para servir como login hacia la plataforma de tinder.
 * Al validar al usuario lo redirige la pagina de empresa o la pagina de persona.
 * Falta la implementación de validación con el crud.
 * Al validar se deben pasar los siguientes a todas las paginas:
 * opción#1: id del usuario o empresa  Y si es una empresa o usuario normal
 * opción#2: un array con los datos del usuario o empresa Y si es empresa o usuario normal
 * @returns  none
 */
const Home = () => {
  const {dbIdentifier} = useParams();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  return (
    <>
      <NavMenu></NavMenu>
      <h1> Tinder Para Habilidades </h1>
      <div id="login_div">
        <div className="row_elements">
          <p>User</p>
          <input type="text" id="user_input"  value = {username} onChange={(event) => {setUsername(event.target.value)}}></input>
        </div>
        <div className="row_elements">
          <p>Password</p>
          <input type="text" value = {password} onChange={(event) => {setPassword(event.target.value)}}></input>
        </div>
        <button onClick={()=>{
          console.log("el usuario es " + username + " y la contraseña es "+password);
        }}>Login</button>
      </div>
      <p>{dbIdentifier}</p>
    </>
  );
};


export default Home;
