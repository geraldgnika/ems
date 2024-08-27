import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {DepartmentService} from "./department.service";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.css"],
})
export class DepartmentComponent implements OnInit {
  constructor(private page_title: Title, private department_service: DepartmentService) {
    this.page_title.setTitle("EMS | Departments");
  }

  DepartmentList: any = [];

  // Title of the bootstrap modal to edit a department
  ModalTitle: string;

  // Boolean value to determine whether to show the modal div or no
  ModalVisibility: boolean = false;

  // Department object
  department: any;

  // Takes the value of the entered department in the search bar
  DepartmentNameFilter: string = "";

  // Temporarily unfiltered departments list
  DepartmentListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshDepList();
  }

  // Opens the modal of update department, and assigns the department object to 'dep'
  editClick(item) {
    this.department = item;
    this.ModalTitle = "Edit Department";
    this.ModalVisibility = true;
  }

  // Confirms and then deletes the department
  deleteClick(item) {
    if (confirm("Are you sure??")) {
      this.department_service.deleteDepartment(item.id).subscribe((data) => {
        // alert(data.toString());
        this.refreshDepList();
      });
    }
  }

  // Closes the modal div
  closeClick() {
    this.ModalVisibility = false;
    this.refreshDepList();
  }

  refreshDepList() {
    this.department_service.getDepartments().subscribe((data) => {
      this.DepartmentList = data;
      this.DepartmentListWithoutFilter = data;
    });
  }

  // Searches for the entered department
  filterNames() {
    let DepartmentNameFilter = this.DepartmentNameFilter;

    this.DepartmentList = this.DepartmentListWithoutFilter.filter(function (
      el
    ) {
      return el.name.toString()
        .toLowerCase()
        .includes(DepartmentNameFilter.toString().trim().toLowerCase());
    });
  }

  // Sorts department names alphabetically (ascending or descending)
  sortNames(prop, asc) {
    this.DepartmentList = this.DepartmentListWithoutFilter.sort(function (
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
