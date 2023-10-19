import "/src/css/Servicio.css";
const Entidad = (props) => {
  return (
    <>
      <div className="box box_size">
      <h3>habilidades{props.nombre_empresa}</h3>
      <div className="text_container">
      <img  src="/opt/build/repo/src/assets/1.png" className=".circularPicture"/>
      <p className="message_snipet">proceso iniciado</p>
      </div>
     </div>
    </>
  );
};
export default Entidad;
