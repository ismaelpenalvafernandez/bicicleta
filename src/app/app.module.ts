import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BibicletaComponent } from './bibicleta/bibicleta.component';
import { FormsModule } from '@angular/forms';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';

@NgModule({
  declarations: [
    AppComponent,
    BibicletaComponent,
    Ejercicio2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
