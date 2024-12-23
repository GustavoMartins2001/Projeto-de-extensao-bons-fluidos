import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ENVIRONMENTS } from '../constants/environments';
import { HttpHeaders } from '@angular/common/http';

export type EventRegisterParam = {
  description: string;
  date: Date;
  participants: Object;
};

type JsonToken = {
  token: string;
}

@Injectable({ providedIn: 'root', deps: [HttpClient] })
export class EventService {
  constructor(private readonly http: HttpClient) {}

  private $token: string = '';

  get token(): string {
    return this.$token;
  }

  async register({
    description,
      date,
      participants,
    }: EventRegisterParam): Promise<void> {

      this.$token = await lastValueFrom(
        this.http.post<string>(`${ENVIRONMENTS.API_URL}/api/event/create`, {
          description,
          date,
          participants,
        })
      );
    }

  async list() {
      var list = await lastValueFrom(
        this.http.get(`${ENVIRONMENTS.API_URL}/api/event/list`)
      );
      return list;
    }
}
  

