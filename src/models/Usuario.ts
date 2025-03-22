import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  ModelDefined,
  NOW,
  Optional,
} from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/dbOrm";

export interface IUsuarioModel {
  usu_id?: number;
  usu_nombre: string;
  empresa_id: number;
  estado: boolean;
  email: string;
  password: string;
  usu_id_reg: number;
  usu_id_act: number;
  verificarPassword?: (password: string) => boolean;
}

type IUsuarioModelCrearte = Optional<IUsuarioModel, "usu_id">;

const Usuario: ModelDefined<IUsuarioModel, IUsuarioModelCrearte> = db.define(
  "usuario",
  {
    usu_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    usu_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    empresa_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usu_id_act: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    usu_id_reg: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    createdAt: {
      type: 'TIMESTAMP WITH TIME ZONE',
      defaultValue: NOW,
      allowNull: false
    },
    updatedAt: {
      type: 'TIMESTAMP WITH TIME ZONE',
      allowNull: true
    }
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
