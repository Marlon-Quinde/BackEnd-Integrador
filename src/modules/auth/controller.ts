import { Request } from "express";
import { UserI, ICredencial } from "../../interfaces/Auth.interface";
import { AuthServices } from "./services";
import { UserAttributes } from "../../models/User";
import { UsuarioAttributes } from "../../models/usuario";

export const RegisterController = async (req: Request) => {
    try {
        const payload = req.body as UsuarioAttributes
        return await new AuthServices().registerService(payload)
    } catch (error) {
        throw error
    }
}

export const LoginController = async (req: Request) => {
    try{
        const {username, password} = req.body as ICredencial
        return await new AuthServices().loginService(username, password)
    }catch (error){
        throw error
    }

}



