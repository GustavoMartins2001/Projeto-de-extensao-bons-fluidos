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
import { EventService } from '../../../services/event.service';

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
    private dialog: MatDialog,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.validation();

    // this.dialog.closeAll();
  }

  validation() {
    this.formCadastro = this.fb.group({
      id:[''],
      data: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      participantes: [''],
    });
  }

  openDialog() {
    this.dialog.open(CadastroEventoDialogComponent, {
      width: '800px',
      data: {
        id: this.formCadastro.get('id')?.value
      }
    }).afterClosed()
    .subscribe(response => {
      this.formCadastro.get('participantes')?.setValue(response),
      console.log(this.formCadastro.get('participantes')?.value);
    });;
  }

  async onSubmit(): Promise<void> {
    console.log(this.formCadastro.getRawValue());

    if (this.formCadastro.invalid) {
      this.formCadastro.markAllAsTouched();
      alert('É necessário preencher todos os campos para prosseguir!');
      return;
    }

    try {
      await this.eventService.register({
        description: this.formCadastro.get('descricao')?.value,
        date: this.formCadastro.get('data')?.value,
        user: this.formCadastro.get('participantes')?.value,
      });

      this.router.navigate(['/listagem/evento']);

      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      alert('Falha ao efetuar cadastro!');
    }
  }
}
