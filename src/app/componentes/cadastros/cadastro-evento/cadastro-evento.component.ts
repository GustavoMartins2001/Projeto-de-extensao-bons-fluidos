import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CadastroEventoDialogComponent } from './cadastroEventoDialog/cadastro-evento-dialog.component';

@Component({
  selector: 'app-cadastro-evento',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-evento.component.html',
  styleUrl: './cadastro-evento.component.css',
})
export class CadastroEventoComponent implements OnInit {
  formCadastro!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.validation();

    // this.dialog.closeAll();
  }

  validation() {
    this.formCadastro = this.fb.group({
      nome: ['', [Validators.required]],
      data: ['', [Validators.required]],
      descricao: [''],
      participantes: [''],
    });
  }

  openDialog() {
    this.dialog.open(CadastroEventoDialogComponent, {
      width: '800px',
    });
  }

  submit() {
    console.log(this.formCadastro);
    this.router.navigateByUrl('listagem/evento');
    // if (this.user.username && this.user.password) {
    //   console.log('Form submitted', this.user);

    //   //logica de validação
    //   //
    //   //

    //   this.router.navigate(['/listagem/evento']);

    // } else {
    //   console.error('Form is invalid');
    // }
  }
}
