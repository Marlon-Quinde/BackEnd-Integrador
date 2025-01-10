import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Modulo, ModuloId } from './modulo';

export interface OpcionAttributes {
  opcionId: number;
  opcionDescripcion?: string;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;
  moduloId?: number;
}

export type OpcionPk = "opcionId";
export type OpcionId = Opcion[OpcionPk];
export type OpcionOptionalAttributes = "opcionId" | "opcionDescripcion" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct" | "moduloId";
export type OpcionCreationAttributes = Optional<OpcionAttributes, OpcionOptionalAttributes>;

export class Opcion extends Model<OpcionAttributes, OpcionCreationAttributes> implements OpcionAttributes {
  opcionId!: number;
  opcionDescripcion?: string;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;
  moduloId?: number;

  // Opcion belongsTo Modulo via moduloId
  modulo!: Modulo;
  getModulo!: Sequelize.BelongsToGetAssociationMixin<Modulo>;
  setModulo!: Sequelize.BelongsToSetAssociationMixin<Modulo, ModuloId>;
  createModulo!: Sequelize.BelongsToCreateAssociationMixin<Modulo>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Opcion {
    return sequelize.define('Opcion', {
    opcionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'opcion_id'
    },
    opcionDescripcion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'opcion_descripcion'
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
    },
    moduloId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modulo',
        key: 'modulo_id'
      },
      field: 'modulo_id'
    }
  }, {
    tableName: 'opcion',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "opcion_pkey",
        unique: true,
        fields: [
          { name: "opcion_id" },
        ]
      },
    ]
  }) as typeof Opcion;
  }
}
