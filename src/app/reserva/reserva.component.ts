import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})
export class ReservaComponent implements OnInit {

  date: Date;
  minDate: string;
  maxDate: string;
  
  constructor() {
    this.date = new Date(Date.now());
    this.minDate = "2022-07-24";
    this.maxDate = "2022-07-27";
  }

  ngOnInit() {
  }

  doReserva(){
    alert("Reserva hecha correctamente");
  }

  
}
  
