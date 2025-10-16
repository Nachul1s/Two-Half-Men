import { Routes } from '@angular/router';
import { Perdiste } from './pages/perdiste/perdiste';
import { Preguntas } from './pages/preguntas/preguntas';
import { Inicio } from './pages/inicio/inicio';
import { Contacto } from './pages/contacto/contacto';


export const routes: Routes = [
    {path: "",component: Inicio},
    {path: "inicio", component: Inicio},
    {path: "perdiste",component: Perdiste},
    {path: "preguntas", component: Preguntas},
    {path: "contacto", component: Contacto}
];
