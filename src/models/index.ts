import Usuario from "./usuario";
import Producto from "./producto";
import Categoria from "./categoria";
import Marca from "./marca";
import Sucursal from "./sucursal";
import Empresa from "./empresa";
import PuntoEmision from "./puntoemision";
import TipoMovimiento from "./tipomovimiento";
import MovimientoCabecera from "./movcabecera";
import MovimientoDetalle from "./movdetalle";
import Ciudad from "./ciudad";
import Pais from "./pais";
import Proveedor from './proveedor'

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

Ciudad.belongsTo(Pais, { foreignKey: "pais_id"});
Pais.hasMany(Ciudad, {foreignKey: "pais_id"});

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
    TipoMovimiento,
    Ciudad,
    Pais,
    Proveedor
};
