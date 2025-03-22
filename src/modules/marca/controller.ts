import { Request } from "express";
import { BrandService } from "./services";
import { ICategoriaModel } from "../../models/categoria";
import { IMarcaModel } from "../../models/marca";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpEnum";


export const createBrand = async (req: Request) => {
  try {
    const payload = req.body as IMarcaModel;
    return await new BrandService().createBrand(payload);
  } catch (error) {
    throw error;
  }
}

export const getBrands = async (req: Request, estado: number) => {
  try {
    return await new BrandService().getBrands(estado);
  } catch (error) {
    throw error;
  }
};

export const updateBrand = async (req: Request) => {
  try {
    const payload = req.body as IMarcaModel;
    return await new BrandService().updateBrand(payload);
  } catch (error) {
    throw error;
  }
};

export const deleteLogicBrand = async (
  req: Request,
  id: number
) => {
  try {
    return await new BrandService().DeleteLogicBrand(id);
  } catch (error) {
    throw error;
  }
};


