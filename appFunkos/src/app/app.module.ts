import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MensajeConfirmacionComponent } from './shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MaterialDesignModule } from './shared/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MensajeConfirmacionComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ],
  exports: [
    MensajeConfirmacionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
