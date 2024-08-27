import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  // Get list of employees
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(environment.EMPLOYEES_URL);
  }

  // Update an employee
  updateEmployee(data: any) {
    return this.http.put(environment.EMPLOYEES_URL, data);
  }

  // Delete an employee
  deleteEmployee(data: any) {
    return this.http.delete(environment.EMPLOYEES_URL + data);
  }

  // Get an employee
  getEmployee(id: any): Observable<any> {
    return this.http.get<any>(environment.EMPLOYEE_URL + id);
  }

  // Add an employee form in the form group
  addAnotherEmployeeForm() {
    return this.fb.group({
      name: [''],
      created_at: [''],
      department: [''],
    })
  }

  // Save data of all employees
  public saveEmployees(data) {
    return this.http.post(environment.EMPLOYEES_URL, data);
  }

  // Upload profile picture
  uploadProfilePhoto(data: any) {
    return this.http.post(environment.PROFILE_PICTURE_URL, data);
  }
}
