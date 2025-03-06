import {
    DataTypes,
    ModelDefined,
    Optional,
  } from "sequelize";
  import bcrypt from "bcrypt";
  import db from "../config/dbOrm";
  
  export interface IProductoModel {
    prod_id?: number;
    prod_descripcion: string;
    prod_ult_precio: number;
    estado: number;
    usu_id_reg: number;
    usu_id_act?: number;
  }
  
  type IProductoModelCrearte = Optional<IProductoModel, "prod_id">;
  
  const Producto: ModelDefined<IProductoModel, IProductoModelCrearte> = db.define(
    "productos",
    {
      prod_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      prod_descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prod_ult_precio: {
        type: DataTypes.DOUBLE(10, 2),
        allowNull: false,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      usu_id_reg: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      usu_id_act: {
        type: DataTypes.BIGINT,
        allowNull: true
      }
    },
    
  );
  
  export default Producto;
  