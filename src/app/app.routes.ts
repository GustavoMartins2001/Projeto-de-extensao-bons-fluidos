import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';

export const routes: Routes = [
  {
    path: 'cadastros',
    loadChildren: () =>
      import('./componentes/cadastros/cadastros.module').then(
        (m) => m.CadastrosModule
      ),
  },
  {
    path: 'listagem',
    loadChildren: () =>
      import('./componentes/listagens/listagens.module').then(
        (m) => m.ListagemModule
      ),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full', // Redirect to 'usuario' if no child route is provided
  },
];
