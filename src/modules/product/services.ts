import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { IProductoModel } from "../../models/Producto";
import { HttpResponse } from "../../utils/httpResponse";
import ProductRepository from "./repository";

export class ProductoService {
  private readonly _productoRepository: ProductRepository;
  constructor() {
    this._productoRepository = new ProductRepository();
  }

  async GetProductosServices(estadoProductos: boolean) {
    try {
      const productos = await this._productoRepository.GetProductsRepository(estadoProductos);
      return HttpResponse.response(CodesHttpEnum.ok, productos);
    } catch (error) {
      throw error;
    }
  }

  async UpdateProductosServices(id: number, payload: IProductoModel) {
    try {
      const producto = await this._productoRepository.FindProductById(id);

      if (!producto) {
        return HttpResponse.response(
          CodesHttpEnum.notFound,
          null,
          `No existe un producto con el id: ${id}`
        );
      }

      if (!producto.dataValues.estado) {
        return HttpResponse.response(
          CodesHttpEnum.forbidden,
          null,
          `No puede editar el producto porque se encuentra inactivo`
        );
      }

      const updateProduct =
        await this._productoRepository.UpdateProductsRepository(id, payload);

      // ? if(!0)
      if(!updateProduct?.length){
        return HttpResponse.response(
            CodesHttpEnum.notModified,
            null,
            `Error al actualizar el producto con id ${id}`
          );
      }

      return HttpResponse.response(
        CodesHttpEnum.ok,
        null,
        `Producto editado correctamente`
      );
    } catch (error) {
      throw error;
    }
  }

  async DeleteLogicProductosServices(id: number) {
    try {
      const producto = await this._productoRepository.FindProductById(id);

      if (!producto) {
        return HttpResponse.response(
          CodesHttpEnum.notFound,
          null,
          `No existe un producto con el id: ${id}`
        );
      }


      const updateProduct =
        await this._productoRepository.DeleteLogicProductById(id);

      // ? if(!0)
      if(!updateProduct?.length){
        return HttpResponse.response(
            CodesHttpEnum.notModified,
            null,
            `Error al inactivar el producto con id ${id}`
          );
      }

      return HttpResponse.response(
        CodesHttpEnum.ok,
        null,
        `Producto inactivado correctamente`
      );
    } catch (error) {
      throw error;
    }
  }

  async DeleteFisicProductosServices(id: number) {
    try {
      const producto = await this._productoRepository.FindProductById(id);

      if (!producto) {
        return HttpResponse.response(
          CodesHttpEnum.notFound,
          null,
          `No existe un producto con el id: ${id}`
        );
      }


      const updateProduct =
        await this._productoRepository.DeleteFisicProductById(id);

      // ? if(!0)
      if(!updateProduct){
        return HttpResponse.response(
            CodesHttpEnum.notModified,
            null,
            `Error al eliminar el producto con id ${id}`
          );
      }

      return HttpResponse.response(
        CodesHttpEnum.ok,
        null,
        `Producto eliminado correctamente`
      );
    } catch (error) {
      throw error;
    }
  }
}
