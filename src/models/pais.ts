import { DataTypes, ModelDefined, NOW, Optional } from "sequelize";
import db from "../config/dbOrm";

export interface IPaisModel{
    pais_id?: number;
    pais_nombre: string;
    estado?: number;
    usu_id_reg: number;
    usu_id_act?: number;
}

type IPaisModelCreate = Optional<IPaisModel, "pais_id">;

const Pais: ModelDefined<IPaisModel, IPaisModelCreate> = db.define(
    "pais",
    {
        pais_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        pais_nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        usu_id_reg: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usu_id_act: {
            type: DataTypes.INTEGER,
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
    });

    export default Pais;