import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './reusableComponents/snack-bar/snack-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './services/snack-bar.service';

@NgModule({
  declarations: [
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [
    SnackBarComponent
  ],
  providers:[SnackBarService]
})
export class SharedModule { }
