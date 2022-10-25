import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit{
  formulario!: FormGroup;

  constructor(private servicioRegistro: AuthService, private snackBar: MatSnackBar, private ruta: Router, private fb: FormBuilder){}

  ngOnInit():void{
    this.formulario = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  register(){
    this.servicioRegistro.register(this.formulario.value).subscribe(response=>{
      this.snackBar.open('Usuario registrado exitosamente','',{
        duration:3000
      });
      this.ruta.navigate(['/inicio'])
    })
  }


  getControlFormulario = (valor: string) => this.formulario.get(valor);

  get email(){ return this.getControlFormulario('email');}
  
  get password(){ return this.getControlFormulario('password');}
}
