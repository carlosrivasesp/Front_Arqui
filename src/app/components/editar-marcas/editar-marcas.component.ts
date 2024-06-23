import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MarcaService } from '../../services/marca.service';
import { Marca } from '../../models/marca';

@Component({
  selector: 'app-editar-marcas',
  templateUrl: './editar-marcas.component.html',
  styleUrl: './editar-marcas.component.css'
})
export class EditarMarcasComponent {
  id: string | null;
  marcaForm: FormGroup;

  constructor(private aRouter: ActivatedRoute, private fb: FormBuilder,
    private toastr: ToastrService, private router: Router, 
    private _marcaService: MarcaService
  ){
    this.marcaForm = this.fb.group({
      nombre: ['',Validators.required],
      descripcion: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.obtenerDatosMarca();
  }

  obtenerDatosMarca(){
    if(this.id != null){
      this._marcaService.getMarca(this.id).subscribe(data =>{
        this.marcaForm.setValue({
          nombre: data.nombre,
          descripcion: data.descripcion
        })
      })
    }
  }

  editarMarca(){
    const mar: Marca = {
      nombre: this.marcaForm.get('nombre')?.value,
      descripcion: this.marcaForm.get('descripcion')?.value
    }
    if(this.id != null){
      this._marcaService.editarMarca(this.id,mar).subscribe(data=>{
        this.toastr.info('Marca modificada exitosamente.')
        this.router.navigate(['/marcas'])
        this.marcaForm.reset()  
      }, error=>{
        console.log(error)
      this.toastr.error('Ocurrió un error al modificar la marca.')
      })
    }
  }
}
