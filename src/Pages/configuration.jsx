import React,{ useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare,faTrash } from "@fortawesome/free-solid-svg-icons";
import NavMenu from "./nav";
//import persona from "../assets/persona.png";
import ConfigurationElement from "./configurationPages/configurationElement";
import ConfigurationPassword from "./configurationPages/configurationPassword";
import "../css/configuration.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import axios  from "axios";
import { useAuth } from "./AuthContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



const showDatos = () => {
  const url = 'https://tinderhabilidadesapiv1.fly.dev/api/v1';
  const {user} = useAuth();
  
  const [usuario, setUsuario] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  //const [nombre,setNombre] = useState('');
  //const [direccion,setDireccion] = useState('');
  //const [operation,setOperation] = useState(1);
  //const [title,setTitle] = useState('');

  useEffect(()=>{
    const getUsuario = async () =>  {
      try {
        let route =''
        if (user.type == 'user') {
          route = '/Personas/'
        }else if (user.type !== 'user') {
          route = '/Empresas/'
        }
        console.log(`${url}${route}${user.id}`);
  
        const respuesta = await axios.get(`${url}${route}${user.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setUsuario(respuesta.data.message[0]);
        setIsLoading(false);
        
      //console.log(respuesta.data.message[0]);
      }catch (error) {
        console.log('Ocurrió un error en la consulta', error);
      }
    };
    getUsuario();
  },[])
  
  

  const showModal = async (id , typeUser,campo,validator, nit=undefined)=>{
    try {
      console.log(id, typeUser,campo,validator,nit);
      const MySwal = withReactContent(Swal); 
      campo != 'password' ?
      await MySwal.fire({
        html: <ConfigurationElement id={id} typeUser={typeUser} campo={campo} email={validator} nit = {typeUser == 'empresa' ? nit : undefined}/>,
        showConfirmButton: false, // Opciones personalizadas para SweetAlert2
      }) : await MySwal.fire({
        html: <ConfigurationPassword id={id} typeUser={typeUser} />,
        showConfirmButton: false, // Opciones personalizadas para SweetAlert2
      });

    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (!usuario){
    return <p>error al cargar data de usuario</p>;
  }

  return (
    <>
    <div className="App">
      <div className="container-fluid">
        <div className="row mt-1">
            <NavMenu ></NavMenu>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-lg-12 offset-0 offset-lg-12">
            <div className="table-responsive">
              
                {user && <>
                  {
                  user.type == 'user' ?
                  <>
                    <table className="table vertical-table">
                      <tbody style={{ textAlign: "center", verticalAlign: "middle" }}>
                        {console.log(usuario)}
                        <tr key={usuario.id_persona}>
                          <th className="table-active" scope="row">NOMBRE PERSONA</th>
                          <td>{usuario.nombre_persona}</td>
                          <td>
                            {/* <button onClick={()=>showModal(usuario.id_persona, typeModal,"nombre_persona" )} className="btn btn-warning" data-bs-toggle='modal' data-bs-target="#modalInfo"> */}
                            <button onClick={()=>showModal(usuario.id_persona, user.type,"nombre_persona",usuario.email )} className="btn btn-warning" >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </td>

                        </tr>
                        <tr>
                          <th className="table-active" scope="row">APELLIDO PERSONA</th>
                          <td>{usuario.apellido_persona}</td>
                          <td>
                            <button onClick={()=>showModal(usuario.id_persona, user.type,"apellido_persona",usuario.email )} className="btn btn-warning" >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </td>

                        </tr>
                        <tr>
                          <th className="table-active" scope="row">DIRECCION</th>
                          <td>{usuario.locacion}</td>
                          <td>
                            <button onClick={()=>showModal(usuario.id_persona, user.type,"locacion",usuario.email )} className="btn btn-warning" >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </td>

                        </tr>
                        <tr>
                          <th className="table-active" scope="row">PERFIL</th>
                          <td>{usuario.perfil}</td>
                          <td>
                            <button onClick={()=>showModal(usuario.id_persona, user.type,"perfil",usuario.email )} className="btn btn-warning" >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </td>

                        </tr>

                        <tr>
                          <th className="table-active" scope="row">TARIFA</th>
                          {console.log(usuario.precio_servicio)}
                          <td>{usuario.precio_servicio
                              ? parseFloat(usuario.precio_servicio).toLocaleString('es-CO', {
                                  style: 'currency',
                                  currency: 'COP',
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                })
                              :
                                'No definido'}
                          </td>
                          <td>
                            <button onClick={()=>showModal(usuario.id_persona, user.type,"precio_servicio",usuario.email )} className="btn btn-warning" >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </td>

                        </tr>
                      </tbody>
                    </table>
                    <div className="col-12">
                      <div className="input-group">
                        <div style={{backgroundColor: "#e5e5e5", fontWeight:"bold" }} className="input-group-text ">CONTRASEÑA</div>
                          <input readOnly type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Actualizar Contraseña"/>
                          <button onClick={()=>showModal(usuario.id_persona, user.type,"password",usuario.password )} className="btn btn-warning" >
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </button>
                        </div>         
                        <div className="input-group">
                          <div style={{backgroundColor: "#e5e5e5", fontWeight:"bold" }} className="input-group-text ">ESTADO DE LA CUENTA</div>
                          <input readOnly type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder={usuario.status}/>
                          {/* <button className="btn btn-danger">
                            Eliminar cuenta  &nbsp; <FontAwesomeIcon icon={faTrash} />
                          </button> */}
                        </div>                        
                    </div>
                  </>: <>
                    <table className="table vertical-table">
                      <tbody style={{ textAlign: "center", verticalAlign: "middle" }}>
                        {console.log(usuario)}
                        <tr key={usuario.id}>
                          <th className="table-active" scope="row">NOMBRE EMPRESA</th>
                          <td>{usuario.nombre_empresa}</td>
                          <td>
                          <button onClick={()=>showModal(usuario.id, user.type,"nombre_empresa",usuario.email,usuario.nit )} className="btn btn-warning" >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </td>

                        </tr>
                        <tr>
                          <th className="table-active" scope="row">NIT</th>
                          <td>{usuario.nit}</td>
                          <td> </td>

                        </tr>
                        <tr>
                          <th className="table-active" scope="row">CORREO ELECTRONICO</th>
                          <td>{usuario.email}</td>
                          <td></td>

                        </tr>
                        <tr>
                          <th className="table-active" scope="row">DIRECCION</th>
                          <td>{usuario.direccion}</td>
                          <td>
                            <button onClick={()=>showModal(usuario.id, user.type,"direccion",usuario.email,usuario.nit )} className="btn btn-warning" >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </td>

                        </tr>
                        <tr>
                          <th className="table-active" scope="row">TELEFONO</th>
                          <td>{usuario.telefono_empresa}</td>
                          <td>
                            <button onClick={()=>showModal(usuario.id, user.type,"telefono_empresa",usuario.email,usuario.nit )} className="btn btn-warning" >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </td>

                        </tr>

                      </tbody>
                    </table>
                    <div className="col-12">
                    <div className="input-group">
                      <div style={{backgroundColor: "#e5e5e5", fontWeight:"bold" }} className="input-group-text ">CONTRASEÑA</div>
                        <input readOnly type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Actualizar Contraseña"/>
                        <button onClick={()=>showModal(usuario.id, user.type,"password",usuario.password )} className="btn btn-warning" >
                              <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                      </div>    
                        
                      <div className="input-group">
                        <div style={{backgroundColor: "#e5e5e5", fontWeight:"bold" }} className="input-group-text ">ESTADO DE LA CUENTA</div>
                        <input readOnly type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder={usuario.estatus}/>
                        {/* <button className="btn btn-danger">
                          Eliminar cuenta &nbsp; <FontAwesomeIcon icon={faTrash} />
                        </button> */}
                      </div>                        
                    </div>
                  </>
              
                }
                </>}             
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default showDatos


