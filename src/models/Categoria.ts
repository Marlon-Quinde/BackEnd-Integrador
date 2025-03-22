import {
    DataTypes,
    ModelDefined,
    NOW,
    Optional,
    Sequelize,
  } from "sequelize";
  import bcrypt from "bcrypt";
  import db from "../config/dbOrm";
import { now } from "sequelize/types/utils";
  
  export interface ICategoriaModel {
    categoria_id?: number;
    categoria: string;
    estado?: number;
    usu_id_reg: number;
    usu_id_act?: number;
  }
  
  type ICategoriaModelCrearte = Optional<ICategoriaModel, "categoria_id">;
  
  const Categoria: ModelDefined<ICategoriaModel, ICategoriaModelCrearte> = db.define(
    "categoria",
    {
      categoria_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      usu_id_reg: {
        type: DataTypes.BIGINT,
        allowNull: false,
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
  
  export default Categoria;
  