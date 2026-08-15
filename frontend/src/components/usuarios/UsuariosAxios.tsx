import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Musical {
  id: number;
  nombre: string;
  fecha: string;
}

function UsuariosAxios() {
  const [musicales, setMusicales] = useState<Musical[]>([]);

  useEffect(() => {
    cargarMusicales();
  }, []);

  const cargarMusicales = () => {
    axios
      .get("http://localhost:3000/api/musicales")
      .then(res => setMusicales(res.data))
      .catch(error => console.log(error));
  };

  const eliminarMusical = async (id: number) => {
    const confirmar = window.confirm("¿Desea eliminar este musical?");
    if (confirmar) {
      await axios.delete(`http://localhost:3000/api/musicales/${id}`);
      setMusicales(musicales.filter(musical => musical.id !== id));
    }
  };

  return (
    <div className="card">
      {musicales.length === 0 ? (
        <p>No hay musicales registrados todavía.</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>Nombre del Musical</th>
              <th>Fecha de visualización</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {musicales.map((musical) => (
              <tr key={musical.id}>
                <td>{musical.nombre}</td>
                <td>{new Date(musical.fecha).toLocaleDateString("es-AR", { timeZone: "UTC" })}</td>
                <td>
                  <Link
                    to={`/musicales/editar/${musical.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >Editar</Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarMusical(musical.id)}
                  >Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UsuariosAxios;