import { Model, where } from "sequelize";
import { Categoria, Marca, Producto } from "../../models";
import { IProductoModel } from "../../models/producto";

export default class ProductRepository {
  // ? ListadoProductos
  async GetProductsRepository(estado: boolean) {
    try {
      
      const query = Producto.findAll({
        where: {
          estado,
        },
        include: [
          {
            foreignKey: "categoria_id",
            all: true,
            
          },
        ],
      });

      
      // const query = Producto.build()

      // if(typeof(estado) == 'boolean'){
        
      // }
      return await query
    } catch (error) {
      throw error;
    }
  }

  // ? Actualizar Producto
  async UpdateProductsRepository(id: number, payload: IProductoModel) {
    try {
      return await Producto.update(
        {
          prod_descripcion: payload.prod_descripcion,
          estado: payload.estado,
          prod_ult_precio: payload.prod_ult_precio,
          usu_id_reg: payload.usu_id_reg,
        },
        {
          where: {
            prod_id : payload.prod_id!,
          },
        }
      );
    } catch (error) {}
  }

  async FindProductById(id: number) {
    try {
      return await Producto.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  async DeleteLogicProductById(id: number) {
    try {
      return await Producto.update(
        {
          estado: 0,
        },
        {
          where: {
            prod_id: id, 
          },
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async DeleteFisicProductById(id: number) {
    try {
      return await Producto.destroy({
        where: {
          prod_id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  getProductsCatalog = async (estado?: any): Promise<any[]> => {
    try {
      let dataProduct;
      if(estado !== undefined && estado !== null && !isNaN(estado)){
        dataProduct = await Producto.findAll({
          where: {
            estado
          }
        });
      } else {
        dataProduct = await Producto.findAll();
      }

      let dataProductWithCategory: any[] = await Promise.all(

        dataProduct.map( async (product) => {
          
            let dataCategory = await Categoria.findOne({
              where: {
                categoria_id: Number(product.get('categoria_id'))
              }
            });

            let dataBrand = await Marca.findOne({
              where: {
                marca_id: Number( product.get('marca_id'))
              }
            })
          
          
          return {
            prod_id: Number(product.get('prod_id')),
            prod_descripcion : String(product.get('prod_descripcion')),
            prod_ult_precio : Number(product.get('prod_ult_precio')),
            categoria : String(dataCategory!.get('categoria')),
            categoria_id: Number(dataCategory!.get('categoria_id')),
            marca: String(dataBrand!.get('marca_descrip')),
            marca_id: Number(dataBrand!.get('marca_id'))
          }
        })
      )
      return dataProductWithCategory;
    } catch ( error ) {
      if (error instanceof Error) {
        console.error(`Error en repositorio de productos: ${ error.message }`)
      }
      throw error;
    }
  }
}
