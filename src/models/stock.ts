import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Empresa, EmpresaId } from './empresa';
import type { Producto, ProductoId } from './producto';
import type { Sucursal, SucursalId } from './sucursal';

export interface StockAttributes {
  stockId: number;
  empresaId?: number;
  sucursalId?: number;
  prodId?: number;
  cantidadStock?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type StockPk = "stockId";
export type StockId = Stock[StockPk];
export type StockOptionalAttributes = "stockId" | "empresaId" | "sucursalId" | "prodId" | "cantidadStock" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type StockCreationAttributes = Optional<StockAttributes, StockOptionalAttributes>;

export class Stock extends Model<StockAttributes, StockCreationAttributes> implements StockAttributes {
  stockId!: number;
  empresaId?: number;
  sucursalId?: number;
  prodId?: number;
  cantidadStock?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // Stock belongsTo Empresa via empresaId
  empresa!: Empresa;
  getEmpresa!: Sequelize.BelongsToGetAssociationMixin<Empresa>;
  setEmpresa!: Sequelize.BelongsToSetAssociationMixin<Empresa, EmpresaId>;
  createEmpresa!: Sequelize.BelongsToCreateAssociationMixin<Empresa>;
  // Stock belongsTo Producto via prodId
  prod!: Producto;
  getProd!: Sequelize.BelongsToGetAssociationMixin<Producto>;
  setProd!: Sequelize.BelongsToSetAssociationMixin<Producto, ProductoId>;
  createProd!: Sequelize.BelongsToCreateAssociationMixin<Producto>;
  // Stock belongsTo Sucursal via sucursalId
  sucursal!: Sucursal;
  getSucursal!: Sequelize.BelongsToGetAssociationMixin<Sucursal>;
  setSucursal!: Sequelize.BelongsToSetAssociationMixin<Sucursal, SucursalId>;
  createSucursal!: Sequelize.BelongsToCreateAssociationMixin<Sucursal>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Stock {
    return sequelize.define('Stock', {
    stockId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'stock_id'
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'empresa',
        key: 'empresa_id'
      },
      field: 'empresa_id'
    },
    sucursalId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sucursal',
        key: 'sucursal_id'
      },
      field: 'sucursal_id'
    },
    prodId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'producto',
        key: 'prod_id'
      },
      field: 'prod_id'
    },
    cantidadStock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'cantidad_stock'
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
    tableName: 'stock',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "stock_pkey",
        unique: true,
        fields: [
          { name: "stock_id" },
        ]
      },
    ]
  }) as typeof Stock;
  }
}