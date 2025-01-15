import Usuario from "./Usuario";
import Producto from "./Producto";
import Categoria from "./Categoria";

Producto.belongsTo(Categoria, { foreignKey: "idCategoria" });
Categoria.hasMany(Categoria, { foreignKey: "idCategoria" });

export { Usuario, Producto, Categoria };
