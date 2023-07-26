import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatosComponent } from './platos/platos.component';
import { AppComponent } from './app.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: AppComponent },
  { path: 'platos', component: PlatosComponent },
  { path: 'reserva', component: ReservaComponent},
  { path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
