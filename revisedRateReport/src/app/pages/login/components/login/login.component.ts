import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService, IUser } from 'src/app/core/services/cognito.service';
import { UserLoginService } from '../../services/user-login.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { HelperService } from 'src/app/core/services/helper.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: IUser;

  constructor(
    private router: Router,
    public loaderService: LoaderService,
    private helperService: HelperService,
    private userLoginService: UserLoginService,
    private cognitoService: CognitoService,
    private snackBar: MatSnackBar
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
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  
  public onLogin(): void {
    if(this.loginForm.valid) {
      this.user = <IUser>this.loginForm.value;
      if (this.validatePassword(this.user.password)){
        this.helperService.showLoader();
        this.showSpinner = true;
          //Once the user is authenticated, the Cognito service should return an ID token, access token, and refresh token.
          this.cognitoService.signIn(this.user).then((session) => {

          // The User login service saving these tokens to local storage for later use.
          // this.userLoginService.saveUserTokens(session);

          this.helperService.hideLoader();
          this.showSpinner = false;
          // Navigate to dashboard screen
          this.router.navigate(['/dashboard']);
        }).catch((err) => {
          console.log("==> .> ",err);
          this.helperService.showErrorInConsole(err);
          this.showSpinner = false;
          return false;
        });
      }
    }
  }
  
  validatePassword(password: string){
    const passwordRegex: RegExp = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (!passwordRegex.test(password)) {
      this.helperService.showError( "Password must contain at least 1 number, <br>1 special character, 1 uppercase letter, 1 lowercase letter, and be at least 8 characters long.");
      return false;
    } else {
      return true; 
    }
  }


  resetTemporaryPassword() {

  }

  

}
