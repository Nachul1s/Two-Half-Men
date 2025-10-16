import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contador',
  standalone: true,
  templateUrl: './contador.html',
  styleUrls: ['./contador.css']
})
export class Contador implements OnInit {
  minutos: number = 10;
  segundos: number = 0;
  private intervalo: any;

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    this.iniciarContador();
  }

  iniciarContador() {
    this.intervalo = setInterval(() => {
      if (this.segundos === 0) {
        if (this.minutos === 0) {
          this.router.navigate(['/perdiste']); // Redirige al componente perdiste
          clearInterval(this.intervalo);
          
        } else {
          this.minutos--;
          this.segundos = 59;
        }
      } else {
        this.segundos--;
      }
      this.cdr.detectChanges();
    }, 1000);
  }

  get tiempoRestante(): string {
    const min = this.minutos.toString().padStart(2, '0');
    const seg = this.segundos.toString().padStart(2, '0');
    return `${min}:${seg}`;
  }
}