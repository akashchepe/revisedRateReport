import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }
  
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
  
  onLogin() {
    if(this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['dashboard']);
        },
        (err: Error) => {
          alert(err.message);
        }
      )
    }
    console.log(this.loginForm.value);
  }

}
