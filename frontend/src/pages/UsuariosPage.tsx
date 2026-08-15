import { Link, useNavigate } from 'react-router-dom'
import UsuariosAxios from '../components/usuarios/UsuariosAxios'
import '../App.css'

function UsuariosPage() {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="page">
      <div className="top-bar">
        <h1>Musicales vistos</h1>
        <Link to="/nuevo" className="btn-primary">Nuevo Musical</Link>
        <button onClick={cerrarSesion} className="btn btn-secondary">
          Cerrar sesión
        </button>
      </div>
      <UsuariosAxios />
    </div>
  )
}

export default UsuariosPage