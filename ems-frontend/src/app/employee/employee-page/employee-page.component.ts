import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-department-page-emp',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  employee: any;
  photo: any;

  constructor(private page_title: Title, private employee_service: EmployeeService, private route: ActivatedRoute) {
    this.page_title.setTitle("EMS | Employee");
  }

  ngOnInit(): void {
    this.getEmployee();
    this.photo = environment.MEDIA_URL;
  }

  // Gets the current employee
  getEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.employee_service.getEmployee(id).subscribe(any => this.employee = any)
  }

}
