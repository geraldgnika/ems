import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  header_title: string;
  desc: string;

  constructor() {
  }

  ngOnInit(): void {
    this.header_title = "EMPLOYEE MANAGEMENT SYSTEM";
    this.desc = "EMS (abbr. for Employee Management System) serves its purpose as an online platform that provides companies with an interface to administrate their employees in real-time. More functionality is to be added in the near future.";
  }

}
