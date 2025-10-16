import { Routes } from '@angular/router';
import { Perdiste } from './pages/perdiste/perdiste';
import { Preguntas } from './pages/preguntas/preguntas';
import { BotonHome } from './pages/boton-home/boton-home';


export const routes: Routes = [
    {path: "",component: Preguntas},
    {path: "perdiste",component: Perdiste},
    {path: "preguntas", component: Preguntas},
    {path:"boton-home", component: BotonHome}
];
