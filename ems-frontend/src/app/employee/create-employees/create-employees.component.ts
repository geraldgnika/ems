import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-department-many',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  constructor(private fb: FormBuilder, private employee_service: EmployeeService, private _location: Location) {
  }

  // Holds the employees list entered from the form
  Employees: any = [];

  // The form object
  formObject: FormGroup;

  // Get the dictionary of data from the form object
  get dataDictionary() {
    return (<FormArray>this.formObject.get('dataDictionary'));
  }

  // Remove a form unit from the form group
  removeForm(i: number) {
    this.dataDictionary.removeAt(i);
  }

  // Add a form unit to the form group
  addAnotherDepartmentForm() {
    this.dataDictionary.push(this.employee_service.addAnotherEmployeeForm());
  }

  ngOnInit(): void {
    this.formObject = this.fb.group({
      dataDictionary: new FormArray([])
    });
    this.addAnotherDepartmentForm();
  }

  // Submit the whole request to the server
  submitForm() {
    this.Employees = this.formObject.value;
    console.log(this.formObject.value);
    this.employee_service.saveEmployees(this.Employees).subscribe((response: any) => {
      alert(response.toString());
      this._location.back();
    })
  }

}
