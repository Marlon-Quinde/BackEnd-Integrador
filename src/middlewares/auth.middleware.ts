import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../utils/httpResponse";
import { CodesHttpEnum } from "../enums/codesHttpEnum";
import jwt from 'jsonwebtoken';
import { PUBLIC_KEY } from "../environments/env";
import { IToken } from "../interfaces/Token.interface";

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const existeToken = req.headers.authorization;

    if (!existeToken) {
      HttpResponse.fail(
        res,
        CodesHttpEnum.forbidden,
        null,
        "Debe enviar un token."
      );
    }

    const token = existeToken!.split(' ')[1]

    const decoded: IToken = jwt.verify(token, PUBLIC_KEY) as any

    // ? Implementar validacion por fecha de expiracion del token
    const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
    if(decoded.exp < currentTime){
      HttpResponse.fail(
        res,
        CodesHttpEnum.forbidden,
        null,
        "Token expirado vuelva a iniciar sesion nuevamente."
      );
    }
    
    next()
  } catch (error) {
    throw error;
  }
};
