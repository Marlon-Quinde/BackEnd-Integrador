import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from "../config/dbOrm";

export interface UserAttributes {
  id?: number;
  username: string;
  password: string;
  email: string;
  dateOfBirth: string;
}

type UserCreationAttributes = Optional<UserAttributes, "id">;

const User: ModelDefined<UserAttributes, UserCreationAttributes> = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
  },
  {
    scopes: {
        eliminarPassword: {
            attributes: {
                exclude: ["password", "createdAt", "updateAt"]
            }
        }
    }
  }
);


export default User