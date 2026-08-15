import express from "express";
import cors from "cors";
import { logger } from "./middlewares/logger";
import usuarioRoutes from "./routes/usuarioRoutes";
import musicalRoutes from "./routes/musicalRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/musicales", musicalRoutes);

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

app.get("/api/mensaje", (req, res) => {
  res.json({ mensaje: "Hola desde el backend" });
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});