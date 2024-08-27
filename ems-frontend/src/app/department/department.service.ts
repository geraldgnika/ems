import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  // Get list of departments
  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(environment.DEPARTMENTS_URL);
  }

  // Update a department
  updateDepartment(data: any) {
    return this.http.put(environment.DEPARTMENTS_URL, data);
  }

  // Delete a department
  deleteDepartment(data: any) {
    return this.http.delete(environment.DEPARTMENTS_URL + data);
  }

  // Get a department
  getDepartment(id: any): Observable<any> {
    return this.http.get<any>(environment.DEPARTMENT_URL + id);
  }

  // Add a department form in the form group
  addAnotherDepartmentForm() {
    return this.fb.group({
      name: [''],
    })
  }

  // Save data of all departments
  public saveDepartments(data) {
    return this.http.post(environment.DEPARTMENTS_URL, data);
  }
}
