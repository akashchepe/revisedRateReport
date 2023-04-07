import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService, IUser } from 'src/app/core/services/cognito.service';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: IUser;

  constructor(
    private router: Router,
    private userLoginService: UserLoginService,
    private cognitoService: CognitoService
    ) {
      this.user = {} as IUser;
    }
  
  showSpinner = false;
  
  async ngOnInit() {
    if(await this.cognitoService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  public onLogin(): void {
    if(this.loginForm.valid) {
      this.user = <IUser>this.loginForm.value;
        //Once the user is authenticated, the Cognito service 
        //should return an ID token, access token, and refresh token.
        this.cognitoService.signIn(this.user).then((session) => {

        // The User login service saving these tokens to local storage for later use.
        // this.userLoginService.saveUserTokens(session);

        // Navigate to dashboard screen
        this.router.navigate(['/dashboard']);
      }).catch((err) => {
        console.log("Login Failed ==> ",err);
        return false;
      });
    }
  }

}
