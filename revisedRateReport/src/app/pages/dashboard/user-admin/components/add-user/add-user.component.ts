import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CognitoService, IUser } from 'src/app/core/services/cognito.service';
import { HelperService } from 'src/app/core/services/helper.service';

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
    private cognitoService: CognitoService,
    private helperService: HelperService,
    ) {
      this.user = {} as IUser;
    }
  
  showSpinner = false;

  ngOnInit(): void {
  }

  signUp() {
    if(this.userForm.valid) {
      this.helperService.showLoader();
      this.user = <IUser>this.userForm.value;
      this.cognitoService.signUp(this.user).then(() => {
        this.helperService.showSuccess('User created successfully. Please reset the temoprary password.');
        this.helperService.hideLoader();
      }).catch((err) => {
        
        this.helperService.showErrorInConsole(err);
        return false;
      });
    }
  }

}
