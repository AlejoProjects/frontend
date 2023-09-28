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
            <div>
                    <p>{info[0]} {info[1]}</p>
                    <p>{info[2]}</p>
                    <p>{info[3]} </p>
                    <p>{info[4]}</p>
                    <p>{info[5]} </p>
                 
            </div>
        </>
    )
};

export default InformacionUsuario;