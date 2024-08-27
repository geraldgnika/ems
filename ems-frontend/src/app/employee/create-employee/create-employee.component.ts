import {Component, OnInit, Input} from "@angular/core";
import {DepartmentService} from "../../department/department.service";
import {Location} from '@angular/common';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    created_at: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
  })

  constructor(private fb: FormBuilder, private page_title: Title, private department_service: DepartmentService, private _location: Location) {
    this.page_title.setTitle("EMS | Add Department");
  }

  ngOnInit() {
    this.loadDepartmentList();
  }

  employee_id: string;
  employee_name: string;
  created_at: string;
  profile_photo: string;
  photo_path: string;
  Department: string;

  DepartmentsList: any = [];

  loadDepartmentList() {
    this.department_service.getDepartments().subscribe((data: any) => {
      this.DepartmentsList = data;
    });
  }

}
