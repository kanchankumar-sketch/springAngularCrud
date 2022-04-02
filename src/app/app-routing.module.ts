import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CresteEmployeeComponent } from './creste-employee/creste-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {MycComponent} from './myc/myc.component';
import {NavbarComponent} from './navbar/navbar.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'first-component', component: EmployeeListComponent },
  { path: 'second-component', component: NavbarComponent },
  { path: 'third-component', component: NavbarComponent },
  { path: 'create-employee', component: CresteEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'delete-employee/:id', component: DeleteEmployeeComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: '',redirectTo:'first-component',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
