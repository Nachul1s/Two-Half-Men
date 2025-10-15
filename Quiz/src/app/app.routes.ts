import { Routes } from '@angular/router';
import { Contador } from './pages/contador/contador';
import { Perdiste } from './pages/perdiste/perdiste';
import { Preguntas } from './pages/preguntas/preguntas';


export const routes: Routes = [
    {path: "",component: Contador},
    {path: "contador",component: Contador},
    {path: "perdiste",component: Perdiste},
    {path: "preguntas", component: Preguntas}
];
