import { IUsuarioModel } from '../models/Usuario';

export interface IToken extends IUsuarioModel {
    iat: number,
    exp: number

}