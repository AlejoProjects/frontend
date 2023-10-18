import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetalleServices = ({ }) => {
    const { id } = useParams();

    const [nombrePersona, setNombrePersona] = useState('');
    const [nombreServicio, setNombreServicio] = useState('');
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/HabilidadesPersonas/${id}`)
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                setNombrePersona(jsonData.message[1].nombre_persona);
                setNombreServicio(jsonData.message[1].descripción);

            })
            .catch(error => console.log('Ocurrió un error en la consola'));
    })

    return (
        <div className="container">
            <p><Link to={'/'}>ServiceProviderSearch</Link></p >
            <br />
            {

                <div className='card' >
                    <p>Persona: {nombrePersona}</p>
                    <h3>Descipción Servicios: {nombreServicio} </h3>
                </div>

            }
        </div>
    )
}

export default DetalleServices