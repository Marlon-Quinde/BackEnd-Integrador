// ? authServices
// ? auth_services
// ? AuthServices - PascalCase

import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { HttpResponse } from "../../utils/httpResponse";
import AuthRepository from "./repository";
import jwt from "jsonwebtoken";
import { IUsuarioModel } from "../../models/usuario";
import UsuarioRepository from "../user/repository";
import { PUBLIC_KEY } from "../../environments/env";

export class AuthServices {
  private readonly _usuarioRepository: UsuarioRepository;
  constructor() {
    this._usuarioRepository = new UsuarioRepository();
  }

  async RegisterService(payload: IUsuarioModel) {
    try {
      const existingUser = await this._usuarioRepository.FindByEmail(
        payload.email
      );
      if (existingUser) {
        return HttpResponse.response(
          CodesHttpEnum.notFound,
          null,
          "Ya existe un usuario registrado con ese correo."
        );
      }

      const newUser = await this._usuarioRepository.CreateUser(payload);
      return HttpResponse.response(
        CodesHttpEnum.created,
        newUser,
        "Usuario creado con éxito"
      );
    } catch (error) {
      throw error;
    }
  }

  async LoginService(email: string, password: string) {
    try {
      const existeUsuario = await this._usuarioRepository.FindByEmail(email);

      if (!existeUsuario) {
        return HttpResponse.response(
          CodesHttpEnum.created,
          null,
          "No existe un usuario registrado con ese correo."
        );
      }

      const usuario = existeUsuario.dataValues;

      if (!(existeUsuario as any).verificarPassword!(password)) {
        return HttpResponse.response(
          CodesHttpEnum.created,
          null,
          "Correo o contraseña incorrecta."
        );
      }

      const token = jwt.sign(
        { username: usuario.usu_nombre, email: usuario.email },
        PUBLIC_KEY,
        { expiresIn: 60 * 60 }
      );

      return HttpResponse.response(
        CodesHttpEnum.ok,
        { token },
        "Usuario Validado"
      );
    } catch (error) {
      throw error;
    }
  }
}
