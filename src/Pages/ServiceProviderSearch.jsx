import React, { useState, useEffect } from "react";
import DetalleServices from "./DetalleServices";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ServiceProviderSearch = () => {
  const [services, setServices] = useState([]); // State to store the list of services
  const [id, setId] = useState(1);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/HabilidadesPersonas/${id}`)
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData);
        // Assuming jsonData.message[0].descripción is an array of services
        setServices(jsonData.message[0].descripción);
      })
      .catch(error => console.error('Ocurrió un error en la consola', error));
  }, [id]); // Include 'id' as a dependency

  const capturarLimite = (event) => {
    setId(event.target.value);
  }

  const capturarFiltroNombre = (event) => {
    setFiltroNombre(event.target.value);
  }

  const seleccionarServicio = (idServicio) => {
    setServicioSeleccionado(idServicio);
  }

  return (
    <>
      <br />
      <label>Búsqueda de servicio: </label>
      <input
        value={filtroNombre}
        onChange={capturarFiltroNombre}
      />
      {
        services.map((servicioPersona, index) => {
          return (
            <div key={index}> {/* Use a <div> instead of <button> */}
              <Link to={`/DetalleServices/${servicioPersona.id_habilidad}`} className='card-title'>
                {servicioPersona.descripción}
              </Link>
            </div>
          )
        })
      }
    </>
  );
};

export default ServiceProviderSearch;