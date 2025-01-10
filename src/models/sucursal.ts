import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { MovimientoCab, MovimientoCabId } from './movimiento-cab';
import type { Stock, StockId } from './stock';

export interface SucursalAttributes {
  sucursalId: number;
  sucursalRuc?: string;
  sucursalNombre?: string;
  sucursalDireccion?: string;
  sucursalTelefono?: string;
  estado?: number;
  fechaHoraReg?: Date;
  usuIdReg?: number;
  fechaHoraAct?: Date;
  empresaId?: number;
  codEstablecimientoSri?: string;
}

export type SucursalPk = "sucursalId";
export type SucursalId = Sucursal[SucursalPk];
export type SucursalOptionalAttributes = "sucursalId" | "sucursalRuc" | "sucursalNombre" | "sucursalDireccion" | "sucursalTelefono" | "estado" | "fechaHoraReg" | "usuIdReg" | "fechaHoraAct" | "empresaId" | "codEstablecimientoSri";
export type SucursalCreationAttributes = Optional<SucursalAttributes, SucursalOptionalAttributes>;

export class Sucursal extends Model<SucursalAttributes, SucursalCreationAttributes> implements SucursalAttributes {
  sucursalId!: number;
  sucursalRuc?: string;
  sucursalNombre?: string;
  sucursalDireccion?: string;
  sucursalTelefono?: string;
  estado?: number;
  fechaHoraReg?: Date;
  usuIdReg?: number;
  fechaHoraAct?: Date;
  empresaId?: number;
  codEstablecimientoSri?: string;

  // Sucursal hasMany MovimientoCab via sucursalId
  movimientoCabs!: MovimientoCab[];
  getMovimientoCabs!: Sequelize.HasManyGetAssociationsMixin<MovimientoCab>;
  setMovimientoCabs!: Sequelize.HasManySetAssociationsMixin<MovimientoCab, MovimientoCabId>;
  addMovimientoCab!: Sequelize.HasManyAddAssociationMixin<MovimientoCab, MovimientoCabId>;
  addMovimientoCabs!: Sequelize.HasManyAddAssociationsMixin<MovimientoCab, MovimientoCabId>;
  createMovimientoCab!: Sequelize.HasManyCreateAssociationMixin<MovimientoCab>;
  removeMovimientoCab!: Sequelize.HasManyRemoveAssociationMixin<MovimientoCab, MovimientoCabId>;
  removeMovimientoCabs!: Sequelize.HasManyRemoveAssociationsMixin<MovimientoCab, MovimientoCabId>;
  hasMovimientoCab!: Sequelize.HasManyHasAssociationMixin<MovimientoCab, MovimientoCabId>;
  hasMovimientoCabs!: Sequelize.HasManyHasAssociationsMixin<MovimientoCab, MovimientoCabId>;
  countMovimientoCabs!: Sequelize.HasManyCountAssociationsMixin;
  // Sucursal hasMany Stock via sucursalId
  stocks!: Stock[];
  getStocks!: Sequelize.HasManyGetAssociationsMixin<Stock>;
  setStocks!: Sequelize.HasManySetAssociationsMixin<Stock, StockId>;
  addStock!: Sequelize.HasManyAddAssociationMixin<Stock, StockId>;
  addStocks!: Sequelize.HasManyAddAssociationsMixin<Stock, StockId>;
  createStock!: Sequelize.HasManyCreateAssociationMixin<Stock>;
  removeStock!: Sequelize.HasManyRemoveAssociationMixin<Stock, StockId>;
  removeStocks!: Sequelize.HasManyRemoveAssociationsMixin<Stock, StockId>;
  hasStock!: Sequelize.HasManyHasAssociationMixin<Stock, StockId>;
  hasStocks!: Sequelize.HasManyHasAssociationsMixin<Stock, StockId>;
  countStocks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Sucursal {
    return sequelize.define('Sucursal', {
    sucursalId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'sucursal_id'
    },
    sucursalRuc: {
      type: DataTypes.STRING(13),
      allowNull: true,
      field: 'sucursal_ruc'
    },
    sucursalNombre: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'sucursal_nombre'
    },
    sucursalDireccion: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'sucursal_direccion'
    },
    sucursalTelefono: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'sucursal_telefono'
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
    usuIdReg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'usu_id_reg'
    },
    fechaHoraAct: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_hora_act'
    },
    empresaId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'empresa_id'
    },
    codEstablecimientoSri: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      field: 'cod_establecimiento_sri'
    }
  }, {
    tableName: 'sucursal',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "sucursal_pkey",
        unique: true,
        fields: [
          { name: "sucursal_id" },
        ]
      },
    ]
  }) as typeof Sucursal;
  }
}
