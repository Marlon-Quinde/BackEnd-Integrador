import { jsonPlaceholderAPI } from "../../apis/jsonplaceholder.api";
import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { BASE_URL_JSONPLACEHOLDER_API } from "../../environments/env";
import { IUserJsonAPI } from "../../interfaces/User-JsonAPI.interface";
import { HttpResponse } from "../../utils/httpResponse";
import UsuarioRepository from "./repository";

export class UsuarioServices {
  private readonly _usuarioRepository: UsuarioRepository;
  constructor() {
    this._usuarioRepository = new UsuarioRepository();
  }

  async JsonApiUsersAxiosServices() {
    try {
      const responseApi = await jsonPlaceholderAPI.get<IUserJsonAPI[]>(
        "/users"
      );
      return HttpResponse.response(CodesHttpEnum.ok, responseApi.data);
    } catch (error) {
      throw error;
    }
  }

  async JsonApiUsersFetchServices() {
    try {
      const responseApi = await fetch(
        `${BASE_URL_JSONPLACEHOLDER_API}/users`
      ).then(res => res.json() as unknown as IUserJsonAPI[]);
      return HttpResponse.response(CodesHttpEnum.ok, responseApi);
    } catch (error) {
      throw error;
    }
  }
}
