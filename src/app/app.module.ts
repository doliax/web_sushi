import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatosComponent } from './platos/platos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PlatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
