import { Request, Response } from "express";
import { prisma } from "../db/prisma";
import bcrypt from "bcrypt";

export const obtenerUsuarios = async (
  req: Request,
  res: Response
) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
};

export const crearUsuario = async (
  req: Request,
  res: Response
) => {
  const { nombre, correo, password } = req.body;
  const existe = await prisma.usuario.findUnique({ where: { correo } });
  if (existe) {
    return res.status(400).json({
      mensaje: "El correo ya se encuentra registrado"
    });
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const usuario = await prisma.usuario.create({
    data: {
      nombre,
      correo,
      password: passwordHash
    }
  });
  res.status(201).json(usuario);
};
export const actualizarUsuario = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);
  const { nombre, correo } = req.body;
  const usuario = await prisma.usuario.update({
    where: { id },
    data: { nombre, correo }
  });
  res.json(usuario);
};
export const eliminarUsuario = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);
  await prisma.usuario.delete({
    where: { id }
  });
  res.json({
    mensaje: "Usuario eliminado"
  });
};
export const obtenerUsuariosConMusicales = async (
  req: Request,
  res: Response
) => {
  const usuarios = await prisma.usuario.findMany({
    include: {
      musicales: true
    }
  });
  res.json(usuarios);
};