import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DepartmentPageComponent} from './department-page.component';

describe('DetailDepComponent', () => {
  let component: DepartmentPageComponent;
  let fixture: ComponentFixture<DepartmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create-department', () => {
    expect(component).toBeTruthy();
  });
});
