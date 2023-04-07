import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CognitoService, IUser } from 'src/app/core/services/cognito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: IUser;

  constructor(
    private router: Router,
    private auth: AuthService,
    private cognitoService: CognitoService
    ) {
      this.user = {} as IUser;
    }
  
  showSpinner = false;
  
  ngOnInit(): void {
    if(this.auth.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  public onLogin(): void {
    if(this.loginForm.valid) {
      console.log("this.loginForm.value ==> ",this.loginForm.value);
      this.user = <IUser>this.loginForm.value;
      this.cognitoService.signIn(this.user).then(() => {
        console.log("Login Successful", this.loginForm.value);
        this.router.navigate(['/dashboard']);
      }).catch((err) => {
        console.log("Login Failed ==> ",err);
        return false;
      });
    }
  }

}
