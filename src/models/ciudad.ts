import { DataTypes, ModelDefined, NOW, Optional } from "sequelize";
import db from "../config/dbOrm";

export interface ICiudadModel {
    ciudad_id?: number;
    ciudad_nombre: string;
    estado?: number;
    usu_id_reg: number;
    usu_id_act?: number;
}

type ICiudadModelCreate = Optional<ICiudadModel, "ciudad_id">;

const Ciudad: ModelDefined<ICiudadModel, ICiudadModelCreate> = db.define(
    'ciudad',
    {
        ciudad_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        ciudad_nombre: {
            type: DataTypes.STRING,
            allowNull: false
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

export default Ciudad;