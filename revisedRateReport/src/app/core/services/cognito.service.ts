import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Amplify, Auth } from 'aws-amplify';
import { environmentVariables } from 'src/environments/environment';

export interface IUser {
  name: string,
  email: string,
  phone_number: string,
  password: string,
  code: string,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  public authenticationSubject: BehaviorSubject<any>;

  constructor() { 
    Amplify.configure({
      Auth: environmentVariables.cognito
    });
    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  public signUp(user: IUser): Promise<any> {
    return Auth.signUp({
      username: user.username,
      password: user.password,
      attributes: {
        name: user.name,
        email: user.email,
        phone_number: user.phone_number
      }
    })
    .then((data) => {
      console.log("SignUp Successful", data);
    })
    .catch((error) => {
      console.log("SignUp Error", error);
    })
  }

  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }
   
  public signIn(user: IUser): Promise<any> {
    console.log("User from cognito ==> ",user);
    return Auth.signIn(user.username, user.password).then((user) => {
      console.log("Inside sign in  ==> ",user);
      if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        // User need to change temp password
        const newPassword = 'Test@1234';
        Auth.sendCustomChallengeAnswer(user, newPassword)
        .then(() => {
          console.log("Password Changed Successfully.", user);
        })
        .catch((error) => {
          console.log("Error changing password ", error);
        });

      } else {
        console.log("====> ",user);
        console.log("User is authenticated");
      }
      this.authenticationSubject.next(true);
    });
  }

  public signOut(): Promise<any> {
    return Auth.signOut().then(() => {
      this.authenticationSubject.next(false);
    });
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public isAuthenticated(): Promise<boolean> {
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getUser().then((user: any) => {
        if (user) {
          return true;
        } else {
          return false;
        }
      }).catch(() => {
        return false;
      });
    }
  }

}
