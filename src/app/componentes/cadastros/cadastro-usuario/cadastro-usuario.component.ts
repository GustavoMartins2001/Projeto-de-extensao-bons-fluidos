import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent implements OnInit {

  formCadastro!: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.validation();
  }

  validation() {
    this.formCadastro = this.fb.group({
      email:       ['', [Validators.required]],
      nome:           ['', [Validators.required]],
      telefone:          ['', [Validators.required]],
      senha:       ['' , [Validators.required]],
      apoiador:       [''],
    });
  }

  onSubmit() {
    console.log(this.formCadastro);
    this.router.navigateByUrl("listagem/usuario")
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
