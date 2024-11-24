import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastrosComponent } from './cadastros.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';

const routes: Routes = [
    {
        path: '',
        component: CadastrosComponent,
        children: [
            {
                path: '',
                redirectTo: 'usuario',
                pathMatch: 'full', // Redirect to 'usuario' if no child route is provided
            },
            {
                path: 'usuario',
                component: CadastroUsuarioComponent,
            },
            {
                path: 'evento',
                component: CadastroEventoComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class CadastrosModule {}
