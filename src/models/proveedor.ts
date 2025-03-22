import { DataTypes, ModelDefined, NOW, Optional } from "sequelize";
import db from "../config/dbOrm";

export interface IProveedorModel {
    proveedor_id?: number;
    prov_ruc: string;
    prov_nom_comercial: string;
    prov_razon: string;
    prov_direccion: string;
    prov_telefono: string;
    ciudad_id: number;
    estado?: number;
    usu_id_reg: number;
    usu_id_act?: number;
}

  type IProveedorModelCreate = Optional<IProveedorModel, "proveedor_id">;

  const Proveedor: ModelDefined<IProveedorModel, IProveedorModelCreate> = db.define(
    "proveedor", 
    {
        proveedor_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        prov_nom_comercial: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prov_razon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prov_ruc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prov_direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prov_telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        ciudad_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        usu_id_reg: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        usu_id_act: {
            type: DataTypes.BIGINT,
            allowNull: true,
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

  export default Proveedor;