import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrl: './agregar-productos.component.css'
})
export class AgregarProductosComponent {

  listProductos: Producto[] = [];
  categorias: Categoria[] = [];

  productoForm: FormGroup;

  constructor(private _productoService: ProductoService, private _categoriaService:CategoriaService,
    private fb: FormBuilder, private router: Router, private toastr: ToastrService){
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
    this.obtenerCategorias()
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

  obtenerCategorias(){
    this._categoriaService.getCategorias().subscribe(data =>{
      this.categorias = data
    }, error => {
      console.log(error)
    })
  }

}
