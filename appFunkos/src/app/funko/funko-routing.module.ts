import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarCategoriaComponent } from './agregar-editar-categoria/agregar-editar-categoria.component';
import { ListadoCategoriasComponent } from './listado-categorias/listado-categorias.component';

const routes: Routes = [
  {
    path:'',
    component:ListadoCategoriasComponent
  },
  {
    path: ':id',
    component: AgregarEditarCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunkoRoutingModule { }
