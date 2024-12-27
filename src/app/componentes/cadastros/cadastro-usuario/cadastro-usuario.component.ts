import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  imports: [FormsModule, NgxMaskDirective, CommonModule, ReactiveFormsModule],
  providers: [provideNgxMask()],
  selector: 'app-cadastro-usuario',
  styleUrl: './cadastro-usuario.component.css',
  templateUrl: './cadastro-usuario.component.html',
})
export class CadastroUsuarioComponent implements OnInit {
  formCadastro!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.validation();
  }

  validation() {
    this.formCadastro = this.fb.group({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      apoiador: new FormControl(false),
    });
  }

  onCancel(): void {
    this.router.navigate(['/login']);
  }

  async onSubmit(): Promise<void> {
    console.log(this.formCadastro.getRawValue());

    if (this.formCadastro.invalid) {
      this.formCadastro.markAllAsTouched();
      alert('É necessário preencher todos os campos para prosseguir!');
      return;
    }

    try {
      await this.userService.register({
        name: this.formCadastro.get('nome')?.value,
        email: this.formCadastro.get('email')?.value,
        password: this.formCadastro.get('senha')?.value,
        contact: this.formCadastro.get('telefone')?.value,
        supporter: this.formCadastro.get('apoiador')?.value,
      });

      this.router.navigate(['/login']);

      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      alert('Falha ao efetuar cadastro!');
    }
  }
}
