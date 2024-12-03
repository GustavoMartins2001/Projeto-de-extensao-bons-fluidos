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

  async onSubmit(): Promise<void> {
    this.form?.markAllAsTouched();

    if (this.form?.invalid) {
      this.loginError = true;
    }

    try {
      await this.authService.login(this.form?.getRawValue());
    } catch (_) {
      this.loginError = true;
    } finally {
      this.router.navigate(['/listagem/evento']);
    }
  }
}
