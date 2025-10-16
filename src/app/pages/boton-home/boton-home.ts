import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-home.html',
  styleUrls: ['./boton-home.css']
})
export class BotonHome {
  showCards = false;

  comenzar() {
    this.showCards = true;
  }
}
