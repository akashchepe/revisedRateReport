import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L3FileUploadComponent } from './l3-file-upload.component';

describe('L3FileUploadComponent', () => {
  let component: L3FileUploadComponent;
  let fixture: ComponentFixture<L3FileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L3FileUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L3FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
