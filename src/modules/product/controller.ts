import { Request } from "express";
import { ProductoService } from "./services";



export const GetProductosController = async (req: Request) =>  {
    try {
        return await new ProductoService().GetProductosServices();
    } catch (error) {
        throw error
    }
}