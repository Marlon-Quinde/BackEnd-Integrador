import { Request } from "express";
import { UsuarioServices } from "./services";


export const JsonApiUsersAxiosController = async (req: Request) => {
    try {
        return await new UsuarioServices().JsonApiUsersAxiosServices()
    } catch (error) {
        throw error
    }
}

export const JsonApiUsersFetchController = async (req: Request) => {
    try {
        return await new UsuarioServices().JsonApiUsersFetchServices()
    } catch (error) {
        throw error
    }
}