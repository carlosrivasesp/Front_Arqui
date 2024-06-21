import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { VistaClienteComponent } from './components/vista-cliente/vista-cliente.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import { CrearCategoriasComponent } from './components/crear-categorias/crear-categorias.component';



@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    ProductosComponent,
    CategoriasComponent,
    VistaClienteComponent,
    SidebarComponent,
    NavbarComponent,
    AgregarProductosComponent,
    CrearCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
