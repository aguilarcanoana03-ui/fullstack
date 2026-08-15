import { Router } from "express";
import {
  obtenerUsuarios,
  obtenerUsuariosConMusicales,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../controllers/usuarioController";
import { verificarToken } from "../middlewares/authMiddlewares";

const router = Router();

router.get("/", verificarToken, obtenerUsuarios);
router.get("/con-musicales", obtenerUsuariosConMusicales);
router.post("/", crearUsuario);
router.put("/:id", actualizarUsuario);
router.delete("/:id", verificarToken, eliminarUsuario);

export default router;