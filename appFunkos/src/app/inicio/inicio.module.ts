import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialDesignModule,
  ]
})
export class InicioModule { }
