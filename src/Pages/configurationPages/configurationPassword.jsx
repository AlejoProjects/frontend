import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil} from "@fortawesome/free-solid-svg-icons";
const ConfigurationPassword = (props) => {
    const divIden ="updateInfoPassword"+ props.index;
    const fixedInfo ="fixedInfoPassword"+ props.index;
      return (
        <>
        <div className="configComponentPassword">
        <div className="fixedInfoPassword" id={fixedInfo}>
           <p>Cambiar contraseña</p>
           <button className="circularPicture buttonContainer" onClick={() => {
          const divTemporal = document.getElementById(divIden);
          const divFixed = document.getElementById(fixedInfo);
          divTemporal.style.display = 'flex';
          divFixed.style.display = 'none';
        }}> <FontAwesomeIcon icon={faPencil} className="circularPicture" id="icon"/></button>
         </div>
      <div id="updateInfoPassword">
        <p>contraseña antigua:</p><input/>
        <p>contraseña nueva:</p><input/>
        <p>repita la contraseña:</p><input/>
        <div>
        <button>Confirmar</button>
        <button>Cancelar</button>
        </div>
      </div>
      </div>
      </>
      )
  
  };
    export default ConfigurationPassword;
    