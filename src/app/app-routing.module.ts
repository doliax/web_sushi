import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatosComponent } from './platos/platos.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: AppComponent },
  { path: 'platos', component: PlatosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
