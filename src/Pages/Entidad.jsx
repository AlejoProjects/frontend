import "/src/css/Servicio.css";
const Entidad = (props) => {
    if(props.cual = 'user'){
      return (
      <>
      <div className="box box_size">
      <h3>habilidades{props.nombre_empresa}</h3>
      <div className="text_container">
      <img  src={props.imagen} className="circularPicture"/>
      <p className="message_snipet">proceso iniciado</p>
      </div>
     </div>
    </>
    );
    }
    else if(props.cual = 'empresa'){
      return (
        <>
        <div className="box box_size">
        <h3>{props.nombre_persona}</h3>
        <div className="text_container">
        <img  src={props.imagen} className="circularPicture"/>
        <p className="message_snipet">{props.status}</p>
        </div>
       </div>
      </>
        );
    }
  
};
export default Entidad;
