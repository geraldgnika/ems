import {Component, OnInit, Input} from "@angular/core";
import {EmployeeService} from "../employee.service";
import {DepartmentService} from "../../department/department.service"
import {environment} from "../../../environments/environment";

@Component({
  selector: "app-update-employee",
  templateUrl: "./update-employee.component.html",
  styleUrls: ["./update-employee.component.css"],
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(private employee_service: EmployeeService, private department_service: DepartmentService) {
  }

  // Gets the employee object from the parent class
  @Input() employee: any;

  // The id of the current employee opened from the modal
  employee_id: string;

  // The name of the current employee opened from the modal
  employee_name: string;

  // The account creation date of the current employee opened from the modal
  created_at: string;

  // The profile photo of the current employee opened from the modal
  profile_photo: string;

  // The path of the current employee opened from the modal
  photo_path: string;

  // The department of the current employee opened from the modal
  Department: string;

  // The available departments shown in the dropdown
  DepartmentsList: any = [];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList() {
    this.department_service.getDepartments().subscribe((data: any) => {
      this.DepartmentsList = data;

      this.employee_id = this.employee.id;
      this.employee_name = this.employee.name;
      this.created_at = this.employee.created_at;
      this.profile_photo = this.employee.profile_photo;
      this.photo_path = environment.MEDIA_URL + this.profile_photo;
      this.Department = this.employee.department;
    });
  }

  updateEmployee() {
    let data = {
      id: this.employee_id,
      name: this.employee_name,
      created_at: this.created_at,
      profile_photo: this.profile_photo,
      department: this.Department,
    };

    this.employee_service.updateEmployee(data).subscribe((response) => {
      alert(response.toString());
    });
  }

  uploadProfilePhoto(event) {
    let file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append("photo", file, file.name);

    this.employee_service.uploadProfilePhoto(formData).subscribe((data: any) => {
      this.profile_photo = data.toString();
      this.photo_path = environment.MEDIA_URL + this.profile_photo;
    });
  }
}
