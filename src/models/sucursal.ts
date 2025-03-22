import { DataTypes, ModelDefined, NOW, Optional } from "sequelize";
import db from "../config/dbOrm";

export interface ISucursalModel {
    sucursal_id?: number;
    sucursal_ruc: string;
    sucursal_nombre: string;
    sucursal_direccion: string;
    sucursal_telefono: string;
    estado?: number;
    usu_id_reg: number;
    usu_id_act?: number;
    empresa_id?: number;
    cod_establecimiento_sri: string;
}

type ISucursalModelCreate = Optional<ISucursalModel, "sucursal_id">;

const Sucursal: ModelDefined<ISucursalModel, ISucursalModelCreate> = db.define(
    "sucursal", 
    {
        sucursal_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        sucursal_ruc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sucursal_nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sucursal_direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sucursal_telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        cod_establecimiento_sri: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usu_id_reg:{
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

export default Sucursal;