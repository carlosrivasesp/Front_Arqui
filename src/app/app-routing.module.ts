import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from '../app/productos/productos.component';
import { CategoriasComponent } from '../app/categorias/categorias.component';
import { VistaClienteComponent } from '../app/vista-cliente/vista-cliente.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'cliente', component: VistaClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
