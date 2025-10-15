import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './pages/contador/contador';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Contador],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Corregido aquí
})
export class App {
  protected readonly title = signal('Quiz');
}