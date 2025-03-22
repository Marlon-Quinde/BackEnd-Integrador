import { where } from "sequelize";
import { Categoria, Producto } from "../../models";
import { IProductoModel } from "../../models/producto";
import { IMarcaModel } from "../../models/marca";
import { ICategoriaModel } from "../../models/categoria";

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
  
  async GetCategories(estado?: number) {
    try {
      let fields = ['categoria_id', 'categoria', 'estado'];
      let query: any;
      if(estado !== undefined && estado !== null && !isNaN(estado)){
        query = Categoria.findAll({
         attributes: fields,
         where: {
           estado,
         }
       });
      }else {
        query = Categoria.findAll({
          attributes: fields
        });
      }
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
