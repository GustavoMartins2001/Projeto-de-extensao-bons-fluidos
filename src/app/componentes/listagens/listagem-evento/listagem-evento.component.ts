import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listagem-evento',
  imports: [CommonModule],
  templateUrl: './listagem-evento.component.html',
  styleUrl: './listagem-evento.component.css'
})
export class ListagemEventoComponent {
  eventos = [
    { id: 1, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 2, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 3, nome: 'Nome do evento', data: '15/04/2020' },
    { id: 4, nome: 'Nome do evento', data: '15/04/2020' }
  ];

  editEvent(id: number) {
    console.log('Editar evento:', id);
  }

  deleteEvent(id: number) {
    this.eventos = this.eventos.filter(event => event.id !== id);
    console.log('Evento excluído:', id);
  }
}
