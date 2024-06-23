import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Marca } from '../../models/marca';
import { Router } from '@angular/router';
import { MarcaService } from '../../services/marca.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-marcas',
  templateUrl: './agregar-marcas.component.html',
  styleUrl: './agregar-marcas.component.css'
})
export class AgregarMarcasComponent {
  marcaForm: FormGroup;

  constructor(private _marcaService:MarcaService,
    private fb: FormBuilder, private router: Router, private toastr: ToastrService){
      this.marcaForm = this.fb.group({
        nombre: ['',Validators.required],
        descripcion: ['', Validators.required]
      })
  }

  agregarMarca(){
    const mar: Marca = {
      nombre: this.marcaForm.get('nombre')?.value,
      descripcion: this.marcaForm.get('descripcion')?.value
    }
    this._marcaService.postMarcas(mar).subscribe(data =>{
      this.toastr.success('Categoria registrada exitosamente.')
      this.router.navigate(['/marcas'])
      this.marcaForm.reset()
    }, error => {
      console.log(error)
      this.toastr.error('Ocurrió un error al crear la categoría.')
    })
  }
}
