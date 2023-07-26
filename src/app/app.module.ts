import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatosComponent } from './platos/platos.component';
import { RouterModule } from '@angular/router';
import { ReservaComponent } from './reserva/reserva.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    PlatosComponent,
    ReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
 
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
