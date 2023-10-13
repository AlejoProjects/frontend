import React, { useState, useEffect } from "react";
import DetalleServices from "./DetalleServices";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ServiceProviderSearch = () => {
  const [services, setServices] = useState([]);
  const [limite, setLimite] = useState(1);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [ServicioSeleccionado, setServicioSeleccionado] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/Servicios/?&id=${limite}`)
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData.message);
        setServices(jsonData.message)
      })
      .catch(error => {
        alert('No se pudo establecer conexion a la API')
      })
  }, [limite]);

  const capturarLimite = (event) => {
    setLimite(event.target.value);
  }
  const capturarFiltroNombre = (event) => {
    setFiltroNombre(event.target.value);
  }
  const seleccionarServicio = (idServicio) => {
    setServicioSeleccionado(idServicio)
  }

  return (
    <>
      <label>Límite de Servicios: </label>
      <input
        value={limite}
        onChange={capturarLimite}
      />
      <br />
      <label>Búsqueda por nombre: </label>
      <input
        value={filtroNombre}
        onChange={capturarFiltroNombre}
      />
      {
        //console.log(services);
        services.map((servicio, index) => {
          return (
            <button key={index}
              onClick={() => seleccionarServicio(servicio.id_servicio)}
            >{servicio.descripción}
              <Link
                to={`DetalleServices/${servicio.id_servicio}`}
                className='card-title'
              >
                {pokemon.name}
              </Link>
            </button>
          )
        })
      }
      <DetalleServices id={ServicioSeleccionado} />
    </>
  );
};

export default ServiceProviderSearch;
