import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ingresar = async () => {
    setError("");
    try {
      const respuesta = await axios.post(
        "http://localhost:3000/api/auth/login",
        { correo, password }
      );
      localStorage.setItem("token", respuesta.data.token);
      navigate("/usuarios");
    } catch (err) {
      console.error(err);
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={ingresar}>Ingresar</button>
      <p>
        ¿No tenés cuenta? <Link to="/registro">Registrate</Link>
      </p>
    </div>
  );
}

export default Login;