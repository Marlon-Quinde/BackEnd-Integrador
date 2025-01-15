import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  ModelDefined,
  Optional,
} from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/dbOrm";

export interface IUsuarioModel {
  id?: number;
  nombre: string;
  email: string;
  password: string;
  fechaNacimiento: string;
  estado: boolean;
  verificarPassword?: (password: string) => boolean;
}

type IUsuarioModelCrearte = Optional<IUsuarioModel, "id">;

const Usuario: ModelDefined<IUsuarioModel, IUsuarioModelCrearte> = db.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  },
  {
    hooks: {
      beforeCreate: async function (usuario: any) {
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(usuario.password, salt);
      },
    },
    scopes: {
      eliminarPassword: {
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      },
    },
  }
);
//TODO: Crear un helper
(Usuario.prototype as any).verificarPassword = function (password: string) {
  return bcrypt.compareSync(password, this.password);
};

export default Usuario;
