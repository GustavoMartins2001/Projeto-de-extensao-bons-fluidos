import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CadastroEventoDialogComponent } from './cadastroEventoDialog/cadastro-evento-dialog.component';
import { EventService } from '../../../services/event.service';
import moment from 'moment'

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
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.validation();
    
    this.route.params.subscribe(res => { //get id da rota
      if (!isNaN(Number(res['id']))) {
        this.getEvent(Number(res['id']))
      }
    });
  }

  validation() {
    this.formCadastro = this.fb.group({
      id:[''],
      data: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      participantes: [''],
    });
  }

  async getEvent(id:Number){
    var event = await this.eventService.getEvent(id);
    this.patchValue(event)
  }

  patchValue(event: any){
    console.log(event)
    this.formCadastro.patchValue({
      id: event.id,
      data: moment(event.date).format('YYYY-MM-DD'),
      descricao: event.description,
      participantes: event.Users,
    })
  }

  openDialog() {
    const idList = this.formCadastro.get('participantes')?.value ?
     (this.formCadastro.get('participantes')?.value).map((x: { id: any; }) => x.id) 
     : null; //caso nao tenha nenhum participante envia null para a lista de ids
    this.dialog.open(CadastroEventoDialogComponent, {
      width: '800px',
      data: {
        idList: idList
      }
    }).afterClosed()
    .subscribe(response => {
      this.formCadastro.get('participantes')?.setValue(response.data)
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
      if(this.formCadastro.get('id')?.value > 0){
        await this.eventService.update( this.formCadastro.get('id')?.value,
        {
          description: this.formCadastro.get('descricao')?.value,
          date: this.formCadastro.get('data')?.value,
          participants: this.formCadastro.get('participantes')?.value,
        });
      }
      await this.eventService.register({
        description: this.formCadastro.get('descricao')?.value,
        date: this.formCadastro.get('data')?.value,
        participants: this.formCadastro.get('participantes')?.value,
      });

      this.router.navigate(['/listagem/evento']);

      alert('Evento cadastrado com sucesso!');
    } catch (error) {
      alert('Falha ao efetuar cadastro!');
    }
  }
}
