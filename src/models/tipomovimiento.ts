import { DataTypes, ModelDefined, NOW, Optional } from "sequelize";
import db from "../config/dbOrm";

export interface ITipoMovimientoModel {
    tipomov_id?: number;
    tipomov_descrip: string;
    tipomov_ing_egr: string;
    estado?: number;
    usu_id_reg: number;
    usu_id_ac?: number;
}

  type ITipoMovimientoModelCreate = Optional<ITipoMovimientoModel, "tipomov_id">;

  const TipoMovimiento: ModelDefined<ITipoMovimientoModel, ITipoMovimientoModelCreate> = db.define(
    "tipo_movimiento", {
        tipomov_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        tipomov_descrip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipomov_ing_egr: {
            type: DataTypes.INTEGER,
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
        usu_id_ac: {
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

  export default TipoMovimiento;