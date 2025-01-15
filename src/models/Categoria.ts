import {
    DataTypes,
    ModelDefined,
    Optional,
  } from "sequelize";
  import bcrypt from "bcrypt";
  import db from "../config/dbOrm";
  
  export interface ICategoriaModel {
    id?: number;
    nombre: string;
    descripcion: string;
    estado: boolean;
  }
  
  type ICategoriaModelCrearte = Optional<ICategoriaModel, "id">;
  
  const Categoria: ModelDefined<ICategoriaModel, ICategoriaModelCrearte> = db.define(
    "Categoria",
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
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
    },
    
  );
  
  export default Categoria;
  