
import path from 'path';
import { IUsuarioModel } from "../../models/Usuario";
import { Usuario } from "../../models/index";


export default class UsuarioRepository {

    async CreateUser(payload: IUsuarioModel) {
        try {
            return await Usuario.create(payload)
        } catch (error) {
            throw error
        }
    }

    async FindByEmail(email: string) {
        try {
            return await Usuario.findOne({
                where: {
                    email
                }
            })
        } catch (error) {
            throw error
        }
        
    }

    

}