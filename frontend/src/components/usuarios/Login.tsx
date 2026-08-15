import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const ingresar = async () => {
    const respuesta = await axios.post(
      "http://localhost:3000/api/auth/login",
      { correo, password }
    );
    localStorage.setItem("token", respuesta.data.token);
    navigate("/usuarios");
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
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
    </div>
  );
}

export default Login;