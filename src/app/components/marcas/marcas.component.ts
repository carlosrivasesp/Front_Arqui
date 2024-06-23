import { Component } from '@angular/core';
import { Marca } from '../../models/marca';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class MarcasComponent {

  listMarcas: Marca[] = [];

  constructor(private _marcaService: MarcaService){}

  ngOnInit(): void {
    this.obtenerCategorias()
  }

  obtenerCategorias(){
    this._marcaService.getMarcas().subscribe(data =>{
      console.log(data)
      this.listMarcas = data
    }, error => {
      console.log(error)
    })
  }

}
