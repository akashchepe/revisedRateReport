import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private snackBar: MatSnackBar,
    public loaderService: LoaderService,
    ) { }

  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      verticalPosition: 'top'
    }).afterDismissed().subscribe(() => {
      this.hideLoader();
    });
  }

  showErrorInConsole(message: string): void {
    console.log(message);
    this.hideLoader();
  }

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: 'success-snackbar'
    });
  }

  showLoader(): Observable<boolean> {
    this.loaderService.isLoading.next(true);
    return of(true);
  }

  hideLoader(): void {
    this.loaderService.isLoading.next(false);
  }

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
