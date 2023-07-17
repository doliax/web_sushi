import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatosComponent } from './platos/platos.component';
import { RouterModule } from '@angular/router';
import { ReservaComponent } from './reserva/reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatosComponent,
    ReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
