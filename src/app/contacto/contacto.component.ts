import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactForm: FormGroup


  constructor(private FormBuilder: FormBuilder){
    this.contactForm = this.FormBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }


  ngOnInit(): void {}


  onSubmit() {
    if (this.contactForm.invalid) {
      // Mostrar error
      alert('Por favor, rellena todos los campos correctamente.');
      return;
    }else{
  
      alert('Mensaje enviado correctamente.');
      //Limpiamos valores
      this.contactForm.reset();
    }
  }

}
