import "../css/stylesheet.css";
import NavMenu from "./nav";
import { Link } from "react-router-dom";
const Configuration = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <h1>Configuración</h1>
      <button>Actualizar información</button>
      <button onClick={()=> {
      }}><Link to="/">Cerrar sesión</Link></button>
    </>
  );
};

export default Configuration;
