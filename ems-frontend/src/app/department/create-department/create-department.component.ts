import {Component, OnInit, Input} from "@angular/core";
import {Location} from '@angular/common';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({
    name: new FormControl('', Validators.required)
  })

  constructor(private fb: FormBuilder, private page_title: Title, private _location: Location) {
    this.page_title.setTitle("EMS | Add Department");
  }

  ngOnInit() {
  }

}
