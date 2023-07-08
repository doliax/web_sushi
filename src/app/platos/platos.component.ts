import { Component, OnInit } from '@angular/core';
import { Platos } from '../class/platos';


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {


  arr_platos: Platos[] = [];
   platos: Platos = new Platos("sushi_1", "Descripcion Estandar", "sesamo", 2, "", "maki");
   platos2: Platos = new Platos("sushi_2", "Descripcion Estandar2", "alga", 1, "", "temaki");
  
  constructor(){
    this.arr_platos.push(this.platos, this.platos2);
  }

  ngOnInit(): void {
  }



}

