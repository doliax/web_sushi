import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sushi_web';
  
  //Creamos nuestra variable header local
  headerRoot: boolean = true;

  //Desde el contructor importamos el servicio
  constructor(){}

  ngOnInit(): void {
  }
}

//V2 - Correción para que video deje de ser null y el testing de Jasmine no de error

document.addEventListener('DOMContentLoaded', () => {
  //Variable de id video como un video de html
  const video = document.getElementById('video') as HTMLVideoElement;
  //Añadimos evento de actualizador de tiempo con funcion flecha que comprueba el timpo de video, si sobrepasa de 40 se reinicia
  if (video) {
  video.addEventListener('timeupdate', () => {
  if (video.currentTime >= 40) {
  //Tiempo 0 para reiniciarlo
  video.currentTime = 0;
  //Carga de video
  video.load();
  }
  });
  }
  });