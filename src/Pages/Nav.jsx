import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faUser,faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../css/navMenu.css";

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <ul>
        
        <li>
          <Link to={"/services"}>
            <FontAwesomeIcon icon={faComments} />
          </Link>
        </li>
        <li>
          <Link to={"/user"}>
            <FontAwesomeIcon icon={faFire} />
           
          </Link>
        </li>
        <li>
          <Link to={"/configuration"}>
            <FontAwesomeIcon icon={faUser} /> 
          </Link>
        </li>
        <li>
          <Link to={"/wilsonModal"}>
            <FontAwesomeIcon icon={faUser} /> 
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
