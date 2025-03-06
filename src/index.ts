import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./environments/env";
import db from "./config/dbOrm";
import * as cors from 'cors'

// ? Rutas del proyecto
import authRoutes from "./modules/auth/routes";
import productoRoutes from "./modules/product/routes";
import usuarioRoutes from "./modules/user/routes"
import categoryRoutes from "./modules/categoria/routes"
import { ValidationError } from "express-validation";


;
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.config";

const app = express();

// ? Configuracion de JSON para del proyecto 
app.use(express.json());

//Conexion a db
async function main() {
  try {
    app.use(cors.default());
    await db.authenticate();
    await db.sync({alter: true});
    console.log("conexion correcta");
  } catch (error) {
    console.log(error);
  }
}

main()
const prefix: string = "/api";

// ? Deficion de rutas por modulos
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(`${prefix}/auth`, authRoutes)
app.use(`${prefix}/productos`, productoRoutes)
app.use(`${prefix}/usuarios`, usuarioRoutes)
app.use(`${prefix}/category`, categoryRoutes)

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
    return res.status(500).json(err)
 } as any)

const port: number = Number(PORT);
app.listen(port, () => {
    console.log('El servidor esta levantado en el puerto:', port);
});
