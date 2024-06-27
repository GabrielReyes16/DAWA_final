// src/app/components/guerrero-card/guerrero-card.component.ts

import { Component, OnInit } from '@angular/core';
import { GuerreroCard } from '../../models/guerrero-card';
import { GuerreroCardService } from '../../services/guerrero-card.service';

@Component({
  selector: 'app-guerrero-card',
  templateUrl: './guerrero-card.component.html',
  styleUrls: ['./guerrero-card.component.css']
})
export class GuerreroCardComponent implements OnInit {
  guerreros: GuerreroCard[] = [];
  onImageError(guerrero: GuerreroCard) {
    console.error(`Error loading image for ${guerrero.nombre}, setting default image.`);
    guerrero.foto = 'ruta/default.jpg'; // Reemplaza 'ruta/default.jpg' con la ruta de tu imagen por defecto
  }

  constructor(private guerreroCardService: GuerreroCardService) {}

  ngOnInit(): void {
    this.guerreroCardService.getGuerreros().subscribe((data: GuerreroCard[]) => {
      this.guerreros = data;
    });
    
  }
}
