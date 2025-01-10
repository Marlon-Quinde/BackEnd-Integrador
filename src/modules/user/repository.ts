import db from "../../config/dbOrm";
import { initModels } from "../../models/init-models";
import User, { UserAttributes } from "../../models/User";
import { Usuario, UsuarioAttributes } from "../../models/usuario";

export default class UserRepository {

    async CreateUser(payload: UsuarioAttributes){
        try {
            return Usuario.create(payload)
        } catch (error) {
            console.log(error)
        }
    }

    async FindUserByEmail(email: string){
        try {
            return await Usuario.findOne({
                where: {
                    email
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}