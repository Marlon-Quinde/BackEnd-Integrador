import { DataTypes, ModelDefined, NOW, Optional } from "sequelize";
import db from "../config/dbOrm";

export interface IEmpresaModel {
    empresa_id?: number;
    empresa_ruc: string;
    empresa_nombre: string;
    empresa_razon: string;
    empresa_direccion_matriz: string;
    empresa_telefono_matriz: string;
    ciudad_id: number;
    estado?: number;
    usu_id_reg: number;
    usu_id_act?: number;
}

  type IEmpresaModelCreate = Optional<IEmpresaModel, "empresa_id">;

  const Empresa: ModelDefined<IEmpresaModel, IEmpresaModelCreate> = db.define(
    "empresa", 
    {
        empresa_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        empresa_ruc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        empresa_nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        empresa_razon: {
            type: DataTypes.STRING,
            allowNull: false
        },
        empresa_direccion_matriz: {
            type: DataTypes.STRING,
            allowNull: false
        },
        empresa_telefono_matriz:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ciudad_id:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        usu_id_reg: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
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

  export default Empresa;