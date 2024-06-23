import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';
import { Producto } from '../../models/producto';
import { Marca } from '../../models/marca';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrl: './editar-productos.component.css'
})
export class EditarProductosComponent {
  id: string | null;
  productoForm: FormGroup;

  listCategorias: Categoria[] = [];
  listMarcas: Marca[] = [];

  constructor(private _productoService: ProductoService, private _categoriaService:CategoriaService, private _marcaService: MarcaService,
    private fb: FormBuilder, private router: Router, private toastr: ToastrService, 
    private aRouter: ActivatedRoute){

      this.productoForm = this.fb.group({
        codigo: ['',Validators.required],
        nombre: ['', Validators.required],
        categoria: ['', Validators.required],
        imagen: [''],
        precio: ['', Validators.required],
        stock: ['',Validators.required],
        marca: ['',Validators.required]
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerCategorias()
    this.obtenerMarcas()
    this.obtenerDatosProducto()
  }

  obtenerCategorias(){
    this._categoriaService.getCategorias().subscribe(data =>{
      this.listCategorias = data
    }, error => {
      console.log(error)
    })
  }

  obtenerMarcas(){
    this._marcaService.getMarcas().subscribe(data =>{
      this.listMarcas = data
    }, error => {
      console.log(error)
    })
  }

  obtenerDatosProducto(){
    if(this.id != null){
      this._productoService.getProducto(this.id).subscribe(data =>{
        this.productoForm.setValue({
          codigo: data.codigo,
          nombre: data.nombre,
          categoria: data.categoria,
          imagen: '',
          precio: data.precio,
          stock: data.stock,
          marca: data.marca
        })
      })
    }
  }

  editarProducto(){
    const prod: Producto = {
      codigo: this.productoForm.get('codigo')?.value,
      nombre: this.productoForm.get('nombre')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      imagen: this.productoForm.get('imagen')?.value,
      precio: this.productoForm.get('precio')?.value,
      stock: this.productoForm.get('stock')?.value,
      marca: this.productoForm.get('marca')?.value
    }
    if(this.id != null){
      this._productoService.editarProducto(this.id,prod).subscribe(data=>{
        this.toastr.info('Producto modificado exitosamente.')
        this.router.navigate(['/productos'])
        this.productoForm.reset()  
      }, error=>{
        console.log(error)
      this.toastr.error('Ocurrió un error al modificar el producto.')
      })
    }
  }
  //falta mostrar categoria e imagen
}
