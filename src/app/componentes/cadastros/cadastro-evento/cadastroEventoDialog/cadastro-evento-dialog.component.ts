import { Component, Inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-cadastro-evento-dialog',
  imports: [MatFormFieldModule, MatIcon, CommonModule, ScrollingModule],
  templateUrl: './cadastro-evento-dialog.component.html',
  styleUrls: ['./cadastro-evento-dialog.component.css'],
})
export class CadastroEventoDialogComponent {
  constructor(public dialogRef: MatDialogRef<CadastroEventoDialogComponent>) {}

  usersOutside = [
    'Nome Sobrenome',
    'Usuário 2',
    'Usuário 3',
    'Usuário 4',
    'Usuário 5',
    'Usuário 6',
    'Usuário 7',
    'Usuário 8',
    'Usuário 9',
    'Usuário 10',
    'Usuário 11',
    'Usuário 12',
    'Usuário 13',
  ];
  selectedUsersOutside: string[] = [];
  usersInside: string[] = [];
  selectedUsersInside: string[] = [];

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

  moveEvents() {
    //troca os usuarios selecionados, eventos fora vao pra dentro e vice-versa
    this.usersOutside = this.usersOutside.filter(
      (u) => !this.selectedUsersOutside.includes(u)
    );
    this.usersInside.push(...this.selectedUsersOutside);

    this.usersInside = this.usersInside.filter(
      (u) => !this.selectedUsersInside.includes(u)
    );
    this.usersOutside.push(...this.selectedUsersInside);

    //limpa a seleção de usuarios
    this.selectedUsersOutside = [];
    this.selectedUsersInside = [];
  }
}
