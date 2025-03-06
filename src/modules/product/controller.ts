import { Request } from "express";
import { ProductoService } from "./services";
import { IProductoModel } from "../../models/Producto";

export const GetProductosController = async (req: Request, estadoProductos: boolean) => {
  try {
    return await new ProductoService().GetProductosServices(estadoProductos);
  } catch (error) {
    throw error;
  }
};

export const UpdateProductosController = async (req: Request, id: number) => {
  try {
    const payload = req.body as IProductoModel;
    return await new ProductoService().UpdateProductosServices(id, payload);
  } catch (error) {
    throw error;
  }
};

export const DeleteLogicProductosController = async (
  req: Request,
  id: number
) => {
  try {
    return await new ProductoService().DeleteLogicProductosServices(id);
  } catch (error) {
    throw error;
  }
};

export const DeleteFisicProductosController = async (
  req: Request,
  id: number
) => {
  try {
    return await new ProductoService().DeleteFisicProductosServices(id);
  } catch (error) {
    throw error;
  }
};

export const getProductCatalog = async () => {
  try {
    return await new ProductoService().getProductsCatalog();
  } catch ( error ) {
    if (error instanceof Error) {
      console.error(`Ha ocurrido un error al consultar el catalogo de productos: ${error.message}`);
    }
    throw error;
  }
}