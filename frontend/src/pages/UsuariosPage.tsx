import { Link } from 'react-router-dom'
import UsuariosAxios from '../components/usuarios/UsuariosAxios'
import '../App.css'

function UsuariosPage() {
  return (
    <div className="page">
      <div className="top-bar">
        <h1>Musicales vistos</h1>
        <Link to="/nuevo" className="btn-primary">Nuevo Musical</Link>
      </div>
      <UsuariosAxios />
    </div>
  )
}

export default UsuariosPage