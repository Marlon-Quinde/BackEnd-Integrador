import Usuario from "./Usuario";
import Producto from "./Producto";
import Categoria from "./Categoria";
import Marca from "./marca";
import Sucursal from "./sucursal";
import Empresa from "./empresa";
import PuntoEmision from "./puntoemision";
import TipoMovimiento from "./tipomovimiento";
import MovimientoCabecera from "./movcabecera";
import MovimientoDetalle from "./movdetalle";

Producto.belongsTo(Categoria, { foreignKey: "categoria_id" });
Categoria.hasMany(Producto, { foreignKey: "categoria_id" });

Producto.belongsTo(Marca, { foreignKey: "marca_id" });
Marca.hasMany(Producto, { foreignKey: "marca_id" });

Sucursal.belongsTo(Empresa, { foreignKey: "empresa_id" });
Empresa.hasMany(Sucursal, { foreignKey: "emprsa_id" });

PuntoEmision.belongsTo(Sucursal, { foreignKey: "sucursal_id" });
Sucursal.hasMany(PuntoEmision, { foreignKey: "punto_emision_id" });

MovimientoCabecera.belongsTo(TipoMovimiento, { foreignKey: "tipomov_id" });
TipoMovimiento.hasMany(MovimientoCabecera, { foreignKey: "tipomov_id" });

MovimientoDetalle.belongsTo(MovimientoCabecera, { foreignKey: "movicab_id" });
MovimientoCabecera.hasMany(MovimientoDetalle, { foreignKey: "movicab_id" });

MovimientoDetalle.belongsTo(Producto, { foreignKey: "prod_id" });
Producto.hasMany(MovimientoDetalle, { foreignKey: "prod_id" });

export {
    Usuario,
    Producto,
    Categoria, 
    Marca, 
    Sucursal, 
    Empresa, 
    PuntoEmision, 
    MovimientoCabecera, 
    MovimientoDetalle, 
    TipoMovimiento
};
