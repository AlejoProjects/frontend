//import { useState } from 'react'
import NavMenu from "./nav";
import Entities from "./entities";
import "../css/services.css";
const ServiceCenter = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <div className="box" id="service_container">
        <div id="entities">
          <Entities></Entities>
          <Entities></Entities>
          <Entities></Entities>
        </div>
      </div>
    </>
  );
};

export default ServiceCenter;
