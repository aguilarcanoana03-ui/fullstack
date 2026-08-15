import { Request, Response } from "express";
import { prisma } from "../db/prisma";

export const obtenerMusicales = async (
  req: Request,
  res: Response
) => {
  const musicales = await prisma.musical.findMany();
  res.json(musicales);
};

export const crearMusical = async (
  req: Request,
  res: Response
) => {
  const { nombre, fecha, usuarioId } = req.body;
  const musical = await prisma.musical.create({
    data: {
      nombre,
      fecha: new Date(fecha),
      usuarioId: Number(usuarioId),
    },
  });
  res.status(201).json(musical);
};

export const actualizarMusical = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);
  const { nombre, fecha, usuarioId } = req.body;
  const musical = await prisma.musical.update({
    where: { id },
    data: {
      nombre,
      fecha: new Date(fecha),
      ...(usuarioId !== undefined && { usuarioId: Number(usuarioId) }),
    },
  });
  res.json(musical);
};

export const eliminarMusical = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);
  await prisma.musical.delete({
    where: { id }
  });
  res.json({
    mensaje: "Musical eliminado"
  });
};

export const obtenerMusicalPorId = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);
  const musical = await prisma.musical.findUnique({
    where: { id }
  });
  if (!musical) {
    return res.status(404).json({ mensaje: "Musical no encontrado" });
  }
  res.json(musical);
};