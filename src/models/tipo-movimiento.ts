import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { MovimientoCab, MovimientoCabId } from './movimiento-cab';

export interface TipoMovimientoAttributes {
  tipomovId: number;
  tipomovDescrip: string;
  tipomovIngEgr: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAc?: number;
}

export type TipoMovimientoPk = "tipomovId";
export type TipoMovimientoId = TipoMovimiento[TipoMovimientoPk];
export type TipoMovimientoOptionalAttributes = "tipomovId" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAc";
export type TipoMovimientoCreationAttributes = Optional<TipoMovimientoAttributes, TipoMovimientoOptionalAttributes>;

export class TipoMovimiento extends Model<TipoMovimientoAttributes, TipoMovimientoCreationAttributes> implements TipoMovimientoAttributes {
  tipomovId!: number;
  tipomovDescrip!: string;
  tipomovIngEgr!: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAc?: number;

  // TipoMovimiento hasMany MovimientoCab via tipomovId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof TipoMovimiento {
    return sequelize.define('TipoMovimiento', {
    tipomovId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tipomov_id'
    },
    tipomovDescrip: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'tipomov_descrip'
    },
    tipomovIngEgr: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'tipomov_ing_egr'
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
    tableName: 'tipo_movimiento',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "tipo_movimiento_pkey",
        unique: true,
        fields: [
          { name: "tipomov_id" },
        ]
      },
    ]
  }) as typeof TipoMovimiento;
  }
}