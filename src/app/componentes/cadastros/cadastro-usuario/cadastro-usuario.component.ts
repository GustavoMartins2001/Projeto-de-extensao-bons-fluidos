import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {
  constructor(private router: Router) {}

  //verifica os inputs para mudar a cor do botao, pode ser usado para fazer validação no backend
  user = {
    username: '',
    password: '',
  };

  onSubmit() {
    if (this.user.username && this.user.password) {
      console.log('Form submitted', this.user);

      //logica de validação
      //
      //

      this.router.navigate(['/listagem/evento']);
      
    } else {
      console.error('Form is invalid');
    }
  }
}
