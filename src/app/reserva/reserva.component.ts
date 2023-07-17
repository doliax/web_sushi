import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  @ViewChild('fechaInput') fechaInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    const fecha = this.fechaInput.nativeElement;

    fecha.addEventListener("change", () => {
      const dia = fecha.value.slice(0, 3);

      if (dia === "Sun") {
        fecha.disabled = true;
      } else {
        fecha.disabled = false;
      }
    });
  }
}
