import { Component } from '@angular/core';
import { Platos } from '../class/platos';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent {
    platos: Platos = new Platos();
}
