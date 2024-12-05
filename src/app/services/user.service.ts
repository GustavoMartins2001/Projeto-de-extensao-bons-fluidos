import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ENVIRONMENTS } from '../constants/environments';

export type UserRegisterParam = {
  name: string;
  email: string;
  password: string;
  phone: string;
  apoiador: boolean;
};

@Injectable({ providedIn: 'root', deps: [HttpClient] })
export class UserService {
  constructor(private readonly http: HttpClient) {}

  private $token: string = '';

  get token(): string {
    return this.$token;
  }

  async register({
    name,
    email,
    phone,
    password,
    apoiador,
  }: UserRegisterParam): Promise<void> {
    this.$token = await lastValueFrom(
      this.http.post<string>(`${ENVIRONMENTS.API_URL}/api/user/register`, {
        name,
        email,
        phone,
        password,
        apoiador,
      })
    );
  }
}
