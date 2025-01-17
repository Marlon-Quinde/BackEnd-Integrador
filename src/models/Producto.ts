import {
    DataTypes,
    ModelDefined,
    Optional,
  } from "sequelize";
  import bcrypt from "bcrypt";
  import db from "../config/dbOrm";
  
  export interface IProductoModel {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    estado: boolean;
  }
  
  type IProductoModelCrearte = Optional<IProductoModel, "id">;
  
  const Producto: ModelDefined<IProductoModel, IProductoModelCrearte> = db.define(
    "Producto",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.DOUBLE(10, 2),
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
    },
    
  );
  
  export default Producto;
  