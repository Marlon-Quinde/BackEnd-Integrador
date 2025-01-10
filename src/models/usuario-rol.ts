import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsuarioRolAttributes {
  usuRolId: number;
  usuId?: number;
  rolId?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type UsuarioRolPk = "usuRolId";
export type UsuarioRolId = UsuarioRol[UsuarioRolPk];
export type UsuarioRolOptionalAttributes = "usuRolId" | "usuId" | "rolId" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type UsuarioRolCreationAttributes = Optional<UsuarioRolAttributes, UsuarioRolOptionalAttributes>;

export class UsuarioRol extends Model<UsuarioRolAttributes, UsuarioRolCreationAttributes> implements UsuarioRolAttributes {
  usuRolId!: number;
  usuId?: number;
  rolId?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof UsuarioRol {
    return sequelize.define('UsuarioRol', {
    usuRolId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'usu_rol_id'
    },
    usuId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'usu_id'
    },
    rolId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'rol_id'
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    fechaHoraReg: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_hora_reg'
    },
    fechaHoraAct: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_hora_act'
    },
    usuIdReg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'usu_id_reg'
    },
    usuIdAct: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'usu_id_act'
    }
  }, {
    tableName: 'usuario_rol',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "usuario_rol_pkey",
        unique: true,
        fields: [
          { name: "usu_rol_id" },
        ]
      },
    ]
  }) as typeof UsuarioRol;
  }
}
