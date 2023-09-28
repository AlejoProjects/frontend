import { useState } from "react";
import "../css/stylesheet.css";
import NavMenu from "./nav";
const Configuration = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <h1>Configuración</h1>
      <button>Actualizar información</button>
      <button>Cerrar sesión</button>
    </>
  );
};

export default Configuration;
