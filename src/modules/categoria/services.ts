import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { ICategoriaModel } from "../../models/Categoria";
import { HttpResponse } from "../../utils/httpResponse";
import CateogoriaRepository from "./repository";

export class CategoryService {
  private readonly _categoriaRepository: CateogoriaRepository;
  constructor() {
    this._categoriaRepository = new CateogoriaRepository();
  }

  async createCategory(payload: ICategoriaModel) {
    try {
      await this._categoriaRepository.createCategory(payload);
      return HttpResponse.response(CodesHttpEnum.ok);
    } catch (error) {
      throw error;
    }
  }

  async getCategories(estado: number) {
    try {
      const productos = await this._categoriaRepository.GetCategories(estado);
      return HttpResponse.response(CodesHttpEnum.ok, productos);
    } catch (error) {
      throw error;
    }
  }

  async updateCategory(payload: ICategoriaModel) {
    try {
      const category = await this._categoriaRepository.findCategoryById(payload.categoria_id!);
      if (!category) {
        return HttpResponse.response(
          CodesHttpEnum.notFound,
          null,
          `No existe categoria con el id: ${payload.categoria_id}`
        );
      }

      if (!category.dataValues.estado) {
        return HttpResponse.response(
          CodesHttpEnum.forbidden,
          null,
          `No puede editar el producto porque se encuentra inactivo`
        );
      }

      const updateProduct =
        await this._categoriaRepository.updateCategory(payload.categoria_id!, payload);

      // ? if(!0)
      if(!updateProduct?.length){
        return HttpResponse.response(
            CodesHttpEnum.notModified,
            null,
            `Error al actualizar el producto con id ${payload.categoria_id}`
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

  async DeleteLogicCategory(id: number) {
    try {
      const producto = await this._categoriaRepository.findCategoryById(id);

      if (!producto) {
        return HttpResponse.response(
          CodesHttpEnum.notFound,
          null,
          `No existe un producto con el id: ${id}`
        );
      }


      const updateProduct =
        await this._categoriaRepository.DeleteLogicCategoryId(id);

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

  async deleteFisicCategory(id: number) {
    try {
      const producto = await this._categoriaRepository.findCategoryById(id);

      if (!producto) {
        return HttpResponse.response(
          CodesHttpEnum.notFound,
          null,
          `No existe un producto con el id: ${id}`
        );
      }


      const updateProduct =
        await this._categoriaRepository.DeleteFisicCategoryById(id);

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
