import { Router } from "express";
import {
  obtenerMusicales,
  obtenerMusicalPorId,
  crearMusical,
  actualizarMusical,
  eliminarMusical,
} from "../controllers/musicalController";

const router = Router();

router.get("/", obtenerMusicales);
router.get("/:id", obtenerMusicalPorId);
router.post("/", crearMusical);
router.put("/:id", actualizarMusical);
router.delete("/:id", eliminarMusical);

export default router;