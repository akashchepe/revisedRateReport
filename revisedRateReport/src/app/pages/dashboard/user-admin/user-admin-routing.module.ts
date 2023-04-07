import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';


const routes: Routes = [
  { 
    path: '', component: AddUserComponent,
    children: [
      { path: 'list-user', component: ListUserComponent},
      { path: 'add-user', component: AddUserComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserAdminRoutingModule { }
