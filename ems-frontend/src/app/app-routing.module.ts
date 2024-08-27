import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {IndexComponent} from "./index/index.component";

import {DepartmentComponent} from "./department/department.component";
import {EmployeeComponent} from "./employee/employee.component";

import {CreateDepartmentsComponent} from "./department/create-departments/create-departments.component";
import {CreateEmployeesComponent} from "./employee/create-employees/create-employees.component";

import {DepartmentPageComponent} from './department/department-page/department-page.component';
import {EmployeePageComponent} from './employee/employee-page/employee-page.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "departments", component: DepartmentComponent},
  {path: "employees", component: EmployeeComponent},
  {path: "departments/create-department", component: CreateDepartmentsComponent},
  {path: "employees/create-employee", component: CreateEmployeesComponent},
  {path: "departments/department-page/:id", component: DepartmentPageComponent},
  {path: "employees/employee-page/:id", component: EmployeePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
