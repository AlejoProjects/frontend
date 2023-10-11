import { useState , useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faX,faBolt,faRefresh,faStar,} from "@fortawesome/free-solid-svg-icons";
import "../css/ProfileCenter.css";
import persona from "../assets/persona.jpg";
import NavMenu from "./nav";
import InformacionUsuario from "./userInformation";
import axios from "axios";
import { useAuth } from "./AuthContext";
//import { useParams } from "react-router-dom";
const ProfileCenter = () => {
  const {user} = useAuth();
  const [counter, setCounter] = useState(0);
  const [data,setData] = useState([]);
  const [size, setSize] = useState(0);
  const [servicios,setServicios] = useState([]);
  const empresaId =  1;
  /**Este efecto llama a cada persona mostrada en la carta */
  useEffect(() => {
      fetchData();
  }, [counter]);

/**Este efecto llama a todos los elementos de la columna personas para poder calcular la cantidad total de personas */
  useEffect(() => {
    const fetchPersonas = async () =>{
      try {
        const response = await axios.get('http://localhost:3000/api/v1/Personas', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const jsonData = response.data;
        setSize(jsonData.message.length);
      } catch (error) {
        console.log('Ocurrió un error en la consulta', error);
      }
    };
    fetchPersonas();
  },[user.token]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/Personas/?&id=${counter}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const jsonData = response.data.message[counter];
      setData(jsonData);
    } catch (error) {
      console.log('Ocurrió un error en la consulta ' + error.message);
    }
  };
  
  const fetchServices = async () => {
    /**Se hace el llamado de los servicios para consultar si ya existen o no. */
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/Servicios`, {
      /**   headers: {
          Authorization: `Bearer ${user.token}`,
        },*/
      });
      const jsonData = response.data.message[counter];
      setServicios(jsonData);
    } catch (error) {
      console.log('Ocurrió un error en la consulta ' + error.message);
    }
  };
  /**Esta función valida si ya existe un servicio creado dentro de la base de datos. Si esta creado entonces ignora la muestra de los datos de esa persona. */
  const validadorServicios = async () => {
    const sizeServicios = servicios.length;
    for(let i = 0;i < sizeServicios;i+= 1){
      if(parseInt(servicios[i].fk_empresa_id)==empresaId){
          if(parseInt(servicios[i].fk_persona_id)==data.id_persona){
            setCounter(counter + 1);
        }
      }
    };

  };
   
  
  return (
    <>
 
      <div id="contenedorGeneral">
      <NavMenu></NavMenu>
      <InformacionUsuario info={[data.nombre_persona,data.apellido_persona,data.locacion,data.precio_servicio,data.perfil,data.calificacion]}></InformacionUsuario>
       <h3>
          {data.nombre_persona}&nbsp;{data.apellido_persona}
        </h3>
        <button className="elements" onClick={()=>{console.log('hallo')}}>
        <img src={persona} id="imagenProfile"></img>
       </button>
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
            onClick={async () => {
              const valores = {
                fk_empresa_id:empresaId,
                fk_persona_id:data.id_persona,     
                nombre_servicio:"match",
	              descripción:"se ha generado la solicitud del servicio"
          };  
              //creación de servicio
              try {
                const response = await axios.post(`http://localhost:3000/api/v1/Servicios`, valores);
                console.log(response);// /api/v1/persona o empresa/id
                // Handle success, update UI if necessary
              } 
              catch (error) {
                console.error(error);
                // Handle errors
              }
               
    
              setCounter(counter + 1);
              if (counter >= size - 1) {
                setCounter(0);
              } 
             
            }}
          >
            <FontAwesomeIcon icon={faHeart} className="icon" id="heart" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCenter;
