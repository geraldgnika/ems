import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {DepartmentService} from "../department.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-department-many',
  templateUrl: './create-departments.component.html',
  styleUrls: ['./create-departments.component.css']
})
export class CreateDepartmentsComponent implements OnInit {

  constructor(private fb: FormBuilder, private department_service: DepartmentService, private _location: Location) {
  }

  // Holds the departments list entered from the form
  Departments: any = [];

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
    this.dataDictionary.push(this.department_service.addAnotherDepartmentForm());
  }

  ngOnInit(): void {
    this.formObject = this.fb.group({
      dataDictionary: new FormArray([])
    });
    this.addAnotherDepartmentForm();
  }

  // Submit the whole request to the server
  submitForm() {
    this.Departments = this.formObject.value;
    this.department_service.saveDepartments(this.Departments).subscribe((response: any) => {
      alert(response.toString());
      this._location.back();
    })
  }

}
