import " opt/build/repo/src/assets/persona.png"
import persona from " opt/build/repo/src/css/services.css";
const Entities = (props) => {
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
export default Entities;
