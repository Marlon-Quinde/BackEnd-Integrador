import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/dbOrm";

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id?: CreationOptional<number>;
  nombre: string;
  email: string;
  password: string;
  verificarPassword: (password: string) => boolean;
}

const User = db.define<UserModel>(
  "user",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async function (usuario: any) {
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(usuario.password, salt);
      },
    },
    scopes: {
      eliminarPassword: {
        attributes: {
          exclude: [
            "password",
            "createdAt",
            "updatedAt",
          ],
        },
      },
    },
  }
);
//TODO: Crear un helper
(User.prototype as any).verificarPassword = function (password: string) {
  return bcrypt.compareSync(password, this.password);
};

export default User;
