import { where } from "sequelize";
import { Categoria, Producto, Marca } from "../../models";
import { IMarcaModel } from "../../models/marca";

export default class CateogoriaRepository {
  
  async createBrand(payload: IMarcaModel){
    try {
      let brandValidation = await Marca.findOne({
        where: {
          marca_descrip: payload.marca_descrip.trim()
        }
      });


      if(!brandValidation) {
        await Marca.create({
          marca_descrip: payload.marca_descrip,
          usu_id_reg: payload.usu_id_reg
        })
      } else {
        throw Error( `La marca ${payload.marca_descrip} ya se ha registrado anteriormente` )
      }
    } catch (error) {
      throw error;
    }
  }
  
  async GetBrands(estado?: number) {
    try {
      let fields = ['marca_id', 'marca_descrip', 'estado'];
      let query: any;
      if(estado !== undefined && estado !== null && !isNaN(estado)){
        query = Marca.findAll({
         attributes: fields,
         where: {
           estado,
         }
       });
      }else {
        query = Marca.findAll({
          attributes: fields
        });
      }
      return await query
    } catch (error) {
      throw error;
    }
  }

  // ? Actualizar Producto
  async updateBrand(id: number, payload: IMarcaModel) {
    try {
      return await Categoria.update(
        {
          categoria: payload.marca_descrip,
          estado: payload.estado,
          usu_id_act: payload.usu_id_act
        },
        {
          where: {
            categoria_id : payload.marca_id!,
          },
        }
      );
    } catch (error) {}
  }

  async findBrandById(id: number) {
    try {
      return await Marca.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  async DeleteLogicBrandId(id: number) {
    try {
      return await Marca.update(
        {
          estado: 0,
        },
        {
          where: {
            marca_id: id, 
          },
        }
      );
    } catch (error) {
      throw error;
    }
  }
}
