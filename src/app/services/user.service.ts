import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ENVIRONMENTS } from '../constants/environments';
import { HttpHeaders } from '@angular/common/http';

export type UserRegisterParam = {
  name: string;
  email: string;
  password: string;
  contact: string;
  supporter: boolean;
};

type JsonToken = {
  token: string;
}

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
    contact,
    password,
    supporter,
  }: UserRegisterParam): Promise<void> {
    this.$token = await lastValueFrom(
      this.http.post<string>(`${ENVIRONMENTS.API_URL}/api/user/register`, {
        name,
        email,
        contact,
        password,
        supporter,
      })
    );
  }

  async list() {
    var list = await lastValueFrom(
      this.http.get(`${ENVIRONMENTS.API_URL}/api/user/list`)
    );
    return list;
  }
}
  

