import { Request } from "express";
import { CategoryService } from "./services";
import { ICategoriaModel } from "../../models/categoria";


export const createCategory = async (req: Request) => {
  try {
    const payload = req.body as ICategoriaModel;
    return await new CategoryService().createCategory(payload);
  } catch (error) {
    throw error;
  }
}

export const getCategories = async (req: Request, estado: number) => {
  try {
    return await new CategoryService().getCategories(estado);
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (req: Request) => {
  try {
    const payload = req.body as ICategoriaModel;
    return await new CategoryService().updateCategory(payload);
  } catch (error) {
    throw error;
  }
};

export const deleteLogicCategory = async (
  req: Request,
  id: number
) => {
  try {
    return await new CategoryService().DeleteLogicCategory(id);
  } catch (error) {
    throw error;
  }
};

export const deleteFisicCategory = async (
  req: Request,
  id: number
) => {
  try {
    return await new CategoryService().deleteFisicCategory(id);
  } catch (error) {
    throw error;
  }
};
