import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})
export class ReservaComponent implements OnInit {
  date: Date;
  minDate: string;
  maxDate: string;
  form: FormGroup;

  //En el constructor inicializamos el formBuilder
  constructor(private formBuilder: FormBuilder) {
    this.date = new Date();
    this.minDate = '2022-07-24';
    this.maxDate = '2022-07-27';

    //El formulario sera igual al grupo con los valores requeridos en el html
    this.form = this.formBuilder.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      personas: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      notas: [''],
    });
  }

  ngOnInit() {}

  doReserva() {
    if (this.form.invalid) {
      // Mostrar error
      alert('Por favor, rellena todos los campos correctamente.');
      return;
    }else{

    alert('Reserva hecha correctamente.');
    //Limpiamos valores
    this.form.reset();
    }
  }
}
