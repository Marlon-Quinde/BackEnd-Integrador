import { where } from "sequelize";
import { Categoria, Producto } from "../../models";
import { IProductoModel } from "../../models/Producto";
import { IMarcaModel } from "../../models/marca";
import { ICategoriaModel } from "../../models/Categoria";

export default class CateogoriaRepository {
  
  async createCategory(payload: ICategoriaModel){
    try {
      await Categoria.create({
        categoria: payload.categoria,
        usu_id_reg: payload.usu_id_reg,
      })
    } catch (error) {
      throw error;
    }
  }
  
  async GetCategories(estado: number) {
    try {
      const query = Categoria.findAll({
        where: {
          estado: 1,
        }
      });
      return await query
    } catch (error) {
      throw error;
    }
  }

  // ? Actualizar Producto
  async updateCategory(id: number, payload: ICategoriaModel) {
    try {
      return await Categoria.update(
        {
          categoria: payload.categoria,
          estado: payload.estado,
          usu_id_act: payload.usu_id_act
        },
        {
          where: {
            categoria_id : payload.categoria_id!,
          },
        }
      );
    } catch (error) {}
  }

  async findCategoryById(id: number) {
    try {
      return await Categoria.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  async DeleteLogicCategoryId(id: number) {
    try {
      return await Categoria.update(
        {
          estado: 0,
        },
        {
          where: {
            categoria_id: id, 
          },
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async DeleteFisicCategoryById(id: number) {
    try {
      return await Categoria.destroy({
        where: {
          categoria_id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
