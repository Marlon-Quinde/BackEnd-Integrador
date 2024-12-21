import { Request } from "express";
import { UserI, ICredencial } from "../../interfaces/Auth.interface";
import { AuthServices } from "./services";

export const RegisterController = async (req: Request) => {
    try {
        const {username, password} = req.body as UserI
        return await new AuthServices().registerService(username, password)
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



