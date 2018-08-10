import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreatePageComponent } from './student-create-page.component';

describe('StudentCreatePageComponent', () => {
  let component: StudentCreatePageComponent;
  let fixture: ComponentFixture<StudentCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
