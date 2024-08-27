import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from "./app.component";

import {IndexComponent} from './index/index.component';

import {DepartmentComponent} from "./department/department.component";
import {EmployeeComponent} from "./employee/employee.component";

import {CreateDepartmentComponent} from './department/create-department/create-department.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';

import {CreateDepartmentsComponent} from './department/create-departments/create-departments.component';
import {CreateEmployeesComponent} from './employee/create-employees/create-employees.component';

import {UpdateDepartmentComponent} from "./department/update-department/update-department.component";
import {UpdateEmployeeComponent} from "./employee/update-employee/update-employee.component";

import {DepartmentPageComponent} from './department/department-page/department-page.component';
import {EmployeePageComponent} from './employee/employee-page/employee-page.component';

import {DepartmentService} from "./department/department.service";
import {EmployeeService} from "./employee/employee.service";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DepartmentComponent,
    EmployeeComponent,
    CreateDepartmentComponent,
    CreateEmployeeComponent,
    CreateDepartmentsComponent,
    CreateEmployeesComponent,
    UpdateDepartmentComponent,
    UpdateEmployeeComponent,
    DepartmentPageComponent,
    EmployeePageComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    DepartmentService,
    EmployeeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
