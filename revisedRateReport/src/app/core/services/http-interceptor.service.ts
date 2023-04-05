import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { finalize, map, mergeMap } from 'rxjs/operators';
import { CognitoService } from './cognito.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private cognitoService: CognitoService, public loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(
        () => {
          this.loaderService.isLoading.next(false);
        }
      )
    );

    //Use this below code once the Cognito API will be ready
    // return from(
    //   this.cognitoService.getCurrentSession()).pipe(mergeMap(resp => {
    //     let token = resp.clone({
    //       setHeaders: {
    //         Authorization: token
    //       }
    //     });
    //     console.log("req = ", req);
    //     return next.handle(req).pipe(
    //       finalize(
    //         () => {
    //           this.loaderService.isLoading.next(false);
    //         }
    //       )
    //     );;
    //   }));


  }

}
