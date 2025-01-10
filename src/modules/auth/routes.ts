import { NextFunction, Request, Response, Router } from "express";
import { LoginController, RegisterController } from "./controller";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { loginValidation, registerValidation } from "./validations";
import { validate } from "express-validation";

const routes = Router();

 /**
   * @swagger
   * /api/auth/register:
   *   post:
   *     description: Register to the application
   *     tags: [Auth]
   *     requestBody:
   *      required: true
   *      content:
   *       application/json:
   *         schema:
   *          type: object
   *          properties:
   *            nombre:
   *              type: string
   *              descripcion: nombre
   *              example: "string"
   *            email:
   *              type: string
   *              descripcion: email
   *              example: "string"
   *            password:
   *              type: string
   *              descripcion: password
   *              example: "string"
   *            username:
   *              type: string
   *              descripcion: username
   *              example: "string"
   *            fechaNacimiento:
   *              type: string
   *              descripcion: fechaNacimiento
   *              example: "string"
   *     responses:
   *       200:
   *         description: login
   *         schema:
   *           type: object
   */
routes.post(
  "/register",
  validate(registerValidation, {}, {}) as any,
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
