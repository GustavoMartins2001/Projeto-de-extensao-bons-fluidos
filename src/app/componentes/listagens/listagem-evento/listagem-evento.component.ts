import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-evento',
  imports: [CommonModule],
  templateUrl: './listagem-evento.component.html',
  styleUrl: './listagem-evento.component.css'
})
export class ListagemEventoComponent {

  constructor(private router: Router) {}

  eventos = [
    { id: 1, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 2, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 3, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 4, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 4, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 4, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 4, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 4, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 4, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 4, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 4, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 4, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 4, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 4, nome: 'Nome do evento', data: '15/04/2020' },
  ];

  usuarios = [
    //lista de usuarios vinda do backend
  ]

  editEvent(id: number) {
    console.log('Editar evento:', id);
  }

  deleteEvent(id: number) {
    this.eventos = this.eventos.filter(event => event.id !== id);
    console.log('Evento excluído:', id);
  }

  toggleListClass(target:any){
    if(!target.classList.contains('active')){ //caso a listagem clicada nao esteja ativa, ativa ela e desativa a outra
      const listagensButtons = document.getElementsByName("listagemDiv")

      for(var i = 0; i < listagensButtons.length; i++){
        listagensButtons[i].classList.toggle("active");
      }
    }
    
  }

  loadList(event:any){
    this.toggleListClass(event.target);

    //carregar lista a depender do botao clicado, com a listagem de eventos carregada inicialmente
  }

  navigateTo(url:string){
    this.router.navigateByUrl(url);
  }
}
