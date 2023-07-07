import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatosComponent } from './platos/platos.component';

const routes: Routes = [
  { path: 'platos', component: PlatosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
