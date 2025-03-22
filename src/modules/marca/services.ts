import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { IMarcaModel } from "../../models/marca";
import { HttpResponse } from "../../utils/httpResponse";
import CateogoriaRepository from "./repository";

export class BrandService {
  private readonly _MarcaRepository: CateogoriaRepository;
  constructor() {
    this._MarcaRepository = new CateogoriaRepository();
  }

  async createBrand(payload: IMarcaModel) {
    try {
      await this._MarcaRepository.createBrand(payload);
      return HttpResponse.response(CodesHttpEnum.ok)
    } catch (error) {
      throw error;
    }
  }

  async getBrands(estado?: number) {
    try {
      const Marcas = await this._MarcaRepository.GetBrands(estado);
     
      return HttpResponse.response(CodesHttpEnum.ok, Marcas);
    } catch (error) {
      throw error;
    }
  }

  async updateBrand(payload: IMarcaModel) {
    try {
      const Brand = await this._MarcaRepository.findBrandById(payload.marca_id!);
      if (!Brand) {
        return HttpResponse.response(
          CodesHttpEnum.notFound,
          null,
          `No existe Marca con el id: ${payload.marca_id}`
        );
      }

      if (!Brand.dataValues.estado) {
        return HttpResponse.response(
          CodesHttpEnum.forbidden,
          null,
          `No puede editar marca porque se encuentra inactivo`
        );
      }

      const updateProduct =
        await this._MarcaRepository.updateBrand(payload.marca_id!, payload);

      // ? if(!0)
      if(!updateProduct?.length){
        return HttpResponse.response(
            CodesHttpEnum.notModified,
            null,
            `Error al desactivar marca con id ${payload.marca_id}`
          );
      }

      return HttpResponse.response(
        CodesHttpEnum.ok,
        null,
        `Marca desactivada correctamente`
      );
    } catch (error) {
      throw error;
    }
  }

  async DeleteLogicBrand(id: number) {
    try {
      const producto = await this._MarcaRepository.findBrandById(id);

      if (!producto) {
        return HttpResponse.response(
          CodesHttpEnum.notFound,
          null,
          `No existe un producto con el id: ${id}`
        );
      }


      const updateProduct =
        await this._MarcaRepository.DeleteLogicBrandId(id);

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
}
