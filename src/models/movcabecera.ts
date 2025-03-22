import { DataTypes, ModelDefined, NOW, Optional } from "sequelize";
import db from "../config/dbOrm";

export interface IMovimientoCabeceraModel {
    movicab_id?: number;
	secuencia_factura: string;
    xml_firmado?: string;
	autorizacion_sri?: string;
	clave_acceso: string;
	estado?: number;
	usu_id_reg: number;
	usu_id_act?: number;
}

type IMovimientoCabeceraModelCreate = Optional<IMovimientoCabeceraModel, "movicab_id">;

const MovimientoCabecera: ModelDefined<IMovimientoCabeceraModel, IMovimientoCabeceraModelCreate> = db.define(
    "movimiento_cab",
    {
        movicab_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        secuencia_factura: {
            type: DataTypes.STRING,
            allowNull: false
        },
        clave_acceso: {
            type: DataTypes.STRING,
            allowNull: false
        },
        xml_firmado: {
            type: DataTypes.STRING,
            allowNull: true
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        autorizacion_sri: {
            type: DataTypes.STRING,
            allowNull: true
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

export default MovimientoCabecera;