import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {
  durationInSeconds = 5;
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  showMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: this.durationInSeconds,
      verticalPosition: 'top'
    });
  }

}
