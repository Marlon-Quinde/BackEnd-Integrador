import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { HttpResponse } from "../../utils/httpResponse";
import AuthRepository from "./repository";
import jwt from "jsonwebtoken";
import UserRepository from "../user/repository";
import { UserAttributes } from "../../models/User";
import { UsuarioAttributes } from "../../models/usuario";


export class AuthServices {
  private readonly _authRepository: AuthRepository;
  private readonly _userRepository: UserRepository
  constructor() {
    this._authRepository = new AuthRepository();
    this._userRepository = new UserRepository();
  }

  async registerService(payload: UsuarioAttributes) {
    const existingUser = await this._userRepository.FindUserByEmail(payload.email);
    if (existingUser) {
      throw new Error("El usuario ya existe");
    }

    const newUser = await this._userRepository.CreateUser(payload);
    return HttpResponse.response(
      CodesHttpEnum.created,
      newUser,
      "Usuario creado con éxito"
    );
  }

  async loginService(username: string, password: string) {
    const allUser = await this._authRepository.readUsers();
    const existUser = allUser.find((user) => user.username == username);

    if (!existUser) {
      throw new Error("El usuario no existe");
    }

    if (existUser.password !== password) {
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
