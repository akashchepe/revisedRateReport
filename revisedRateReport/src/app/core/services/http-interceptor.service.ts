import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CognitoService } from './cognito.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private cognitoService: CognitoService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(req);

    //Use this below code once the Cognito API will be ready
    // return from(
    //   this.cognitoService.getCurrentSession()).pipe(mergeMap(resp => {
    //     let token = resp.clone({
    //       setHeaders: {
    //         Authorization: token
    //       }
    //     });
    //     console.log("req = ", req);
    //     return next.handle(req);
    //   }));


  }

}