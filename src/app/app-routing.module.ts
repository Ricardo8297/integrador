import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarUsuariosComponent } from './components/administrar-usuarios/administrar-usuarios.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CompraComponent } from './components/compra/compra.component';
import { FormadepagoTarjetaComponent } from './components/formadepago-tarjeta/formadepago-tarjeta.component';
import { FormadepagoComponent } from './components/formadepago/formadepago.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GarantiaAdminComponent } from './components/garantia-admin/garantia-admin.component';
import { GarantiaClientesComponent } from './components/garantia-clientes/garantia-clientes.component';
import { GraciasComponent } from './components/gracias/gracias.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ReabastecimientoComponent } from './components/reabastecimiento/reabastecimiento.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReporteComprasFormComponent } from './components/reporte-compras-form/reporte-compras-form.component';
import { ReporteComprasComponent } from './components/reporte-compras/reporte-compras.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { VistaGarantiasClientesComponent } from './components/vista-garantias-clientes/vista-garantias-clientes.component';
import { VistaGarantiasComponent } from './components/vista-garantias/vista-garantias.component';
import { VistaproductosComponent } from './components/vistaproductos/vistaproductos.component';
import { AuthGuard } from './guards/auth.guard';
import { NoauthGuard } from './guards/noauth.guard';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: 'games',
    component: GameListComponent
  },
  {
   path: 'games/add',
   component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  },
  {
    path: 'adminUsers',
    component: AdministrarUsuariosComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'registro',
    component: RegistroComponent
  },
  {
    path: 'iniciosesion',
    component: IniciosesionComponent
  },
  {
    path: 'productos',
    component: ProductListComponent
  },
  {
   path: 'productos/add',
   component: ProductoFormComponent
  },
  {
    path: 'productos/edit/:id',
    component: ProductoFormComponent
  },
  {
    path: 'productos/compra/:id',
    component: CompraComponent
  },
  {
    path: 'reporteCompras',
    component: ReporteComprasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reporteCompras/add',
    component: ReporteComprasFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'vistaproductos',
    component: VistaproductosComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'garantiaClientes',
    component: GarantiaClientesComponent
  },
  {
    path: 'reabastecimiento',
    component: ReabastecimientoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ventas',
    component: VentasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'garantiaadmin',
    component: GarantiaAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'garantiaadmin/vista',
    component: VistaGarantiasComponent,
    canActivate: [AuthGuard]
  },{
    path: 'garantiaClientes/vista',
    component: VistaGarantiasClientesComponent,
    canActivate: [AuthGuard]
  },{
    path: 'formadepago',
    component: FormadepagoComponent
  },{
    path: 'tarjeta',
    component: FormadepagoTarjetaComponent
  },{
    path: 'gracias',
    component: GraciasComponent
  },{
    path: 'inventario',
    component: InventarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
