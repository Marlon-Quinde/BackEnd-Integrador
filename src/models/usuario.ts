import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import bcrypt from "bcrypt"

export interface UsuarioAttributes {
  id: number;
  nombre?: string;
  username?: string;
  password?: string;
  // empresaId?: number;
  email: string;
  fechaNacimiento?: string;
  estado?: number;
  // fechaHoraReg?: Date;
  // fechaHoraAct?: Date;
}

export type UsuarioPk = "id";
export type UsuarioId = Usuario[UsuarioPk];
export type UsuarioOptionalAttributes = "id" | "nombre" | "username"| "password" | "email" | "fechaNacimiento" | "estado" ;
export type UsuarioCreationAttributes = Optional<UsuarioAttributes, UsuarioOptionalAttributes>;

export class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  id!: number;
  nombre!: string;
  username!: string;
  password!: string;
  email!: string;
  fechaNacimiento!: string;
  estado?: number;
  // fechaHoraReg?: Date;
  // fechaHoraAct?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Usuario {
    return sequelize.define('Usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'nombre'
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'username'
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'email'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password'
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'fechaNacimiento'
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    hooks: {
        beforeCreate: async function (user: any) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        },
    },
    scopes: {
      eliminarPassword: {
          attributes: {
              exclude: ["password", "createdAt", "updateAt"]
          }
      }
    },
    tableName: 'usuario',
    schema: 'retail',
    indexes: [
      {
        name: "usuario_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof Usuario;
  }
}
