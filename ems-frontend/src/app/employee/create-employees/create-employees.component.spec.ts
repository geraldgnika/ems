import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateEmployeesComponent} from './create-employees.component';

describe('EMultipleFormComponent', () => {
  let component: CreateEmployeesComponent;
  let fixture: ComponentFixture<CreateEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEmployeesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create-department', () => {
    expect(component).toBeTruthy();
  });
});
