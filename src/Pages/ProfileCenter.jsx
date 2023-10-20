import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faX, faBolt, faRefresh, faStar, } from "@fortawesome/free-solid-svg-icons";
import "../css/ProfileCenter.css";
import persona from "../assets/persona.jpg";
import NavMenu from "./nav";
import axios from "axios";
import { useAuth } from "./AuthContext";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';




//import { useParams } from "react-router-dom";
const ProfileCenter = () => {
  /**ProfileCenter muestra la parte de selección de personas o empresas por medio del carrousel
   * por el momento como no hay variables de sesión se define los fetch con la tabla de personas y no la de empresas.
   * Al recibir si es una persona o una empresa se actualiza la variable tabla
   * counter = IMPORTANTE es la variable que almacena el id del sujeto en cuestión si es una empresa o si es una persona.
   * url = define la dirección donde se encuentran los datos
   * data = alamacena la información de la persona o empresa mostrada en el carrousel
   * size = es la cantidad de personas a mostrar en el carrousel
   * show = es una variable desginada para mostrar el modal al clickear la imagen de la persona
   * empresaId = ES UNA VARIABLE TEMPORAL que sera quitada cuando exista la variable de sesión que de el id de la empresa/persona
   * table = ES UNA VARIABLE TEMPORAL que sera quitada cuando exista la variable de sesión que defina si se ingreso como empresa o como persona mostrando empresas o personas en el carrousel-
   */
  const table = 'Personas';
  const url = 'http://localhost:3000/api/v1/';
  const { user } = useAuth();
  const [contador, setContador] = useState(0);
  const [data, setData] = useState([]);
  const [size, setSize] = useState(0);
  const [show, setShow] = useState(false);
  const empresaId =  1;//variable temporal mientras se implementa la variable de sesión
  /**Este efecto llama a cada persona mostrada en la carta */
  useEffect(() => {
    fetchData();
  }, [contador]);

  /**Este efecto llama a todos los elementos de la columna personas para poder calcular la cantidad total de personas */
  useEffect(() => {
    fetchPersonas();
  }, [user.token]);
    /**La función fetchDPersonas  define la cantidad de personas a ser mostradas en el carrousel*/
  const fetchPersonas = async () => {
    try {
      const response = await axios.get(url+table, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const jsonData = response.data;
      setSize((jsonData.message.length)-1);
    } catch (error) {
      console.log('Ocurrió un error en la consulta', error);
    }
  };
  /**La función fetchData selecciona la persona actual en el carrousel. */
  const fetchData = async () => {
    try {
     
      const response = await axios.get(url+table+'/?id='+{contador}, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      
      const jsonData = response.data.message[contador];
      setData(jsonData);

    } catch (error) {
      console.log('Ocurrió un error en la consulta ' + error.message);
    }
  };
  /**La función resetear contador pone los limites superiores e inferiores del carrousel para saber en donde volver a iniciar la muestra de individuos. */
  const resetearContador = (value) => {
    switch(value){
      case 1: 
      if(contador > (size) || contador === size){
        setContador(0);
      }
      else {
        setContador(contador + value);
      }
      break;
      case -1:
        if(contador === 0){
          setContador(size);
        }
        else {
          setContador(contador + value);
        }
      break;
    }
   
  };
  /**La función info muestra la información correspondiente a personas o empresas dependiendo del tipo de usuario que ingresa a la sesión */
  const InfoTitular = ({base}) => {
    if(base == 'Empresas'){
      return(
        <h3>
          {data.nombre_empresa}
        </h3>)
      
    }
    else if(base== 'Personas'){
      return(
      <h3>
        {data.nombre_persona}&nbsp;{data.apellido_persona}
      </h3>);
    }
  };
  const InfoModal = ({base}) => {
    if(base == 'Empresas'){
      return ( <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          {data.nombre_empresa}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          La empresa {data.nombre_empresa}&nbsp;{data.apellido_persona} esta ubicada en  {data.direccion} y su numero de contacto es
           {data.telefono_empresa} adem'as su correo de contacto es {data.email}.
            <br />
            Si deseas contactar con la empresa hazlo directamente con ellos.
          </p>
        </Modal.Body>
      </Modal> 
     );
    }
    else if(base == 'Personas'){
      return(<Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          {data.nombre_persona}&nbsp;{data.apellido_persona}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          El usuario {data.nombre_persona}&nbsp;{data.apellido_persona} ofrece sus servicios en {data.precio_servicio} precio
            y cuenta con {data.calificacion} hasta la fecha.
            <br />
            Si deseas contactar con el no dudes en dar un cocoro para asignar un nuevo servicio
          </p>
        </Modal.Body>
      </Modal>
    );
    }
  };
  return (
    <>
  
      <div id="contenedorGeneral">
        <NavMenu></NavMenu>
        <InfoTitular base={table}/>
        <button className="elements"
        onClick={() => setShow(true)}>
          <img src={persona} id="imagenProfile"></img>
        </button>
        <div className="row_elements profile_icons">
          <button
            className="elements"
            onClick={() => {
            resetearContador(-1);
            }}
          >
            <FontAwesomeIcon icon={faRefresh} className="icon" id="refresh" />
          </button>
          <button className="elements" onClick={() => {
                resetearContador(1);    
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
                fk_empresa_id: empresaId,
                fk_persona_id: data.id_persona,
                nombre_servicio: "match",
                descripción: "se ha generado la solicitud del servicio"
              };
              //creación de servicio
              try {
                const response = await axios.post(url+`/Servicios`, valores);
                console.log(response);// /api/v1/persona o empresa/id
                // Handle success, update UI if necessary
              }
              catch (error) {
                console.error(error);
                // Handle errors
              }
              resetearContador(1);            
            }}
          >
            <FontAwesomeIcon icon={faHeart} className="icon" id="heart" />
          </button>
        </div>
      </div>
      <InfoModal base={table}/>
    </>
  );
};

export default ProfileCenter;