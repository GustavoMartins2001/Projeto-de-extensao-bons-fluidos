import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListagemEventoComponent } from './listagem-evento/listagem-evento.component';
import { ListagensComponent } from './listagens.component';

const routes: Routes = [
    {
        path: '',
        component: ListagensComponent,
        children: [
            {
                path: '',
                redirectTo: 'evento',
                pathMatch: 'full', // Redirect to 'usuario' if no child route is provided
            },
            {
                path: 'evento',
                component: ListagemEventoComponent,
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
export class ListagemModule {}
