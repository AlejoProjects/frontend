import "/src/css/Servicio.css";
const Entidad = (props) => {
    console.log(props.cual);

    if(props.cual == 'user'){
      return (
      <>
      <div className="box box_size">
      <h3>habilidades{props.datos.nombre_empresa}</h3>
      <div className="text_container">
      <img  src={props.imagen} className="circularPicture"/>
      <p className="message_snipet">{props.datos.status}</p>
      </div>
     </div>
    </>
    );
    }
    else if(props.cual == 'empresa'){
      return (
        <>
        <div className="box box_size">
        <h3>{props.datos.nombre_persona}</h3>
        <div className="text_container">
        <img  src={props.imagen} className="circularPicture"/>
        <p className="message_snipet">{props.datos.status}</p>
        </div>
       </div>
      </>
        );
    }
  
};
export default Entidad;
