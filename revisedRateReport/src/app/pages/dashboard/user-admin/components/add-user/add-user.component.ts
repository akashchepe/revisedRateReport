import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CognitoService, IUser } from 'src/app/core/services/cognito.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: IUser;

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private auth: AuthService,
    private cognitoService: CognitoService
    ) {
      this.user = {} as IUser;
    }
  
  showSpinner = false;

  ngOnInit(): void {
  }

  signUp() {
    if(this.userForm.valid) {
      console.log("this.loginForm.value ==> ",this.userForm.value);
      this.user = <IUser>this.userForm.value;
      this.cognitoService.signUp(this.user).then(() => {
        console.log("SignUp Successful", this.userForm.value);
      }).catch((err) => {
        console.log("Sign Up Failed ==> ",err);
        return false;
      });
    }
  }

}
