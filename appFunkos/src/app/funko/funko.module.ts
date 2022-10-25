import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunkoRoutingModule } from './funko-routing.module';
import { ListadoCategoriasComponent } from './listado-categorias/listado-categorias.component';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { AgregarEditarCategoriaComponent } from './agregar-editar-categoria/agregar-editar-categoria.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListadoCategoriasComponent,
    AgregarEditarCategoriaComponent
  ],
  imports: [
    CommonModule,
    FunkoRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule,
  ]
})
export class FunkoModule { }
