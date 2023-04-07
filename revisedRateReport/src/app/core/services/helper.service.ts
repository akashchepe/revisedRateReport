import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  setJwtToken(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getJwtToken(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeJwtToken(key: string): void {
    localStorage.removeItem(key);
  }

}
