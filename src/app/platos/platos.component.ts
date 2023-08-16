import { Component, OnInit } from '@angular/core';
import { Platos } from '../class/platos';

@Component({
selector: 'app-platos',
templateUrl: './platos.component.html',
styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

title_makis: string = 'MAKIS';
title_temaki: string = 'TEMAKIS';
title_nigiri: string = 'NIGIRIS';

arr_platos: Platos[] = [];
entrante_1: Platos = new Platos('edamame', 'judias', '', 1.5, '../../assets/edamame.jpg', 'entrante');
platos: Platos = new Platos('Maki Salmon', 'El maki de toda la vida', 'sesamo', 2, '../../assets/sushi_card1.jpg', 'maki');
platos_1_2: Platos = new Platos('Maki Perca', 'Un maki especial', 'sesamo', 2, '../../assets/sushi_card1.jpg', 'maki');
platos_1_3_cebollino = new Platos('Maki Cebollino', 'Un maki de verdura','',1, '../../assets/maki_cebollino.png','maki');
temaki1: Platos = new Platos('Temaki Salmon', 'Alga rellena de salmon', 'alga', 1, '../../assets/temaki_1.jpg', 'temaki');
temaki2: Platos = new Platos('Temaki Atun', 'Clasico temaki de atun', 'alga', 2.5, '../../assets/temaki_2.jpg', 'temaki');
nigiri1: Platos = new Platos('Nigiri Salmon', 'Arroz con una lomo de salmón', '', 1, '../../assets/nigiri_1_salmon.jpg', 'nigiri');

constructor() {
this.arr_platos.push(this.entrante_1, this.platos, this.platos_1_2, this.platos_1_3_cebollino, this.temaki1, this.temaki2, this.nigiri1);
}

ngOnInit(): void {
}


}