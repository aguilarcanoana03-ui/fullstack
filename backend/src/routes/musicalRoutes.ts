import { Router } from "express";
import {
  obtenerMusicales,
  obtenerMusicalPorId,
  crearMusical,
  actualizarMusical,
  eliminarMusical,
} from "../controllers/musicalController";
import { verificarToken } from "../middlewares/authMiddlewares";

const router = Router();

router.get("/", verificarToken, obtenerMusicales); //agrego la verificacion del token
router.get("/:id", obtenerMusicalPorId);
router.post("/", crearMusical);
router.put("/:id", actualizarMusical);
router.delete("/:id", eliminarMusical);

export default router;