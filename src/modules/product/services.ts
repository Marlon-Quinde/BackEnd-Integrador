import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { HttpResponse } from "../../utils/httpResponse";
import ProductRepository from "./repository";

export class ProductoService {

    private readonly _productoRepository: ProductRepository
    constructor() {
        this._productoRepository = new ProductRepository()
    }

    async GetProductosServices(){
        try {
            const productos = await this._productoRepository.GetProductsRepository()
            return HttpResponse.response(CodesHttpEnum.ok, productos)
        } catch (error) {
            throw error
        }
    }
}