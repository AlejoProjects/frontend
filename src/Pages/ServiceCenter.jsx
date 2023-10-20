import NavMenu from "./NavMenu";
import Entities from "./Entidad";
import "/src/css/Servicio.css";
import axios from "axios";
import { useEffect } from "react";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const ServiceCenter = () => {
  const url = "https://tinderhabilidadesapiv1.fly.dev/api/v1/";
  const { user } = useAuth();
  const [servicios, setServicios] = useState([]);
  const tipo = user.type;
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios
        .get(url + `/Servicios`)
        .then((response) => {
          const jsonData = response.data.message;
          setServicios(jsonData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.log("Ocurrió un error en la consulta " + error.message);
    }
  };
  const createEntities = (usuario) => {
    let informacion = [];
    switch (usuario) {
      case "user":
        for (let i = 0; i < servicios.length; i++) {
          if (servicios[i].id_persona == user.id) {
            informacion.push(servicios[i]);
          }
        }
        break;
      case "empresa":
        for (let i = 0; i < servicios.length; i++) {
          if (servicios[i].id == user.id) {
            informacion.push(servicios[i]);
          }
        }

        break;
    }
    return informacion;
  };
  const mostrarServicios = () => {
    const usuariosPorMostrar = createEntities(tipo);

    return usuariosPorMostrar.map((usuario, index) => (
      <Entities key={index} datos={usuario} cual={tipo} />
    ));
  };

  return (
    <>
      <NavMenu></NavMenu>
      <div className="box whole" id="service_container">
        <div id="entities">{mostrarServicios()}</div>
      </div>
    </>
  );
};

export default ServiceCenter;
