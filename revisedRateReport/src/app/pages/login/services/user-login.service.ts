import { Injectable } from '@angular/core';
import { HelperService } from 'src/app/core/services/helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private helperService: HelperService) { }

  saveUserTokens(session:any) {
    
    const accessToken = session.getAccessToken().getJwtToken();
    const idToken = session.getIdToken().getJwtToken();
    const refreshToken = session.getRefreshToken().getToken();

    if(accessToken){
      this.helperService.setJwtToken('accessToken', accessToken);
    }
    if(idToken){
      this.helperService.setJwtToken('idToken', idToken);
    }
    if(refreshToken){
      this.helperService.setJwtToken('refreshToken', refreshToken);
    }

  }

}
