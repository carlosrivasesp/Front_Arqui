import { Component } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-categorias',
  templateUrl: './crear-categorias.component.html',
  styleUrl: './crear-categorias.component.css'
})
export class CrearCategoriasComponent {

  categoriaForm: FormGroup;

  constructor(private _categoriaService:CategoriaService,
    private fb: FormBuilder, private router: Router, private toastr: ToastrService){
      this.categoriaForm = this.fb.group({
        nombre: ['',Validators.required],
        descripcion: ['', Validators.required]
      })
  }

  crearCategoria(){
    const cat: Categoria = {
      nombre: this.categoriaForm.get('nombre')?.value,
      descripcion: this.categoriaForm.get('descripcion')?.value
    }
    this._categoriaService.postCategorias(cat).subscribe(data =>{
      this.toastr.success('Categoria registrada exitosamente.')
      this.router.navigate(['/categorias'])
      this.categoriaForm.reset()
    }, error => {
      console.log(error)
      this.toastr.error('Ocurrió un error al crear la categoría.')
    })
  }
}