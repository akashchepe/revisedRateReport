import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from './helper.service';
import { CognitoService } from './cognito.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router, 
    private helperService: HelperService,
    private cognitoService: CognitoService
    ) { }

  isAuthenticated() {
    return this.cognitoService.isAuthenticated();
  }

  logout() {
    this.cognitoService.signOut();
    this.router.navigate(['login']);
  }

  // signIn(username: any): void {
  //   this.cognitoService.signIn(username).then(() => {
  //     return true;
  //   }).catch(() => {
  //     return false;
  //   });

    // if (username === 'admin' && password === 'admin') {
    //   this.setToken('ThisIsTheDummyToken.testets.test');
    //   return of({name: 'test', username:'Akash'});
    // } else {
    //   return throwError(new Error('failed to login'));
    // }
 //}

}
