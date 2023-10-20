import "/src/css/Servicio.css";
const Entidad = (props) => {
    console.log(props.cual);
    const dir = "i";
 

    if(props.cual == 'user'){
      if(0 < datos.id_persona <= 10){
        dir = dir + datos.id;
      }
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
      if(0 < datos.id_persona <= 10){
        dir = dir + datos.id_persona;
      }
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
