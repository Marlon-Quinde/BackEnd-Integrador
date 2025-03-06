import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from "../config/dbOrm";


export interface IClienteModel {
    cliente_id?: number;
    cliente_ruc: string;
    cliente_nombre1: string;
    cliente_nombre2: string;
    cliente_apellido1: string;
    cliente_apellido2: string;
    cliente_email: string;
    cliente_telefono?: string;
    cliente_direccion: string;
    estado?: number;
    usu_id_reg: number;
    usu_id_act?: number;
}

type IClienteModelCreate = Optional<IClienteModel, "cliente_id">;

const Cliente: ModelDefined<IClienteModel, IClienteModelCreate> = db.define(
    "cliente",
    {
        cliente_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        cliente_ruc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cliente_nombre1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cliente_nombre2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cliente_apellido1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cliente_apellido2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cliente_direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cliente_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cliente_telefono: {
            type: DataTypes.STRING,
            allowNull: true
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

export default Cliente;