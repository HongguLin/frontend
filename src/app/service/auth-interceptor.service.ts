import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private tokenStore: TokenStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenStore.getToken();
    if (token != null) {
      const request = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });

      return next.handle(request);
    }
    return next.handle(req);
  }
}

export const httpInterceptorProvider = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
];
