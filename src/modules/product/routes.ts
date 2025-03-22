import { NextFunction, Request, Response, Router } from "express";
import { AuthMiddleware } from "../../middlewares/auth.middleware";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { DeleteFisicProductosController, DeleteLogicProductosController, getProductCatalog, GetProductosController, UpdateProductosController } from "./controller";

const routes = Router();

routes.get(
  "/listar",
  // AuthMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const queryParam = req.query.estado as string
      const response = await GetProductosController(req, queryParam.toUpperCase() == 'TRUE');
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

routes.get(
  "/catalog",
  // AuthMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const queryParam = Number(req.query.estado);
      const response = await getProductCatalog(queryParam);
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

routes.put("/actualizar/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const idProducto = req.params.id
    const response = await UpdateProductosController(req, Number(idProducto));
    res.status(response.code).json(response);
  } catch (error) {
    HttpResponse.fail(
      res,
      CodesHttpEnum.internalServerError,
      (error as any).toString()
    );
  }
});


routes.delete("/eliminacion-logica/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const idProducto = req.params.id
    const response = await DeleteLogicProductosController(req, Number(idProducto));
    res.status(response.code).json(response);
  } catch (error) {
    HttpResponse.fail(
      res,
      CodesHttpEnum.internalServerError,
      (error as any).toString()
    );
  }
});

routes.delete("/eliminacion-fisica/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const idProducto = req.params.id
    const response = await DeleteFisicProductosController(req, Number(idProducto));
    res.status(response.code).json(response);
  } catch (error) {
    HttpResponse.fail(
      res,
      CodesHttpEnum.internalServerError,
      (error as any).toString()
    );
  }
});

export default routes;
