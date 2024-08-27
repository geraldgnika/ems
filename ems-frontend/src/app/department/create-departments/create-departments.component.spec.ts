import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateDepartmentsComponent} from './create-departments.component';

describe('MultipleFormComponent', () => {
  let component: CreateDepartmentsComponent;
  let fixture: ComponentFixture<CreateDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDepartmentsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create-department', () => {
    expect(component).toBeTruthy();
  });
});
