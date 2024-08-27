import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateEmployeeComponent} from './create-employee.component';

describe('AddEmpComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEmployeeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create-department', () => {
    expect(component).toBeTruthy();
  });
});
