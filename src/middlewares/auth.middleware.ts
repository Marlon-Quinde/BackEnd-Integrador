import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../utils/httpResponse";
import { CodesHttpEnum } from "../enums/codesHttpEnum";
import jwt from 'jsonwebtoken';
import { PUBLIC_KEY } from "../environments/env";

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const existeToken = req.headers.authorization;

    if (!existeToken) {
      return HttpResponse.fail(
        res,
        CodesHttpEnum.forbidden,
        null,
        "Debe enviar un token."
      );
    }

    const token = existeToken.split(' ')[1]

    const decoded = jwt.verify(token, PUBLIC_KEY)

    // ? Implementar validacion por fecha de expiracion del token

    console.log(decoded)
    next()
  } catch (error) {
    throw error;
  }
};
