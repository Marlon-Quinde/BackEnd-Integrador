import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TarjetaCredito, TarjetaCreditoCreationAttributes, TarjetaCreditoId } from './tarjeta-credito';

export interface IndustriaAttributes {
  industriaId: number;
  industriaDescripcion?: string;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type IndustriaPk = "industriaId";
export type IndustriaId = Industria[IndustriaPk];
export type IndustriaOptionalAttributes = "industriaId" | "industriaDescripcion" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type IndustriaCreationAttributes = Optional<IndustriaAttributes, IndustriaOptionalAttributes>;

export class Industria extends Model<IndustriaAttributes, IndustriaCreationAttributes> implements IndustriaAttributes {
  industriaId!: number;
  industriaDescripcion?: string;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;

  // Industria hasOne TarjetaCredito via tarjetaId
  tarjetaCredito!: TarjetaCredito;
  getTarjetaCredito!: Sequelize.HasOneGetAssociationMixin<TarjetaCredito>;
  setTarjetaCredito!: Sequelize.HasOneSetAssociationMixin<TarjetaCredito, TarjetaCreditoId>;
  createTarjetaCredito!: Sequelize.HasOneCreateAssociationMixin<TarjetaCredito>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Industria {
    return sequelize.define('Industria', {
    industriaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'industria_id'
    },
    industriaDescripcion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'industria_descripcion'
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
    tableName: 'industria',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "industria_pkey",
        unique: true,
        fields: [
          { name: "industria_id" },
        ]
      },
    ]
  }) as typeof Industria;
  }
}
