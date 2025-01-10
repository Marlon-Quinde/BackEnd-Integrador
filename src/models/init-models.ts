import type { Sequelize } from "sequelize";
import { Categoria as _Categoria } from "./categoria";
import type { CategoriaAttributes, CategoriaCreationAttributes } from "./categoria";
import { Ciudad as _Ciudad } from "./ciudad";
import type { CiudadAttributes, CiudadCreationAttributes } from "./ciudad";
import { Cliente as _Cliente } from "./cliente";
import type { ClienteAttributes, ClienteCreationAttributes } from "./cliente";
import { Empresa as _Empresa } from "./empresa";
import type { EmpresaAttributes, EmpresaCreationAttributes } from "./empresa";
import { FormaPago as _FormaPago } from "./forma-pago";
import type { FormaPagoAttributes, FormaPagoCreationAttributes } from "./forma-pago";
import { Impuesto as _Impuesto } from "./impuesto";
import type { ImpuestoAttributes, ImpuestoCreationAttributes } from "./impuesto";
import { Industria as _Industria } from "./industria";
import type { IndustriaAttributes, IndustriaCreationAttributes } from "./industria";
import { Marca as _Marca } from "./marca";
import type { MarcaAttributes, MarcaCreationAttributes } from "./marca";
import { Modulo as _Modulo } from "./modulo";
import type { ModuloAttributes, ModuloCreationAttributes } from "./modulo";
import { MovimientoCab as _MovimientoCab } from "./movimiento-cab";
import type { MovimientoCabAttributes, MovimientoCabCreationAttributes } from "./movimiento-cab";
import { MovimientoDetPagos as _MovimientoDetPagos } from "./movimiento-det-pagos";
import type { MovimientoDetPagosAttributes, MovimientoDetPagosCreationAttributes } from "./movimiento-det-pagos";
import { MovimientoDetProducto as _MovimientoDetProducto } from "./movimiento-det-producto";
import type { MovimientoDetProductoAttributes, MovimientoDetProductoCreationAttributes } from "./movimiento-det-producto";
import { Opcion as _Opcion } from "./opcion";
import type { OpcionAttributes, OpcionCreationAttributes } from "./opcion";
import { Pais as _Pais } from "./pais";
import type { PaisAttributes, PaisCreationAttributes } from "./pais";
import { Producto as _Producto } from "./producto";
import type { ProductoAttributes, ProductoCreationAttributes } from "./producto";
import { Proveedor as _Proveedor } from "./proveedor";
import type { ProveedorAttributes, ProveedorCreationAttributes } from "./proveedor";
import { PuntoEmisionSri as _PuntoEmisionSri } from "./punto-emision-sri";
import type { PuntoEmisionSriAttributes, PuntoEmisionSriCreationAttributes } from "./punto-emision-sri";
import { Rol as _Rol } from "./rol";
import type { RolAttributes, RolCreationAttributes } from "./rol";
import { Stock as _Stock } from "./stock";
import type { StockAttributes, StockCreationAttributes } from "./stock";
import { Sucursal as _Sucursal } from "./sucursal";
import type { SucursalAttributes, SucursalCreationAttributes } from "./sucursal";
import { TarjetaCredito as _TarjetaCredito } from "./tarjeta-credito";
import type { TarjetaCreditoAttributes, TarjetaCreditoCreationAttributes } from "./tarjeta-credito";
import { TipoMovimiento as _TipoMovimiento } from "./tipo-movimiento";
import type { TipoMovimientoAttributes, TipoMovimientoCreationAttributes } from "./tipo-movimiento";
import { Usuario as _Usuario } from "./usuario";
import type { UsuarioAttributes, UsuarioCreationAttributes } from "./usuario";
import { UsuarioPermiso as _UsuarioPermiso } from "./usuario-permiso";
import type { UsuarioPermisoAttributes, UsuarioPermisoCreationAttributes } from "./usuario-permiso";
import { UsuarioRol as _UsuarioRol } from "./usuario-rol";
import type { UsuarioRolAttributes, UsuarioRolCreationAttributes } from "./usuario-rol";

