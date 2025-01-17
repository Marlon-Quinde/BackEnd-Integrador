import { NextFunction, Request, Response, Router } from "express";
import { jsonPlaceholderAPI } from "../../apis/jsonplaceholder.api";
import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { HttpResponse } from "../../utils/httpResponse";
import { IUserJsonAPI } from "../../interfaces/User-JsonAPI.interface";
import { JsonApiUsersAxiosController, JsonApiUsersFetchController } from "./controller";

const routes = Router();

routes.get(
  "/json-api-axios",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await JsonApiUsersAxiosController(req)
        res.status(response.code).json(response)
    } catch (error) {
        throw error
    }
  }
);

routes.get(
  "/json-api-fetch",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await JsonApiUsersFetchController(req)
        res.status(response.code).json(response)
    } catch (error) {
        throw error
    }
  }
);

export default routes