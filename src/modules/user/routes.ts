import { NextFunction, Request, Response, Router } from "express";
import { jsonPlaceholderAPI } from "../../apis/jsonplaceholder.api";
import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { HttpResponse } from "../../utils/httpResponse";
import { IUserJsonAPI } from "../../interfaces/User-JsonAPI.interface";

const routes = Router();

routes.get(
  "/json-api",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const responseApi = await jsonPlaceholderAPI.get<IUserJsonAPI[]>('/users')
        const response =  HttpResponse.response(CodesHttpEnum.ok, responseApi.data)

        responseApi.data.forEach(element => {
            element.username == 'MARLON'
        });
        res.status(CodesHttpEnum.ok).json(response)
    } catch (error) {
        throw error
    }
  }
);

export default routes