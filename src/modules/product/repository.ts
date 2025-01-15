import { Producto } from "../../models";

export default class ProductRepository {
    async GetProductsRepository(){
        try {
            return await Producto.findAll();
        } catch (error) {
            throw error
        }
    }
}