import {Component, OnInit} from '@angular/core';
import {DepartmentService} from "../department.service";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.css']
})
export class DepartmentPageComponent implements OnInit {

  department: any;

  constructor(private router: Router, private page_title: Title, private department_service: DepartmentService, private route: ActivatedRoute) {
    this.page_title.setTitle("EMS | Department");
  }

  ngOnInit(): void {
    this.getDepartment();
  }

  // Gets the current department
  getDepartment(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.department_service.getDepartment(id).subscribe(any => this.department = any)
  }

  // Opens the employee page from the department
  goToDetail(data) {
    this.router.navigate(['employees/employee-page/' + data]);
  }


}
