import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:'inicio',
    loadChildren: ()=>
      import('./inicio/inicio.module')
      .then(m=>m.InicioModule),
      canLoad: [AuthGuard]
  },
  {
    path:'categorias',
    loadChildren: ()=>
      import('./funko/funko.module')
      .then(m=>m.FunkoModule),
      canActivate: [AuthGuard],
      canLoad: [AuthGuard]
  },
  {
    path:'register',
    component: RegistroComponent,
    canLoad: [AuthGuard]
  },
  {
    path:'login',
    component: LoginComponent,
    canLoad: [AuthGuard]
  },
  {
    path:'',
    redirectTo:'inicio',
    pathMatch:'full',
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
