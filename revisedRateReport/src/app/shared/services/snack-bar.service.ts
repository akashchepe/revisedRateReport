import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../reusableComponents/snack-bar/snack-bar.component';
import { snackBarConfig } from 'src/app/core/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  durationInSeconds;
  horizontalPosition: any;
  verticalPosition: any;

  constructor(private _snackBar: MatSnackBar) {
    this.durationInSeconds = snackBarConfig.SNACK_BAR_DURATION_IN_SECONDS;
    this.horizontalPosition = snackBarConfig.SNACK_BAR_HORIZONTAL_POSITION;
    this.verticalPosition = snackBarConfig.SNACK_BAR_VERTICAL_POSITION;
  }
  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      data: {
        message: message
      },
      duration: this.durationInSeconds,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  openSnackBarWithAction(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: this.durationInSeconds,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  
}
