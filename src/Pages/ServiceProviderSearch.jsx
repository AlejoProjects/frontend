import { useState, useEffect } from "react";
import DetalleServices from "./DetalleServices";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ServiceProviderSearch = () => {
  const [services, setServices] = useState([]); 
  const [id, setId] = useState(1);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/Habilidades/`)
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData);
        // Assuming jsonData.message[0].descripción is an array of services
        setServices(jsonData.message);
      })
      .catch(error => {
        alert('No se pudo establecer conexion a la API')
      })
  }, [id]); 

  const capturarLimite = (event) => {
    setId(event.target.value);
  }

  const capturarFiltroNombre = (event) => {
    setFiltroNombre(event.target.value);
  }

  const seleccionarServicio = (idServicio) => {
    setServicioSeleccionado(idServicio);
  }

  const servicesFiltrados = services.filter(HabilidadesPersonas => {
    return HabilidadesPersonas.descripción.toLowerCase().includes(filtroNombre.toLowerCase());
})

  return (
    <div className="container">
      <br />
      <label>Búsqueda de servicio: </label>
      <input
        value={filtroNombre}
        onChange={capturarFiltroNombre}
      />
      <br />
      {
        servicesFiltrados.map((Habilidad, index) => {
          return (

            <div className='card' key={index}> 
              <Link to={`/DetalleServices/${Habilidad.id_habilidad}`}>{Habilidad.descripción}</Link>
            </div>
            
          )
        })
      }
    </div>
  )
}

export default ServiceProviderSearch
