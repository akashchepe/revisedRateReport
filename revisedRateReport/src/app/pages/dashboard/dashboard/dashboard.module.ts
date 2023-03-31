import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReferenceDataComponent } from './components/reference-data/reference-data.component';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';
import { DownloadReportComponent } from './components/download-report/download-report.component';
import { L3FileUploadComponent } from './components/l3-file-upload/l3-file-upload.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    DashboardComponent,
    ReferenceDataComponent,
    GenerateReportComponent,
    DownloadReportComponent,
    L3FileUploadComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class DashboardModule { }
