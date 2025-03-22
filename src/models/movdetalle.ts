import { DataTypes, ModelDefined, NOW, Optional } from "sequelize";
import db from "../config/dbOrm";

export interface IMovimientoDetalle {
    movidet_id?: number;
    prod_id: number;
    cantidad: number;
    precio: number;
    usu_id_reg: number;
    usu_id_act?: number;
}

type IMovimientoDetalleCreate = Optional<IMovimientoDetalle, "movidet_id">;

const MovimientoDetalle: ModelDefined<IMovimientoDetalle, IMovimientoDetalleCreate> = db.define(
    "movimiento_det",
    {
        movidet_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        prod_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        precio: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        usu_id_reg: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        usu_id_act: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        createdAt: {
            type: 'TIMESTAMP WITH TIME ZONE',
            defaultValue: NOW,
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP WITH TIME ZONE',
            allowNull: true
        }
    }
);

export default MovimientoDetalle;