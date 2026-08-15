import { Request, Response } from "express";
import { prisma } from "../db/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (
  req: Request,
  res: Response
) => {
  const { correo, password } = req.body;

  const usuario = await prisma.usuario.findUnique({
    where: { correo }
  });

  if (!usuario) {
    return res.status(401).json({ mensaje: "Credenciales incorrectas" });
  }

  if (!usuario.password) {
    return res.status(401).json({ mensaje: "Credenciales incorrectas" });
  }

  const coincide = await bcrypt.compare(password, usuario.password);

  if (!coincide) {
    return res.status(401).json({ mensaje: "Credenciales incorrectas" });
  }

  const token = jwt.sign(
    { id: usuario.id, correo: usuario.correo },
    "mi_clave_secreta",
    { expiresIn: "1h" }
  );

  res.json({ token });
};