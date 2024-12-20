import { Component, Inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-cadastro-evento-dialog',
  imports: [MatFormFieldModule, MatIcon, CommonModule, ScrollingModule],
  templateUrl: './cadastro-evento-dialog.component.html',
  styleUrls: ['./cadastro-evento-dialog.component.css'],
})
export class CadastroEventoDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public eventData: any,
  public dialogRef: MatDialogRef<CadastroEventoDialogComponent>,
  public userService: UserService) {}

  usersOutside:any = []
  selectedUsersOutside: string[] = [];
  usersInside: any = [];
  selectedUsersInside: string[] = [];


  ngOnInit(): void {
    this.listUsers();
    console.log(this.eventData.id)
  }
  closeDialog() {
    this.dialogRef.close();
  }

  toggleSelectedClass(event: any) {
    event.target.classList.toggle('selected');
  }

  selectOutsideEvent(user: any, event: any) {
    if (!this.selectedUsersOutside.includes(user)) {
      this.selectedUsersOutside.push(user);
      this.toggleSelectedClass(event);
    } else {
      const index = this.selectedUsersOutside.indexOf(user);
      this.selectedUsersOutside.splice(index, 1);
      this.toggleSelectedClass(event);
    }
  }

  selectInsideEvent(user: any, event: any) {
    if (!this.selectedUsersInside.includes(user)) {
      this.selectedUsersInside.push(user);
      this.toggleSelectedClass(event);
    } else {
      const index = this.selectedUsersInside.indexOf(user);
      this.selectedUsersInside.splice(index, 1);
      this.toggleSelectedClass(event);
    }
  }

  async listUsers(){
    if(!this.eventData.id){
      this.usersOutside = await this.userService.list();
    }
    console.log(this.usersOutside)
  }

  moveEvents() {
    //troca os usuarios selecionados, eventos fora vao pra dentro e vice-versa
    this.usersOutside = this.usersOutside.filter(
      (u: string) => !this.selectedUsersOutside.includes(u)
    );
    this.usersInside.push(...this.selectedUsersOutside);

    this.usersInside = this.usersInside.filter(
      (u: string) => !this.selectedUsersInside.includes(u)
    );
    this.usersOutside.push(...this.selectedUsersInside);

    //limpa a seleção de usuarios
    this.selectedUsersOutside = [];
    this.selectedUsersInside = [];
  }

    save() {
      this.dialogRef.close({ data: this.usersInside });
    }
}
