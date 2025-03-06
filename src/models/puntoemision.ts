import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from "../config/dbOrm";

export interface IPuntoEmisionModel {
    punto_emision_id?: number;
    punto_emision: string,
    utl_secuencia: number;
    usu_id_reg: number;
    estado?: number;
    usu_id_act?: number;
}

type IPuntoEmisionModelCreate = Optional<IPuntoEmisionModel, "punto_emision_id">;

const PuntoEmision: ModelDefined<IPuntoEmisionModel, IPuntoEmisionModelCreate> = db.define(
    "punto_emision_sri",
    {
        punto_emision_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        punto_emision: {
            type: DataTypes.STRING,
            allowNull: false
        },
        utl_secuencia: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        usu_id_reg: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        usu_id_act: {
            type: DataTypes.BIGINT,
            allowNull: true
        }
    }
);

export default PuntoEmision;