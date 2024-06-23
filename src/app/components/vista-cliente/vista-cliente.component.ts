import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vista-cliente',
  templateUrl: './vista-cliente.component.html',
  styleUrl: './vista-cliente.component.css'
})
export class VistaClienteComponent {

  listProductos: Producto[] = [];

  constructor(private _productoService: ProductoService,
    private router: Router, private toastr: ToastrService)
  {
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
