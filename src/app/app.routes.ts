import { Routes } from '@angular/router';
import { Perdiste } from './pages/perdiste/perdiste';
import { Preguntas } from './pages/preguntas/preguntas';


export const routes: Routes = [
    {path: "",component: Preguntas},
    {path: "perdiste",component: Perdiste},
    {path: "preguntas", component: Preguntas}
];
