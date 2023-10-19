import persona from "/src/assets/persona.png";
import "/src/css/Servicio.css";
const Entidad = (props) => {
  return (
    <>
      <div className="box box_size">
      <h3>habilidades{props.nombre_empresa}</h3>
      <div className="text_container">
      <img  src={persona} className=".circularPicture"/>
      <p className="message_snipet">proceso iniciado</p>
      </div>
     </div>
    </>
  );
};
export default Entidad;
