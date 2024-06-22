import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrl: './editar-categorias.component.css'
})
export class EditarCategoriasComponent {

  id: string | null;
  categoriaForm: FormGroup;

  constructor(private aRouter: ActivatedRoute, private fb: FormBuilder,
    private toastr: ToastrService, private router: Router, 
    private _categoriaService: CategoriaService
  ){
    this.categoriaForm = this.fb.group({
      nombre: ['',Validators.required],
      descripcion: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.obtenerDatosCategoria();
  }

  obtenerDatosCategoria(){
    if(this.id != null){
      this._categoriaService.getCategoria(this.id).subscribe(data =>{
        this.categoriaForm.setValue({
          nombre: data.nombre,
          descripcion: data.descripcion
        })
      })
    }
  }

  editarCategoria(){
    const cat: Categoria = {
      nombre: this.categoriaForm.get('nombre')?.value,
      descripcion: this.categoriaForm.get('descripcion')?.value
    }
    if(this.id != null){
      this._categoriaService.editarCategoria(this.id,cat).subscribe(data=>{
        this.toastr.info('Categoria modificada exitosamente.')
        this.router.navigate(['/categorias'])
        this.categoriaForm.reset()  
      }, error=>{
        console.log(error)
      this.toastr.error('Ocurrió un error al modificar la categoría.')
      })
    }
  }
}
