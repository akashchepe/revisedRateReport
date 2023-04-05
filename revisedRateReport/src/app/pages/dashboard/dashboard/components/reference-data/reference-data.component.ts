import { Component, OnInit } from '@angular/core';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Tenor {
  id: number;
  level: string;
  isEnabled: boolean;
}

@Component({
  selector: 'app-reference-data',
  templateUrl: './reference-data.component.html',
  styleUrls: ['./reference-data.component.css']
})
export class ReferenceDataComponent implements OnInit {
  myForm: FormGroup<any> = new FormGroup({});
  waterfallFilterOptions = [
    'Test 1',
    'Test 2',
    'Test 3'
  ];
  
  variableBenchmarkOptions = [
    'Quorum',
    'Trimming',
    'Percentage'
  ];
  

  constructor(
    private snackBarService: SnackBarService)
    {
      this.myForm = new FormGroup({
        lookBackDays: this.lookBackDays,
        waterfallFilter: this.waterfallFilter,
        variableBenchmark: this.variableBenchmark
      });
    }
    
  ngOnInit() {}

  lookBackDays = new FormControl(5, [Validators.required, Validators.min(1), Validators.max(10)]);
  waterfallFilter = new FormControl([''], [Validators.required]);
  variableBenchmark = new FormControl('', [Validators.required]);

  getErrorText(controlName: string): string {
    const control = this.myForm.get(controlName);
    if (control?.invalid && (control?.dirty || control?.touched)) {
      return 'This field is required';
    }
    return '';
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }

  openSnackBar() {
    this.snackBarService.openSnackBar('Reference data updated successfully.');
  }

  tenors: Tenor[] = [
    { id: 1, level: 'Level 1', isEnabled: true },
    { id: 2, level: 'Level 2.1', isEnabled: true },
    { id: 3, level: 'Level 2.2', isEnabled: true },
    { id: 4, level: 'Level 2.3', isEnabled: true },
    { id: 5, level: 'Level 3', isEnabled: true },
  ];

  originalTenorSequence: number[] = this.tenors.map(tenor => tenor.id);
  isSaveButtonDisabled = true;
  jsonOutput = '';


  onDrop(event: CdkDragDrop<Tenor[]>) {
    moveItemInArray(this.tenors, event.previousIndex, event.currentIndex);
    this.updateSaveButtonState();
    this.onSave();
  }

  onToggleChange(isEnabled: boolean, tenor: Tenor) {
    tenor.isEnabled = isEnabled;
    this.updateSaveButtonState();
    this.onSave();
  }  

  onSave() {
    this.originalTenorSequence = this.tenors.map(tenor => tenor.id);
    const enabledTenors = this.tenors.filter(tenor => tenor.isEnabled);
    this.isSaveButtonDisabled = true;
    this.jsonOutput = JSON.stringify(enabledTenors);
  }

  updateSaveButtonState() {
    const currentLevelSequence = this.tenors.map(tenor => tenor.id);
    this.isSaveButtonDisabled = currentLevelSequence.every((tenorId, index) => {
      return tenorId === this.originalTenorSequence[index];
    });
  }

}
