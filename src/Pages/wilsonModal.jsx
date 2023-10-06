import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from "./nav";


const TarjetaPersona = ({ nombre, apellido, otrosDatos }) => {

  return (
    <>
    <NavMenu></NavMenu>
    <h1>Pruebamodal</h1>
    <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{nombre} {apellido}</h5>
        <p className="card-text">Otros datos: {otrosDatos}</p>
      </div>
    </div>
    </>
  );

}

export default TarjetaPersona;
