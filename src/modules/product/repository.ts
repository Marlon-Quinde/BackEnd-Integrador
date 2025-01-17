import { Producto } from "../../models";
import { IProductoModel } from "../../models/Producto";

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
            foreignKey: "idCategoria",
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
          descripcion: payload.descripcion,
          estado: payload.estado,
          nombre: payload.nombre,
          precio: payload.precio,
        },
        {
          where: {
            id,
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
          estado: false,
        },
        {
          where: {
            id,
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
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
