import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/core/services/helper.service';
import { UserLoginService } from '../../services/user-login.service';
import { CognitoService, IUser } from 'src/app/core/services/cognito.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  user: IUser;

  constructor(
    private router: Router,
    private helperService: HelperService,
    private userLoginService: UserLoginService,
    private cognitoService: CognitoService
  ) {
    this.user = {} as IUser;
   }
   
  showSpinner = false;
  
  ngOnInit(): void {
  }


  newPasswordForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  changePassword() {

  }

}
