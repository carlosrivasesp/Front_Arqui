import { Component } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  listCategorias: Categoria[] = [];

  constructor(private _categoriaService: CategoriaService){}

  ngOnInit(): void {
    this.obtenerCategorias()
  }

  obtenerCategorias(){
    this._categoriaService.getCategorias().subscribe(data =>{
      console.log(data)
      this.listCategorias = data
    }, error => {
      console.log(error)
    })
  }


}
