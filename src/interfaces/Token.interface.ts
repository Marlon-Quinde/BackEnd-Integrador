import { IUsuarioModel } from '../models/usuario';

export interface IToken extends IUsuarioModel {
    iat: number,
    exp: number

}