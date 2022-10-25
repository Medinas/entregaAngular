import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;
  constructor(private fb: FormBuilder, private servicioRegistro: AuthService, private ruta: Router) { }

  ngOnInit():void{
      this.formulario = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login(){
    this.servicioRegistro.login(this.formulario.value).subscribe(response=>{
      this.ruta.navigate(['categorias']);
    })
  }


  getControlFormulario = (valor: string) => this.formulario.get(valor);

  get email(){ return this.getControlFormulario('email');}
  
  get password(){ return this.getControlFormulario('password');}

}
