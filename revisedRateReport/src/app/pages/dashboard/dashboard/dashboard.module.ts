import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReferenceDataComponent } from './components/reference-data/reference-data.component';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';
import { DownloadReportComponent } from './components/download-report/download-report.component';
import { L3FileUploadComponent } from './components/l3-file-upload/l3-file-upload.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';

import {SharedModule} from 'src/app/shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    DashboardComponent,
    ReferenceDataComponent,
    GenerateReportComponent,
    DownloadReportComponent,
    L3FileUploadComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatStepperModule
  ],
})
export class DashboardModule { }
