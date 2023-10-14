import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetalleServices = ({ }) => {
    const {id} = useParams();
    const [nombre_persona, setNombrePersona] = useState('');
    const [descripción, setDescripcion] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/HabilidadesPersonas/${id}`)
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                setNombrePersona(jsonData.message[0].nombre_persona);
                setDescripcion(jsonData.message[0].descripción);
               
            })
            .catch(error => console.log('Ocurrió un error en la consola'));
    }, [])

    return (
        <>
            <h2>{nombre_persona}</h2>
            <p>Descipción Servicios: {descripción}. </p>
        </>
    )

}

export default DetalleServices