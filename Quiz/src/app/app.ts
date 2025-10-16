import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Inicio],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Corregido aquí
})
export class App {
  protected readonly title = signal('Quiz');
}