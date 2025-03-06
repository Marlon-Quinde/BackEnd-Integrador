import { NextFunction, Request, Response, Router } from "express";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { createCategory, deleteFisicCategory, deleteLogicCategory, getCategories, updateCategory } from "./controller";

const routes = Router();

routes.post(
  "/new",
  async (req: Request, res:Response, next: NextFunction) => {
    try {
      const response = await createCategory(req);
      res.status(response.code).json(response);
    } catch ( error ) {
      HttpResponse.fail(
        res,
        CodesHttpEnum.internalServerError,
        (error as any).toString()
      );
    }
  }
);

routes.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let estado: number = Number(req.query.estado);
      const response: any = await getCategories(req, estado)
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


routes.put("/actualizar", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await updateCategory(req);
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
    const response = await deleteLogicCategory(req, Number(idProducto));
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
    const response = await deleteFisicCategory(req, Number(idProducto));
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
