import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetalleServices = () => {
    const { id } = useParams();
    const [HabilidadFiltrada, setHabilidadFiltrada] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/HabilidadesPersonas/porhabilidad/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the API response
                setHabilidadFiltrada(data);
            })
            .catch(error => console.log('Ocurrió un error en la consola'));
    }, [id]);

    return (
        <div className="container">
            <p><Link to={'/'}>ServiceProviderSearch</Link></p>
            <br />
            {HabilidadFiltrada !== null && (
                <div className='card'>
                    <h3>Descripción Servicio:</h3>
                    <p>ID Persona: {HabilidadFiltrada.id_persona}</p>
                    <p>Nombre Persona: {HabilidadFiltrada.nombre_persona}</p>
                    <p>ID Habilidad: {HabilidadFiltrada.id_habilidad}</p>
                    <p>Descripción: {HabilidadFiltrada.descripción}</p>
                </div>
            )}
        </div>
    );
}

export default DetalleServices;
