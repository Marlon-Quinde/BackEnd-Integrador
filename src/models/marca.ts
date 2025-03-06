import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from "../config/dbOrm";

export interface IMarcaModel {
    marca_id?: number,
    marca_descrip: string,
    estado: number,
    usu_id_reg: number,
    usu_id_act?: number
}

  type IMarcaModelCreate = Optional<IMarcaModel, "marca_id">;

  const Marca: ModelDefined<IMarcaModel, IMarcaModelCreate> = db.define(
    "marcas", 
    {
        marca_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        marca_descrip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        usu_id_reg: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        usu_id_act: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }
  );
  export default Marca;