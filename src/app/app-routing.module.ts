import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { VistaClienteComponent } from './components/vista-cliente/vista-cliente.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import { CrearCategoriasComponent } from './components/crear-categorias/crear-categorias.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { EditarCategoriasComponent } from './components/editar-categorias/editar-categorias.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'cliente', component: VistaClienteComponent },
  { path: 'agregar-productos', component: AgregarProductosComponent},
  { path: 'crear-categorias', component: CrearCategoriasComponent},
  { path: 'editar-productos/:id', component: EditarProductosComponent},
  { path: 'editar-categorias/:id', component: EditarCategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
