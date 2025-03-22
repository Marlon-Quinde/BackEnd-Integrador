
import { Request } from "express";
import { ILogin } from "../../interfaces/Auth.interface";
import { IUsuarioModel } from "../../models/usuario";
import { AuthServices } from "./services";

export const RegisterController = async (req: Request) => {
    try {
        const payload = req.body as IUsuarioModel
        return await new AuthServices().RegisterService(payload)
    } catch (error) {
        throw error
    }
}

export const LoginController = async (req: Request) => {
    try{
        const {email, password} = req.body as ILogin
        return await new AuthServices().LoginService(email, password)
    }catch (error){
        throw error
    }

}



