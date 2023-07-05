import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peluqueria_web';
}

//Llamamos a la carga de contenido DOM
document.addEventListener('DOMContentLoaded', () => {
  //Variable de id video como un video de html
  const video = document.getElementById('video') as HTMLVideoElement;
  //Añadimos evento de actualizador de tiempo con funcion flecha que comprueba el timpo de video, si sobrepasa de 40 se reinicia
  video.addEventListener('timeupdate', () => {
    if (video.currentTime >= 40) {
      //Tiempo 0 para reiniciarlo
      video.currentTime = 0; 
      //Carga de video
      video.load(); 
    }
  });
});



//ALTA COCINA TEXTO ANIMACIÓN
let alta_cocina: string[] = ["Alta cocina"];
