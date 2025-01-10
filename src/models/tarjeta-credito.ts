import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Industria, IndustriaId } from './industria';

export interface TarjetaCreditoAttributes {
  tarjetaId: number;
  tarjetaDescripcion?: string;
  industriaId?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAc?: number;
}

export type TarjetaCreditoPk = "tarjetaId";
export type TarjetaCreditoId = TarjetaCredito[TarjetaCreditoPk];
export type TarjetaCreditoOptionalAttributes = "tarjetaId" | "tarjetaDescripcion" | "industriaId" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAc";
export type TarjetaCreditoCreationAttributes = Optional<TarjetaCreditoAttributes, TarjetaCreditoOptionalAttributes>;

export class TarjetaCredito extends Model<TarjetaCreditoAttributes, TarjetaCreditoCreationAttributes> implements TarjetaCreditoAttributes {
  tarjetaId!: number;
  tarjetaDescripcion?: string;
  industriaId?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAc?: number;

  // TarjetaCredito belongsTo Industria via tarjetaId
  tarjetum!: Industria;
  getTarjetum!: Sequelize.BelongsToGetAssociationMixin<Industria>;
  setTarjetum!: Sequelize.BelongsToSetAssociationMixin<Industria, IndustriaId>;
  createTarjetum!: Sequelize.BelongsToCreateAssociationMixin<Industria>;

  static initModel(sequelize: Sequelize.Sequelize): typeof TarjetaCredito {
    return sequelize.define('TarjetaCredito', {
    tarjetaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'industria',
        key: 'industria_id'
      },
      field: 'tarjeta_id'
    },
    tarjetaDescripcion: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: "NULL",
      field: 'tarjeta_descripcion'
    },
    industriaId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'industria_id'
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
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'usu_id_reg'
    },
    usuIdAc: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'usu_id_ac'
    }
  }, {
    tableName: 'tarjeta_credito',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "tarjeta_credito_pkey",
        unique: true,
        fields: [
          { name: "tarjeta_id" },
        ]
      },
    ]
  }) as typeof TarjetaCredito;
  }
}
