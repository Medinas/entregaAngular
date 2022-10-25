import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CatFunko } from 'src/app/models/funko.model';
import { FunkoService } from 'src/app/services/funko.service';

@Component({
  selector: 'app-agregar-editar-categoria',
  templateUrl: './agregar-editar-categoria.component.html',
  styleUrls: ['./agregar-editar-categoria.component.scss']
})
export class AgregarEditarCategoriaComponent implements OnInit {
  constructor(
    private fb: FormBuilder, private servicioFunko: FunkoService,  private ruta: Router,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute //Esta clase es para ver la ruta que se va a editar
  ) { }

  formulario!: FormGroup;
  id!: number;

  ngOnInit(): void {
    this.formulario = this.fb.group({
      descCategoria:['',[Validators.required, Validators.minLength(5), Validators.maxLength(100)]]
    });

    this.id= this.activatedRoute.snapshot.params['id'] ? +this.activatedRoute.snapshot.params['id'] : 0;
    // Esto es para que si la liga tiene un id se convierta a número y sino regrese 0
    
    this.id !== 0 ?  this.editar(this.id): null;
  }

  guardar(){
    const tipoFunko: CatFunko={
      ...this.formulario.value
    }
    
    this.id === 0 ? this.agregar(tipoFunko): this.actualizar(this.id, tipoFunko);
  }

  agregar(tipoFunko: CatFunko){
    this.servicioFunko.saveCat(tipoFunko).subscribe(
      sRespuesta => {
        this.snackBar.open('La categoría fue agregada exitosamente','',{duration:3000});
        this.ruta.navigate(['/categorias']);
      }
    )
  }

  actualizar(id: number, tipoFunko: CatFunko){
    this.servicioFunko.updateCat(id, tipoFunko).subscribe(
      response => {
        this.snackBar.open('La categoría fue editada exitosamente','',{duration:3000});
        this.ruta.navigate(['/categorias']);
      });
  }

  editar(id: number){
    this.servicioFunko.getByIdCat(id).subscribe((tFunkoResp: CatFunko)=>{
        this.formulario.patchValue({
          ...tFunkoResp
        });
      }
    )
  }

  getControlFormulario = (valor:string) => this.formulario.get(valor) // Función para regresar cualquier campo del formulario

  get descCategoria(){ return this.getControlFormulario('descCategoria'); }// Función para regresar el control nombre

  

}
