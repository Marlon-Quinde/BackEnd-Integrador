import { NextFunction, Request, Response, Router } from "express";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { createBrand, deleteLogicBrand, getBrands, updateBrand } from "./controller";

const routes = Router();

routes.post(
  "/new",
  async (req: Request, res:Response, next: NextFunction) => {
    try {
      const response = await createBrand(req);
      res.status(response.code).json(response);
    } catch ( error ) {
      HttpResponse.fail(
        res,
        CodesHttpEnum.badRequest,
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
      const response: any = await getBrands(req, estado)
      res.status(response.code).json(response);
    } catch (error) {
      HttpResponse.fail(
        res,
        CodesHttpEnum.badRequest,
        (error as any).toString()
      );
    }
  }
);


routes.put("/actualizar", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await updateBrand(req);
    res.status(response.code).json(response);
  } catch (error) {
    HttpResponse.fail(
      res,
      CodesHttpEnum.badRequest,
      (error as any).toString()
    );
  }
});


routes.delete("/eliminacion-logica/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const idProducto = req.params.id
    const response = await deleteLogicBrand(req, Number(idProducto));
    res.status(response.code).json(response);
  } catch (error) {
    HttpResponse.fail(
      res,
      CodesHttpEnum.badRequest,
      (error as any).toString()
    );
  }
});

export default routes;
