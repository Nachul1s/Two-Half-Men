import { Routes } from '@angular/router';
import { Contador } from './pages/contador/contador';
import { Perdiste } from './pages/perdiste/perdiste';
import { Preguntas } from './pages/preguntas/preguntas';
import { Preguntas2 } from './pages/preguntas2/preguntas2';
import { Deportes1 } from './pages/deportes1/deportes1';


export const routes: Routes = [
    {path: "",component: Contador},
    {path: "contador",component: Contador},
    {path: "perdiste",component: Perdiste},
    {path: "preguntas", component: Preguntas},
    {path: "preguntas2", component: Preguntas2},
    {path: "deportes1", component: Deportes1}
];
