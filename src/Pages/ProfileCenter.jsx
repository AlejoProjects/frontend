import { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faX,faBolt,faRefresh,faStar,} from "@fortawesome/free-solid-svg-icons";
import "../css/ProfileCenter.css";
import persona from "../assets/persona.png";
import NavMenu from "./nav";
import InformacionUsuario from "./userInformation";
//import { useParams } from "react-router-dom";
const ProfileCenter = () => {
  // const {id} = useParams();
  const [counter, setCounter] = useState(0);
  const [data,setData] = useState([]);
  let size = 0;
  /**Este efecto llama a cada persona mostrada en la carta */
  useEffect(() => {
      fetchData();
  }, [counter]);

/**Este efecto llama a todos los elementos de la columna personas para poder calcular la cantidad total de personas */
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/Personas/`)
      .then((response) => response.json())
      .then((jsonData) => {
        size = jsonData.message.length;
      })
      .catch((error) => console.log("Ocurrió un error en la consulta"));
  });
  const fetchData = async () => {
    fetch(`http://localhost:3000/api/v1/Personas/?&id=${counter}`)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.message[counter]);
        console.log("data "+ data.calificacion);
      })
      .catch((error) => console.log("Ocurrió un error en la consulta"));
  }
  return (
    <>
      <NavMenu></NavMenu>
      <div>
      <InformacionUsuario info={[data.nombre_persona,data.apellido_persona,data.locacion,data.precio_servicio,data.perfil,data.calificacion]}></InformacionUsuario>
       <h3>
          {data.nombre_persona}&nbsp;{data.apellido_persona}
        </h3>
        <img src={persona}></img>
        <div className="row_elements profile_icons">
          <button
            className="elements"
           onClick={() => {
              setCounter(counter - 1);
              if (counter <= 0) {
                setCounter(size-1);
              }
            }}
          >
            <FontAwesomeIcon icon={faRefresh} className="icon" id="refresh" />
          </button>
          <button className="elements" onClick={() => {
              setCounter(counter + 1);
              if (counter >= size - 1) {
                setCounter(0);
              } 
            }}>
            <FontAwesomeIcon icon={faX} className="icon" id="x" />
          </button>
          <button className="elements">
            <FontAwesomeIcon icon={faStar} className="icon" id="star" />
          </button>
          <button
            className="elements"
            onClick={() => {
              setCounter(counter + 1);
              if (counter >= size - 1) {
                setCounter(0);
              } 
            }}
          >
            <FontAwesomeIcon icon={faHeart} className="icon" id="heart" />
          </button>
          <button className="elements">
            <FontAwesomeIcon icon={faBolt} className="icon" id="ray" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCenter;
