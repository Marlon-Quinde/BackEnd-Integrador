import { Request } from "express";
import { UserI } from "../../interfaces/Auth.interface";
import { AuthServices } from "./services";

export const RegisterController = async (req: Request) => {
    try {
        const {username, password} = req.body as UserI
        return await new AuthServices().registerService(username, password)
    } catch (error) {
        throw error
    }
}