// ? authServices
// ? auth_services
// ? AuthServices - PascalCase

import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { HttpResponse } from "../../utils/httpResponse";
import AuthRepository from "./repository";
import fs from "fs/promises";
import path from "path";
import jwt from "jsonwebtoken";

const userData = path.join("src", "data", "users.json");

export class AuthServices {
  private readonly _authRepository: AuthRepository;
  constructor() {
    this._authRepository = new AuthRepository();
  }

  async registerService(username: string, email: string, password: string,) {
    const existingUser = await this._authRepository.findByUsername(email);
    if (existingUser) {
      throw new Error("El usuario ya existe");
    }

    const newUser = await this._authRepository.createUser({
      username,
      password,
      email,
    });
    return HttpResponse.response(
      CodesHttpEnum.created,
      newUser,
      "Usuario creado con éxito"
    );
  }

  async loginService(email: string, password: string ) {
    const existUser = await this._authRepository.findByUsername(email)

    if (!existUser) {
      throw new Error("El usuario no existe");
    }

    if (!existUser.verificarPassword(password)) {
      throw new Error("Clave incorrecta");
    }

    const token = jwt.sign(
      { nameUser: "Miguel Burgos", mailUser: "migburl@gmail.com" },
      "my-secret-key",
      { expiresIn: 60 * 60 }
    );

    // return HttpResponse.response(
    //   CodesHttpEnum.ok,{}, "Usuario Validado"
    // );

    return HttpResponse.response(
      CodesHttpEnum.ok,
      { token },
      "Usuario Validado"
    );
  }
}
