import { useEffect } from "react";
import { useState } from "react";

const DetalleServices = ({ urlServices }) => {

    const [nombre, setNombre] = useState('');
    const [habilidad, setHabilidad] = useState('');
    const [altura, setAltura] = useState('');

    useEffect(() => {
        fetch(urlServices)
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                setNombre(jsonData.name);
                setAltura(jsonData.height);
                setHabilidad(jsonData.abilities[0].ability.name);
            })
            .catch(error => console.log('Ocurrió un error en la consola'));
    })

    return (
        <>
            <h2>{nombre}</h2>
            <p>Habilidad: {habilidad}</p>
            <p>Altura: {altura} cm</p>
        </>
    )

}

export default DetalleServices