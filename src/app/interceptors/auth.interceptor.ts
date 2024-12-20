import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ENVIRONMENTS } from '../constants/environments';

const AUTH_HEADER = 'Authorization';

type JsonToken = {
  token: string;
}

@Injectable({ providedIn: 'root', deps: [AuthService] })
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers || new HttpHeaders();

    req = req.clone({
      withCredentials: false,
      headers: headers || new HttpHeaders(),
    });

    const shouldAddAuthorizantion =
      req.url.indexOf(ENVIRONMENTS.API_URL) >= 0 &&
      !req.headers.get(AUTH_HEADER) &&
      req.url.indexOf('login') < 0;

    if (shouldAddAuthorizantion) {
      console.log(shouldAddAuthorizantion)
      if (this.authService.token) {
        //por algum motivo o token estava chegando com a palavra "token" na frente(EX:"token [TOKEN_REAL]"),
        //o que fazia o auth falhar no backend. isso resolve o problema 
        const sessionToken:JsonToken = this.authService.token as unknown as JsonToken

        req = req.clone({
          headers: req.headers.set(
            AUTH_HEADER,
            `Bearer ${sessionToken.token}`
          ),
        });
      }

    //Pega o token em cache pra nao ter que fazer login toda hora
      else if(sessionStorage.getItem("sessionToken")){
        var sessionToken: JsonToken = JSON.parse(sessionStorage.getItem("sessionToken") || '') as unknown as JsonToken

        console.log(sessionToken.token);

        req = req.clone({
          headers: req.headers.set(
            AUTH_HEADER,
            `Bearer ${sessionToken.token}`
          ),
        });
      }
    }

    return next.handle(req);
  }
}
