import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-listagem-evento',
  imports: [CommonModule],
  templateUrl: './listagem-evento.component.html',
  styleUrl: './listagem-evento.component.css'
})
export class ListagemEventoComponent implements OnInit{

  constructor(private router: Router, private userService: UserService, private eventService: EventService) {}

  list:any = []
  showEvents = true;
  showUsers = false;

  ngOnInit() {
    this.listEvents();
  }

  edit(id: number) {
    console.log('Editar item:', id);
  }

  delete(id: number) {
    this.list = this.list.filter((item: { id: number; }) => item.id !== id);
    console.log('Item excluído:', id);
  }

  toggleListClass(target:any){
    if(!target.classList.contains('active')){ //caso a listagem clicada nao esteja ativa, ativa ela e desativa a outra
      const listagensButtons = document.getElementsByName("listagemDiv")

      for(var i = 0; i < listagensButtons.length; i++){
        listagensButtons[i].classList.toggle("active");
      }
    }
    
  }

  async listUsers(){
    this.list = await this.userService.list();
      this.showUsers = true;
      this.showEvents = false;
  }

  async listEvents(){
    this.list = await this.eventService.list();
    this.showUsers = false;
    this.showEvents = true;
  }

  async loadList(event:any){
    this.toggleListClass(event.target);

    if(event.target.id == "users"){
      this.listUsers();
    }

    else if(event.target.id == "events"){
      this.listEvents();
    }
    console.log(this.list)

  }

  navigateTo(url:string){
    this.router.navigateByUrl(url);
  }
}
