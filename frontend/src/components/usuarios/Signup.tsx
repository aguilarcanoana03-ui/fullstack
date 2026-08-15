import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const registrar = async () => {
    setError("");
    try {
      await axios.post("http://localhost:3000/api/usuarios", {
        nombre,
        correo,
        password,
      });
      navigate("/login");
    } catch (err) {
      console.error(err);
      if (axios.isAxiosError(err) && err.response?.data?.mensaje) {
        setError(err.response.data.mensaje);
      } else {
        setError("No se pudo registrar. Verificá los datos e intentá de nuevo.");
      }
    }
  };

  return (
    <div>
      <h2>Registrarse</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={registrar}>Registrarse</button>
    </div>
  );
}

export default Signup;