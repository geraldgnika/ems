import {Component, OnInit, Input} from "@angular/core";
import {DepartmentService} from "../department.service";

@Component({
  selector: "app-update-department",
  templateUrl: "./update-department.component.html",
  styleUrls: ["./update-department.component.css"],
})
export class UpdateDepartmentComponent implements OnInit {
  constructor(private department_service: DepartmentService) {
  }

  // Gets the department object from the parent class
  @Input() department: any;

  // The id of the current department opened from the modal
  department_id: string;

  // The name of the current department opened from the modal
  department_name: string;

  ngOnInit(): void {
    this.department_id = this.department.id;
    this.department_name = this.department.name;
  }

  updateDepartment() {
    let data = {
      id: this.department_id,
      name: this.department_name,
    };
    this.department_service.updateDepartment(data).subscribe((response) => {
      alert(response.toString());
    });
  }
}
