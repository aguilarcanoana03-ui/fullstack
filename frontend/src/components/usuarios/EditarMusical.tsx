import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface Musical {
  id: number;
  nombre: string;
  fecha: string;
}

function EditarMusical() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const obtenerMusical = async () => {
      const respuesta = await axios.get<Musical>(
        `http://localhost:3000/api/musicales/${id}`
      );
      setNombre(respuesta.data.nombre);
      setFecha(respuesta.data.fecha.slice(0, 10)); // formato yyyy-mm-dd para el input date
    };
    obtenerMusical();
  }, [id]);

  const actualizar = async () => {
    await axios.put(
      `http://localhost:3000/api/musicales/${id}`,
      { nombre, fecha }
    );
    alert("Musical actualizado correctamente");
    navigate("/usuarios"); // o "/inicio", según cuál sea tu ruta de la lista
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Editar Musical</h2>
        <div className="form-field">
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Fecha</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <button className="btn-primary" onClick={actualizar}>
          Guardar cambios
        </button>
      </div>
    </div>
  );
}

export default EditarMusical;