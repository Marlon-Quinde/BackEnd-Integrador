import { Joi } from "express-validation";

export const loginValidation = {
    body: Joi.object({
      username: Joi.string()
        .required(),
      password: Joi.string()
        .regex(/[a-zA-Z0-9]{3,30}/)
        .required(),
    }),
  }

  export const registerValidation = {
    body: Joi.object({
      nombre: Joi.string()
        .required(),
      username: Joi.string()
        .required(),
      password: Joi.string()
        .regex(/[a-zA-Z0-9]{3,30}/)
        .required(),
      email: Joi.string().email().required(),
      fechaNacimiento: Joi.string().required()
    }),
  }