import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {EmployeeService} from "./employee.service";
import {environment} from "../../environments/environment";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  constructor(private page_title: Title, private employee_service: EmployeeService) {
    this.page_title.setTitle("EMS | Employees");
  }

  photo: any;

  EmployeeList: any = [];

  // Takes the value of the entered employee in the search bar
  EmployeeNameFilter: string = "";

  // Temporarily unfiltered employees list
  EmployeeListWithoutFilter: any = [];

  // Title of the bootstrap modal to edit an employee
  ModalTitle: string;

  // Boolean value to determine whether to show the modal div or no
  ActivateAddEditEmpComp: boolean = false;

  // Employee object
  employee: any;

  ngOnInit(): void {
    this.refreshEmpList();
    this.photo = environment.MEDIA_URL;
  }

  // Opens the modal of update department, and assigns the department object to 'emp'
  editClick(item) {
    console.log(item);
    this.employee = item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }

  // Confirms and then deletes the employee
  deleteClick(item) {
    if (confirm("Are you sure??")) {
      this.employee_service.deleteEmployee(item.id).subscribe((data) => {
        // alert(data.toString());
        this.refreshEmpList();
      });
    }
  }

  // Closes the modal div
  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  refreshEmpList() {
    this.employee_service.getEmployees().subscribe((data) => {
      this.EmployeeList = data;
      this.EmployeeListWithoutFilter = data;
    });
  }

  // Searches for the entered employee
  filterNames() {
    let EmployeeNameFilter = this.EmployeeNameFilter;

    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (
      el
    ) {
      return el.name.toString()
        .toLowerCase()
        .includes(EmployeeNameFilter.toString().trim().toLowerCase());
    });
  }

  // Sorts employee names alphabetically (ascending or descending)
  sortNames(prop, asc) {
    this.EmployeeList = this.EmployeeListWithoutFilter.sort(function (
      a,
      b
    ) {
      if (asc) {
        return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
      } else {
        return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
      }
    });
  }
}
