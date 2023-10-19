import NavMenu from "./NavMenu";
import Entities from "./Entidad";
import "/src/css/Servicio.css";
import {i1,i2,i3,i4,i5,i6,i7,i8,i9,i10} from "/opt/build/repo/src/assets/";
import { useEffect } from "react";
const ServiceCenter = () => {
  const url = 'http://localhost:3000/api/v1';
  useEffect(() => {
    fetchServices();
  });

  const fetchServices = async () => {
    try {
      const response = await axios.get(url+`/Servicios`, {
        /**   headers: {
            Authorization: `Bearer ${user.token}`,
          },*/
      });
      const jsonData = response.data.message[id];
      setServicios(jsonData);
    } catch (error) {
      console.log('Ocurrió un error en la consulta ' + error.message);
    }

  };

  return (
    <>
      <NavMenu></NavMenu>
      <div className="box" id="service_container">
        <div id="entities">
          <Entities imagen={i1}></Entities>
          <Entities imagen={i2}></Entities>
          <Entities imagen={i3}></Entities>
        </div>
      </div>
    </>
  );
};

export default ServiceCenter;
