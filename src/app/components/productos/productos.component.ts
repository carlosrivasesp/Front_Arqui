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
  categorias: Categoria[] = [];

  productoForm: FormGroup;

  constructor(private _productoService: ProductoService, private _categoriaService: CategoriaService,
     private fb: FormBuilder, private router: Router, private toastr: ToastrService
  ){
    this.productoForm = this.fb.group({
      codigo: ['',Validators.required],
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      imagen: [''],
      precio: ['', Validators.required],
      stock: ['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.obtenerProductos(),
    this.obtenerCategorias()
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data =>{
      console.log(data)
      this.listProductos = data
    }, error => {
      console.log(error)
    })
  }

  obtenerCategorias(){
    this._categoriaService.getCategorias().subscribe(data =>{
      this.categorias = data
    }, error => {
      console.log(error)
    })
  }

  agregarProducto(){
    const prod: Producto = {
      codigo: this.productoForm.get('codigo')?.value,
      nombre: this.productoForm.get('nombre')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      imagen: this.productoForm.get('imagen')?.value,
      precio: this.productoForm.get('precio')?.value,
      stock: this.productoForm.get('stock')?.value,
    }
    this._productoService.postProductos(prod).subscribe(data =>{
      this.toastr.success('Producto registrado exitosamente.')
      this.router.navigate(['/productos'])
      this.productoForm.reset()
    }, error => {
      console.log(error)
      this.toastr.error('Ocurrió un error al agregar el producto.')
    })
  }

  refresh(){

  }
}