export {
  _Categoria as Categoria,
  _Ciudad as Ciudad,
  _Cliente as Cliente,
  _Empresa as Empresa,
  _FormaPago as FormaPago,
  _Impuesto as Impuesto,
  _Industria as Industria,
  _Marca as Marca,
  _Modulo as Modulo,
  _MovimientoCab as MovimientoCab,
  _MovimientoDetPagos as MovimientoDetPagos,
  _MovimientoDetProducto as MovimientoDetProducto,
  _Opcion as Opcion,
  _Pais as Pais,
  _Producto as Producto,
  _Proveedor as Proveedor,
  _PuntoEmisionSri as PuntoEmisionSri,
  _Rol as Rol,
  _Stock as Stock,
  _Sucursal as Sucursal,
  _TarjetaCredito as TarjetaCredito,
  _TipoMovimiento as TipoMovimiento,
  _Usuario as Usuario,
  _UsuarioPermiso as UsuarioPermiso,
  _UsuarioRol as UsuarioRol,
};

export type {
  CategoriaAttributes,
  CategoriaCreationAttributes,
  CiudadAttributes,
  CiudadCreationAttributes,
  ClienteAttributes,
  ClienteCreationAttributes,
  EmpresaAttributes,
  EmpresaCreationAttributes,
  FormaPagoAttributes,
  FormaPagoCreationAttributes,
  ImpuestoAttributes,
  ImpuestoCreationAttributes,
  IndustriaAttributes,
  IndustriaCreationAttributes,
  MarcaAttributes,
  MarcaCreationAttributes,
  ModuloAttributes,
  ModuloCreationAttributes,
  MovimientoCabAttributes,
  MovimientoCabCreationAttributes,
  MovimientoDetPagosAttributes,
  MovimientoDetPagosCreationAttributes,
  MovimientoDetProductoAttributes,
  MovimientoDetProductoCreationAttributes,
  OpcionAttributes,
  OpcionCreationAttributes,
  PaisAttributes,
  PaisCreationAttributes,
  ProductoAttributes,
  ProductoCreationAttributes,
  ProveedorAttributes,
  ProveedorCreationAttributes,
  PuntoEmisionSriAttributes,
  PuntoEmisionSriCreationAttributes,
  RolAttributes,
  RolCreationAttributes,
  StockAttributes,
  StockCreationAttributes,
  SucursalAttributes,
  SucursalCreationAttributes,
  TarjetaCreditoAttributes,
  TarjetaCreditoCreationAttributes,
  TipoMovimientoAttributes,
  TipoMovimientoCreationAttributes,
  UsuarioAttributes,
  UsuarioCreationAttributes,
  UsuarioPermisoAttributes,
  UsuarioPermisoCreationAttributes,
  UsuarioRolAttributes,
  UsuarioRolCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Categoria = _Categoria.initModel(sequelize);
  const Ciudad = _Ciudad.initModel(sequelize);
  const Cliente = _Cliente.initModel(sequelize);
  const Empresa = _Empresa.initModel(sequelize);
  const FormaPago = _FormaPago.initModel(sequelize);
  const Impuesto = _Impuesto.initModel(sequelize);
  const Industria = _Industria.initModel(sequelize);
  const Marca = _Marca.initModel(sequelize);
  const Modulo = _Modulo.initModel(sequelize);
  const MovimientoCab = _MovimientoCab.initModel(sequelize);
  const MovimientoDetPagos = _MovimientoDetPagos.initModel(sequelize);
  const MovimientoDetProducto = _MovimientoDetProducto.initModel(sequelize);
  const Opcion = _Opcion.initModel(sequelize);
  const Pais = _Pais.initModel(sequelize);
  const Producto = _Producto.initModel(sequelize);
  const Proveedor = _Proveedor.initModel(sequelize);
  const PuntoEmisionSri = _PuntoEmisionSri.initModel(sequelize);
  const Rol = _Rol.initModel(sequelize);
  const Stock = _Stock.initModel(sequelize);
  const Sucursal = _Sucursal.initModel(sequelize);
  const TarjetaCredito = _TarjetaCredito.initModel(sequelize);
  const TipoMovimiento = _TipoMovimiento.initModel(sequelize);
  const Usuario = _Usuario.initModel(sequelize);
  const UsuarioPermiso = _UsuarioPermiso.initModel(sequelize);
  const UsuarioRol = _UsuarioRol.initModel(sequelize);

  Producto.belongsTo(Categoria, { as: "categorium", foreignKey: "categoriaId"});
  Categoria.hasMany(Producto, { as: "productos", foreignKey: "categoriaId"});
  Empresa.belongsTo(Ciudad, { as: "ciudad", foreignKey: "ciudadId"});
  Ciudad.hasMany(Empresa, { as: "empresas", foreignKey: "ciudadId"});
  MovimientoCab.belongsTo(Cliente, { as: "cliente", foreignKey: "clienteId"});
  Cliente.hasMany(MovimientoCab, { as: "movimientoCabs", foreignKey: "clienteId"});
  MovimientoCab.belongsTo(Empresa, { as: "empresa", foreignKey: "empresaId"});
  Empresa.hasMany(MovimientoCab, { as: "movimientoCabs", foreignKey: "empresaId"});
  PuntoEmisionSri.belongsTo(Empresa, { as: "empresa", foreignKey: "empresaId"});
  Empresa.hasMany(PuntoEmisionSri, { as: "puntoEmisionSris", foreignKey: "empresaId"});
  Stock.belongsTo(Empresa, { as: "empresa", foreignKey: "empresaId"});
  Empresa.hasMany(Stock, { as: "stocks", foreignKey: "empresaId"});
  MovimientoDetPagos.belongsTo(FormaPago, { as: "fpago", foreignKey: "fpagoId"});
  FormaPago.hasMany(MovimientoDetPagos, { as: "movimientoDetPagos", foreignKey: "fpagoId"});
  TarjetaCredito.belongsTo(Industria, { as: "tarjetum", foreignKey: "tarjetaId"});
  Industria.hasOne(TarjetaCredito, { as: "tarjetaCredito", foreignKey: "tarjetaId"});
  Producto.belongsTo(Marca, { as: "marca", foreignKey: "marcaId"});
  Marca.hasMany(Producto, { as: "productos", foreignKey: "marcaId"});
  Opcion.belongsTo(Modulo, { as: "modulo", foreignKey: "moduloId"});
  Modulo.hasMany(Opcion, { as: "opcions", foreignKey: "moduloId"});
  MovimientoDetPagos.belongsTo(MovimientoCab, { as: "movicab", foreignKey: "movicabId"});
  MovimientoCab.hasMany(MovimientoDetPagos, { as: "movimientoDetPagos", foreignKey: "movicabId"});
  MovimientoDetProducto.belongsTo(MovimientoCab, { as: "movicab", foreignKey: "movicabId"});
  MovimientoCab.hasMany(MovimientoDetProducto, { as: "movimientoDetProductos", foreignKey: "movicabId"});
  Ciudad.belongsTo(Pais, { as: "pai", foreignKey: "paisId"});
  Pais.hasMany(Ciudad, { as: "ciudads", foreignKey: "paisId"});
  MovimientoDetProducto.belongsTo(Producto, { as: "producto", foreignKey: "productoId"});
  Producto.hasMany(MovimientoDetProducto, { as: "movimientoDetProductos", foreignKey: "productoId"});
  Stock.belongsTo(Producto, { as: "prod", foreignKey: "prodId"});
  Producto.hasMany(Stock, { as: "stocks", foreignKey: "prodId"});
  MovimientoCab.belongsTo(Proveedor, { as: "proveedor", foreignKey: "proveedorId"});
  Proveedor.hasMany(MovimientoCab, { as: "movimientoCabs", foreignKey: "proveedorId"});
  MovimientoCab.belongsTo(Sucursal, { as: "sucursal", foreignKey: "sucursalId"});
  Sucursal.hasMany(MovimientoCab, { as: "movimientoCabs", foreignKey: "sucursalId"});
  Stock.belongsTo(Sucursal, { as: "sucursal", foreignKey: "sucursalId"});
  Sucursal.hasMany(Stock, { as: "stocks", foreignKey: "sucursalId"});
  MovimientoCab.belongsTo(TipoMovimiento, { as: "tipomov", foreignKey: "tipomovId"});
  TipoMovimiento.hasMany(MovimientoCab, { as: "movimientoCabs", foreignKey: "tipomovId"});

  return {
    Categoria: Categoria,
    Ciudad: Ciudad,
    Cliente: Cliente,
    Empresa: Empresa,
    FormaPago: FormaPago,
    Impuesto: Impuesto,
    Industria: Industria,
    Marca: Marca,
    Modulo: Modulo,
    MovimientoCab: MovimientoCab,
    MovimientoDetPagos: MovimientoDetPagos,
    MovimientoDetProducto: MovimientoDetProducto,
    Opcion: Opcion,
    Pais: Pais,
    Producto: Producto,
    Proveedor: Proveedor,
    PuntoEmisionSri: PuntoEmisionSri,
    Rol: Rol,
    Stock: Stock,
    Sucursal: Sucursal,
    TarjetaCredito: TarjetaCredito,
    TipoMovimiento: TipoMovimiento,
    Usuario: Usuario,
    UsuarioPermiso: UsuarioPermiso,
    UsuarioRol: UsuarioRol,
  };
}
