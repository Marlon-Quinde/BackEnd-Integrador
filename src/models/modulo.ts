import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Opcion, OpcionId } from './opcion';

export interface ModuloAttributes {
  moduloId: number;
  moduloDescripcion?: string;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type ModuloPk = "moduloId";
export type ModuloId = Modulo[ModuloPk];
export type ModuloOptionalAttributes = "moduloId" | "moduloDescripcion" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type ModuloCreationAttributes = Optional<ModuloAttributes, ModuloOptionalAttributes>;

export class Modulo extends Model<ModuloAttributes, ModuloCreationAttributes> implements ModuloAttributes {
  moduloId!: number;
  moduloDescripcion?: string;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;

  // Modulo hasMany Opcion via moduloId
  opcions!: Opcion[];
  getOpcions!: Sequelize.HasManyGetAssociationsMixin<Opcion>;
  setOpcions!: Sequelize.HasManySetAssociationsMixin<Opcion, OpcionId>;
  addOpcion!: Sequelize.HasManyAddAssociationMixin<Opcion, OpcionId>;
  addOpcions!: Sequelize.HasManyAddAssociationsMixin<Opcion, OpcionId>;
  createOpcion!: Sequelize.HasManyCreateAssociationMixin<Opcion>;
  removeOpcion!: Sequelize.HasManyRemoveAssociationMixin<Opcion, OpcionId>;
  removeOpcions!: Sequelize.HasManyRemoveAssociationsMixin<Opcion, OpcionId>;
  hasOpcion!: Sequelize.HasManyHasAssociationMixin<Opcion, OpcionId>;
  hasOpcions!: Sequelize.HasManyHasAssociationsMixin<Opcion, OpcionId>;
  countOpcions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Modulo {
    return sequelize.define('Modulo', {
    moduloId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'modulo_id'
    },
    moduloDescripcion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'modulo_descripcion'
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    fechaHoraReg: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'fecha_hora_reg'
    },
    fechaHoraAct: {
      type: DataTypes.TIME,
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
    tableName: 'modulo',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "modulo_pkey",
        unique: true,
        fields: [
          { name: "modulo_id" },
        ]
      },
    ]
  }) as typeof Modulo;
  }
}
