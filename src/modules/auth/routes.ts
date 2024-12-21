import { NextFunction, Request, Response, Router } from "express";
import { LoginController, RegisterController } from "./controller";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { loginValidation } from "./validations";
import { validate } from "express-validation";

const routes = Router();

routes.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await RegisterController(req);
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

/*
interface ICredencial{
    user: string,
    password:string

}*/

routes.post(
  "/login",
  validate(loginValidation, {}, {}) as any,
  async (req: Request, res: Response) => {
    try {
      //const {user, password} = req.body as ICredencial

      // const response = await LoginController()
      // res.status(response.code).json(response)
      const response = await LoginController(req);
      res.status(response.code).json(response);
    } catch (error) {
      HttpResponse.fail(
        res,
        CodesHttpEnum.internalServerError,
        null,
        (error as any).toString()
      );
    }
  }
);

export default routes;
