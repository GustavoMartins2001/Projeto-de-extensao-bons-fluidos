import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { EventService } from '../../../services/event.service';
import { jwtDecode } from "jwt-decode";
import { PhoneMaskPipe } from '../../../../../public/pipes/phone-mask.pipe';

@Component({
  selector: 'app-listagem-evento',
  imports: [CommonModule, PhoneMaskPipe],
  templateUrl: './listagem-evento.component.html',
  styleUrl: './listagem-evento.component.css'
})
export class ListagemEventoComponent implements OnInit{

  constructor(private router: Router,
      private userService: UserService,
      private eventService: EventService) {}

  list:any = []
  showEvents = true;
  showUsers = false;
  supporter = false;

  ngOnInit() {
  this.listEvents();
  this.getPermission();
  }

  edit(id: number) {
    this.router.navigate(['/cadastros/evento/' + id]);
  }

  async delete(id: number) {
    if(confirm("Tem certeza que deseja deletar o evento?")) {
      await this.eventService.delete(id);
      this.list = this.list.filter((item: { id: number; }) => item.id !== id);
    }
  }
  toggleListClass(target:any){
    if(!target.classList.contains('active')){ //caso a listagem clicada nao esteja ativa, ativa ela e desativa a outra
      const listagensButtons = document.getElementsByName("listagemDiv")

      for(var i = 0; i < listagensButtons.length; i++){
        listagensButtons[i].classList.toggle("active");
      }
    }
    
  }

  getPermission(){
      var decoded:any = jwtDecode(sessionStorage.getItem("sessionToken") || "");
      if(decoded.supporter || decoded.super)
        this.supporter = true;
  }


  async listUsers(){
    this.list = await this.userService.list();
      this.showUsers = true;
      this.showEvents = false;
      console.log(this.list);
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

  }

  navigateTo(url:string){
    this.router.navigateByUrl(url);
  }
}
