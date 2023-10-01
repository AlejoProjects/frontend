import { useState } from 'react';
import NavMenu from "./nav";
import persona from "../assets/persona.png";
import ConfigurationElement from "./configurationElement";
import "../css/configuration.css";
const Configuration = () => {
 
  return (
    <>
      <NavMenu></NavMenu>
      <div id="title">
      <img src={persona} className="circularPicture" id="profilePicture"></img>
      <h2>nombre apellido</h2>
      </div>
      <div className="elementsContainer">
        <h3>Información Personal</h3>
        <ConfigurationElement valor="nombre"></ConfigurationElement>
        <ConfigurationElement valor="direccion"></ConfigurationElement>
        <ConfigurationElement valor="telefono"></ConfigurationElement>
        <ConfigurationElement valor="email"></ConfigurationElement>
      </div>
      <div></div>
  </>
  )
};
export default Configuration;
