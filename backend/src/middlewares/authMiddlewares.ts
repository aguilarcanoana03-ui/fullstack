import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export const verificarToken = (
 req: Request,
 res: Response,
 next: NextFunction
) => {
 const token = req.headers.authorization?.split(" ")[1];
 if(!token){
 return res.status(401).json({
 mensaje:"Token requerido"
 });
 }
 try{
 jwt.verify(
 token,
 "mi_clave_secreta"
 );
 next();
 }catch{
 return res.status(401).json({
 mensaje:"Token inválido"
 });
 }
};