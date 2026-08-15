import { useState } from "react";
import axios from "axios";

function NuevoUsuario() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");

  const guardar = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/musicales", { nombre, fecha, usuarioId: 1 });
      alert("Nuevo musical registrado con éxito");
    } catch (error) {
      console.error(error);
      alert("Error al guardar. Mirá la consola para más detalles.");
    }
  };

  return (
    <form onSubmit={guardar} className="card">
      <h2>Nuevo Musical</h2>
      <div className="form-field">
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Nombre del Musical"
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
      <button type="submit" className="btn-primary">Guardar</button>
    </form>
  );
}

export default NuevoUsuario;