import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./environments/env";

// ? Rutas del proyecto
import authRoutes from "./modules/auth/routes";
import { ValidationError } from "express-validation";
import db from "./config/dbOrm"
import { initModels } from "./models/init-models";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swagger.config";

const app = express();

// ? Configuracion de JSON para del proyecto
app.use(express.json());

// ? Conexión con la BD
async function main() {
  try {
    await db.authenticate();
    initModels(db)
    await db.sync({ alter: true }) // ! La sincronización con el force en true, puede eliminar registros o columnas
    console.log("Conexión establecida con la BD.");
  } catch (error) {
    console.error("Ocurrio un error al conectarse con la BD:", error);
  }
}
main()

const prefix: string = "/api";

// ? Deficion de rutas por modulos
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(`${prefix}/auth`, authRoutes);

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
} as any);

const port: number = Number(PORT);
app.listen(port, () => {
  console.log("El servidor esta levantado en el puerto:", port);
});
