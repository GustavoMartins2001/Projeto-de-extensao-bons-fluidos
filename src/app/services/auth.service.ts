import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ENVIRONMENTS } from '../constants/environments';

@Injectable({ providedIn: 'root', deps: [HttpClient] })
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  private $token: string = '';

  get token(): string {
    return this.$token;
  }

  async login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void> {
    this.$token = await lastValueFrom(
      this.http.post<string>(ENVIRONMENTS.API_URL, {
        email,
        password,
      })
    );
  }
}
