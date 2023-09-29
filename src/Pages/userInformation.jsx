import '../css/profileCenter.css';
const InformacionUsuario = ({info})=> {
/**
 * info[0] = name
 * info[1] = apellido
 * info[2] = ubicación
 * info[3] = precio del servicio
 * info[4] = perfil
 * info[5] = calificación
 */
    return(
        <>
            <div id='informacion_completa' >
                    <p id="item1">{info[0]} {info[1]}</p>
                    <p id="item2">{info[2]}</p>
                    <p id="item3">{info[3]} </p>
                    <p id="item5">{info[5]} </p>
                    <p id="item4">{info[4]}</p>               
            </div>
        </>
    )
};

export default InformacionUsuario;