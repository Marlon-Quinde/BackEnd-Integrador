import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FormaPago, FormaPagoId } from './forma-pago';
import type { MovimientoCab, MovimientoCabId } from './movimiento-cab';

export interface MovimientoDetPagosAttributes {
  movidetPagoId: number;
  movicabId?: number;
  fpagoId?: number;
  valorPagado?: number;
  industriaId?: number;
  lote?: string[];
  voucher?: string;
  tarjetacredId?: number;
  bancoId?: number;
  comprobanteId?: number;
  fechaPago?: string;
  clienteId?: number;
}

export type MovimientoDetPagosPk = "movidetPagoId";
export type MovimientoDetPagosId = MovimientoDetPagos[MovimientoDetPagosPk];
export type MovimientoDetPagosOptionalAttributes = "movidetPagoId" | "movicabId" | "fpagoId" | "valorPagado" | "industriaId" | "lote" | "voucher" | "tarjetacredId" | "bancoId" | "comprobanteId" | "fechaPago" | "clienteId";
export type MovimientoDetPagosCreationAttributes = Optional<MovimientoDetPagosAttributes, MovimientoDetPagosOptionalAttributes>;

export class MovimientoDetPagos extends Model<MovimientoDetPagosAttributes, MovimientoDetPagosCreationAttributes> implements MovimientoDetPagosAttributes {
  movidetPagoId!: number;
  movicabId?: number;
  fpagoId?: number;
  valorPagado?: number;
  industriaId?: number;
  lote?: string[];
  voucher?: string;
  tarjetacredId?: number;
  bancoId?: number;
  comprobanteId?: number;
  fechaPago?: string;
  clienteId?: number;

  // MovimientoDetPagos belongsTo FormaPago via fpagoId
  fpago!: FormaPago;
  getFpago!: Sequelize.BelongsToGetAssociationMixin<FormaPago>;
  setFpago!: Sequelize.BelongsToSetAssociationMixin<FormaPago, FormaPagoId>;
  createFpago!: Sequelize.BelongsToCreateAssociationMixin<FormaPago>;
  // MovimientoDetPagos belongsTo MovimientoCab via movicabId
  movicab!: MovimientoCab;
  getMovicab!: Sequelize.BelongsToGetAssociationMixin<MovimientoCab>;
  setMovicab!: Sequelize.BelongsToSetAssociationMixin<MovimientoCab, MovimientoCabId>;
  createMovicab!: Sequelize.BelongsToCreateAssociationMixin<MovimientoCab>;

  static initModel(sequelize: Sequelize.Sequelize): typeof MovimientoDetPagos {
    return sequelize.define('MovimientoDetPagos', {
    movidetPagoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'movidet_pago_id'
    },
    movicabId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'movimiento_cab',
        key: 'movicab_id'
      },
      field: 'movicab_id'
    },
    fpagoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'forma_pago',
        key: 'fpago_id'
      },
      field: 'fpago_id'
    },
    valorPagado: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'valor_pagado'
    },
    industriaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'industria_id'
    },
    lote: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    voucher: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tarjetacredId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'tarjetacred_id'
    },
    bancoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'banco_id'
    },
    comprobanteId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'comprobante_id'
    },
    fechaPago: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_pago'
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'cliente_id'
    }
  }, {
    tableName: 'movimiento_det_pagos',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "movimiento_det_pagos_pkey",
        unique: true,
        fields: [
          { name: "movidet_pago_id" },
        ]
      },
    ]
  }) as typeof MovimientoDetPagos;
  }
}
