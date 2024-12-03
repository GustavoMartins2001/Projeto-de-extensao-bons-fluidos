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
      if (this.authService.token) {
        req = req.clone({
          headers: req.headers.set(
            AUTH_HEADER,
            `Bearer ${this.authService.token}`
          ),
        });
      }
    }

    return next.handle(req);
  }
}
