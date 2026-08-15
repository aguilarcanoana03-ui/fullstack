import { useEffect, useState } from "react";

function MensajeApi() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/mensaje")
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Mensaje del Backend</h2>
      <p>{mensaje || "Cargando..."}</p>
    </div>
  );
}

export default MensajeApi;