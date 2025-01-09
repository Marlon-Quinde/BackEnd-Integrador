import { NextFunction, Request, Response, Router } from "express";
import { LoginController, RegisterController } from "./controller";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { loginValidation } from "./validations";
import { validate } from "express-validation";

const routes = Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Crear un usuario
 *     description: Crea un nuevo recurso en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del ejemplo.
 *                 example: "Nuevo ejemplo"
 *               description:
 *                 type: string
 *                 description: Descripción del ejemplo.
 *                 example: "Descripción detallada"
 *     responses:
 *       201:
 *         description: Ejemplo creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID del ejemplo creado.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: Nombre del ejemplo.
 *                   example: "Nuevo ejemplo"
 *       400:
 *         description: Error en la solicitud (datos inválidos).
 */

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



/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Crea un nuevo ejemplo
 *     description: Crea un nuevo recurso en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: email.
 *                 example: "string"
 *               password:
 *                 type: string
 *                 description: email.
 *                 example: "string"
 *     responses:
 *       201:
 *         description: Ejemplo creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID del ejemplo creado.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: Nombre del ejemplo.
 *                   example: "Nuevo ejemplo"
 *       400:
 *         description: Error en la solicitud (datos inválidos).
 */
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
