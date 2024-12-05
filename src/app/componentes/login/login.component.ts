import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  form?: FormGroup;
  loginError: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onRegister(): void {
    this.router.navigate(['/cadastros/usuario']);
  }

  async onSubmit(): Promise<void> {
    this.form?.markAllAsTouched();

    try {
      await this.authService.login(this.form?.getRawValue());
      this.router.navigate(['/listagem/evento']);
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        const err = error as HttpErrorResponse;
        if (err.status === 401) {
          this.loginError = true;
          return;
        }
      } else {
        alert('Falha ao efetuar login!');
      }
    }
  }
}
