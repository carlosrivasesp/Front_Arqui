import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CategoriaService } from '../../services/categoria.service';
import { Producto } from '../../models/producto';
import { Categoria } from '../../models/categoria';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  listProductos: Producto[] = [];
  listCategorias: Categoria[] = [];

  constructor(private _productoService: ProductoService, private _categoriaService: CategoriaService,
     private router: Router, private toastr: ToastrService
  ){
  }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data =>{
      console.log(data)
      this.listProductos = data
    }, error => {
      console.log(error)
    })
  }
}

