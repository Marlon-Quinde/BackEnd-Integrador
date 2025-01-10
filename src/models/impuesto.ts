import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ImpuestoAttributes {
  impuestoId: number;
  impuestoDescr?: string;
  impuestoValor?: number;
}

export type ImpuestoPk = "impuestoId";
export type ImpuestoId = Impuesto[ImpuestoPk];
export type ImpuestoOptionalAttributes = "impuestoId" | "impuestoDescr" | "impuestoValor";
export type ImpuestoCreationAttributes = Optional<ImpuestoAttributes, ImpuestoOptionalAttributes>;

export class Impuesto extends Model<ImpuestoAttributes, ImpuestoCreationAttributes> implements ImpuestoAttributes {
  impuestoId!: number;
  impuestoDescr?: string;
  impuestoValor?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof Impuesto {
    return sequelize.define('Impuesto', {
    impuestoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'impuesto_id'
    },
    impuestoDescr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'impuesto_descr'
    },
    impuestoValor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'impuesto_valor'
    }
  }, {
    tableName: 'impuesto',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "impuesto_pkey",
        unique: true,
        fields: [
          { name: "impuesto_id" },
        ]
      },
    ]
  }) as typeof Impuesto;
  }
}
