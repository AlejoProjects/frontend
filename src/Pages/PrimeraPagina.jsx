import { Link } from "react-router-dom";
import "../css/primeraPagina.css"
const clasificador = () => {

return(
    <>
        <div id="divisorPrincipal">
        <Link to={"/home/empresa"}>
            <h1>Empresas</h1>
        </Link>
        <Link to={"/home/usuario"}>
            <h1>Usuario</h1>
        </Link>
        <Link to ={"/wilsonModal"}>
            <h1>Wilson</h1>     
        </Link> 
        </div>
    
    </>
)
}

export default clasificador;