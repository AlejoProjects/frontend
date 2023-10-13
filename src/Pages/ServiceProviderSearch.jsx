import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faX, faBolt, faRefresh, faStar } from "@fortawesome/free-solid-svg-icons";
import "../css/ProfileCenter.css";
import NavMenu from "./nav";
import InformacionUsuario from "./userInformation";

const ServiceProviderSearch = () => {
  const [services, setServices] = useState(0);
  const [data, setData] = useState([]);
 const [filtroNombre, setFiltroNombre] = useState('');
 const[ServicioSeleccionado, setServicioSeleccionado] = useState('');

   useEffect(() => {
    fetch(`http://localhost:3000/api/v1/Servicios/?&id=${limite}`)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);
        setServices(jsonData.results)
    })
    .catch(error => {
        alert('No se pudo establecer conexion a la API')
    })
}, [limite]);

const capturarFiltroNombre = (event) => {
    setFiltroNombre(event.target.value);
}
const seleccionarServicio = (idServicio) => {
  setServicioSeleccionado(idServicio)
}

  return (
    <> 
     <br />
            <label>Búsqueda por nombre: </label>
            <input
                value={filtroNombre}
                onChange={capturarFiltroNombre}
            />
      <NavMenu></NavMenu>
        <div>
        <InformacionUsuario info={[data.nombre_persona, data.apellido_persona, data.locacion, data.precio_servicio, data.perfil, data.calificacion]}></InformacionUsuario>
        <h3>
          {data.nombre_persona}&nbsp;{data.apellido_persona}
        </h3>

        <div className="row_elements profile_icons">
          <button className="elements" onClick={goToPreviousProfile}>
            <FontAwesomeIcon icon={faRefresh} className="icon" id="refresh" />
          </button>
          <button className="elements" onClick={goToNextProfile}>
            <FontAwesomeIcon icon={faX} className="icon" id="x" />
          </button>
          <button className="elements">
            <FontAwesomeIcon icon={faStar} className="icon" id="star" />
          </button>
          <button className="elements" onClick={goToNextProfile}>
            <FontAwesomeIcon icon={faHeart} className="icon" id="heart" />
          </button>
          <button className="elements">
            <FontAwesomeIcon icon={faBolt} className="icon" id="ray" />
          </button>
        </div>
{
        services.map((servicio, index) => {
                    return (
                        <button key={index}
                        onClick={() => seleccionarServicio(servicio.url)}
                        >{servicio.fk_habilidad_id}</button>
                    )
                })
              }
              <DetalleServices urlServices={ServicioSeleccionado}/>
      </div>
    </>
  );
};

export default ServiceProviderSearch;
