import { Link } from "react-router-dom";
import NuevoUsuario from "../components/usuarios/NuevoUsuario";

function NuevoUsuarioPage() {
  return (
    <div className="page">
      <Link to="/inicio" className="btn-link">← Volver al inicio</Link>
      <NuevoUsuario />
    </div>
  );
}

export default NuevoUsuarioPage;