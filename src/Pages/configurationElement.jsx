import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil} from "@fortawesome/free-solid-svg-icons";
const ConfigurationElement = ({valor}) => {
    return (
      <>
      <div className="configComponent">
        <p id="textComponent">{valor}</p>
        <button className="circularPicture buttonContainer"> <FontAwesomeIcon icon={faPencil} className="circularPicture" id="icon"/></button>
    </div>
    </>
    )
  };
  export default ConfigurationElement;
  