import { Joi } from "express-validation";
import { IUsuarioModel } from "../../models/usuario";
import { ILogin } from "../../interfaces/Auth.interface";

export const LoginValidation = {
    body: Joi.object<ILogin>({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .regex(/[a-zA-Z0-9]{3,30}/)
        .required(),
    }),
}


export const RegistrarValidation = {
    body: Joi.object<IUsuarioModel>({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .regex(/[a-zA-Z0-9]{3,30}/)
        .required(),
      usu_nombre: Joi.string()
        .required()
    }),
}