import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Amplify, Auth } from 'aws-amplify';
import { environmentVariables } from 'src/environments/environment';
import { HelperService } from './helper.service';

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

  constructor(private helperService: HelperService) { 
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

  async signIn(user: IUser) {
    try {
      const signInResult = await Auth.signIn(user.username, user.password);
      if (signInResult.challengeName === 'NEW_PASSWORD_REQUIRED') {
        // User needs to change temporary password
        const newPassword = 'Test@1234';
        return await Auth.completeNewPassword(signInResult, newPassword);
      }
      // User is authenticated, retrieve tokens     
      this.authenticationSubject.next(true);
      return await Auth.currentSession();
    } catch (error: any) {
      // User authentication failed, handle error here
      if (error.code === "NotAuthorizedException") {
        this.helperService.showError(error.message);
      } else {
        console.error(error);
      }
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      await Auth.currentAuthenticatedUser();
      return true;
    } catch (err) {
      return false;
    }
  }
   
  async signOut() {
    try {
      await Auth.signOut();
      // Do any additional cleanup or navigation here
      // this.helperService.removeJwtToken('accessToken');
      // this.helperService.removeJwtToken('idToken');
      // this.helperService.removeJwtToken('refreshToken');
    } catch (error) {
      console.log('Error signing out:', error);
    }
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
