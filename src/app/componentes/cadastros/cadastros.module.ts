import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastrosComponent } from './cadastros.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: '',
    component: CadastrosComponent,
    children: [
      {
        path: '',
        redirectTo: 'usuario',
        pathMatch: 'full',
      },
      {
        path: 'usuario',
        component: CadastroUsuarioComponent,
      },
      {
        path: 'usuario/:id',
        component: CadastroUsuarioComponent,
      },
      {
        path: 'evento',
        component: CadastroEventoComponent,
      },
      {
        path: 'evento/:id',
        component: CadastroEventoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [RouterModule],
})
export class CadastrosModule {}
