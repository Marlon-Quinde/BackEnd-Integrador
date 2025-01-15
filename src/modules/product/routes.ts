import { NextFunction, Request, Response, Router } from "express";
import { AuthMiddleware } from "../../middlewares/auth.middleware";
import { HttpResponse } from '../../utils/httpResponse';
import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { GetProductosController } from "./controller";

const routes = Router();

routes.get(
  "/listar",
  AuthMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await GetProductosController(req);
        res.status(response.code).json(response);
    } catch (error) {
      HttpResponse.fail(
        res,
        CodesHttpEnum.internalServerError,
        (error as any).toString()
      );
    }
  }
);

export default routes;
