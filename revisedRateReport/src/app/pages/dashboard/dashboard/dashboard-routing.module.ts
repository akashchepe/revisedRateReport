import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';
import { L3FileUploadComponent } from './components/l3-file-upload/l3-file-upload.component';
import { ReferenceDataComponent } from './components/reference-data/reference-data.component';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent,
    children: [
      { path: 'ref-data', component: ReferenceDataComponent},
      { path: 'generate-report', component: GenerateReportComponent},
      { path: 'l3-file-upload', component: L3FileUploadComponent},
      { path: 'user-admin',
          loadChildren: () => import('../user-admin/user-admin.module')
          .then(m => m.UserAdminModule)
      },
      { path: '', redirectTo: '/dashboard/ref-data', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
