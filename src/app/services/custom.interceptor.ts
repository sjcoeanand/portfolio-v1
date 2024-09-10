import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('interceptor called', request);
    let loginToken = localStorage.getItem('loginToken');
    request = request.clone({headers: request.headers.set('Authorization', `Bearer ${loginToken}`)}) 
    return next.handle(request);
  }
}
