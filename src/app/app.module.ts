import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GamesService } from './services/games.service';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './components/principal/principal.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdministrarUsuariosComponent } from './components/administrar-usuarios/administrar-usuarios.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductosService } from './services/productos.ts.service';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ReporteComprasService } from './services/reporte-compras.service';
import { ReporteComprasComponent } from './components/reporte-compras/reporte-compras.component';
import { VistaproductosComponent } from './components/vistaproductos/vistaproductos.component';
import { ReporteComprasFormComponent } from './components/reporte-compras-form/reporte-compras-form.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FilterPipe } from './pipes/filter.pipe';
import { GarantiaClientesComponent } from './components/garantia-clientes/garantia-clientes.component';
import { FiterReportesComprasPipe } from './pipes/fiter-reportes-compras.pipe';
import { ReabastecimientoComponent } from './components/reabastecimiento/reabastecimiento.component';
import { ReabastecimientoService } from './services/reabastecimiento.service';
import { FiterReabastecimientoPipe } from './pipes/fiter-reabastecimiento.pipe';
import { VentasComponent } from './components/ventas/ventas.component';
import { VentasPipe } from './pipes/ventas.pipe';
import { VentasService } from './services/ventas.service';
import { CompraComponent } from './components/compra/compra.component';
import { GarantiaAdminComponent } from './components/garantia-admin/garantia-admin.component';
import { GarantiaAdminService } from './services/garantia-admin.service';
import { GarantiaService } from './services/garantia.service';
import { VistaGarantiasComponent } from './components/vista-garantias/vista-garantias.component';
import { VistaGarantiasClientesComponent } from './components/vista-garantias-clientes/vista-garantias-clientes.component';
import { FormadepagoComponent } from './components/formadepago/formadepago.component';
import { FormadepagoTarjetaComponent } from './components/formadepago-tarjeta/formadepago-tarjeta.component';
import { GraciasComponent } from './components/gracias/gracias.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { FiterInventarioPipe } from './pipes/inventario.pipe';






@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent,
    PrincipalComponent,
    FooterComponent,
    AdministrarUsuariosComponent,
    IniciosesionComponent,
    RegistroComponent,
    ProductListComponent,
    ProductoFormComponent,
    ReporteComprasComponent,
    VistaproductosComponent,
    ReporteComprasFormComponent,
    CarritoComponent,
    FilterPipe,
    GarantiaClientesComponent,
    FiterReportesComprasPipe,
    ReabastecimientoComponent,
    FiterReabastecimientoPipe,
    VentasComponent,
    VentasPipe,
    CompraComponent,
    GarantiaAdminComponent,
    VistaGarantiasComponent,
    VistaGarantiasClientesComponent,
    FormadepagoComponent,
    FormadepagoTarjetaComponent,
    GraciasComponent,
    InventarioComponent,
    FiterInventarioPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GamesService,
    ProductosService,
    ReporteComprasService,
    ReabastecimientoService,
    VentasService,
    GarantiaAdminService,
    GarantiaService
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
