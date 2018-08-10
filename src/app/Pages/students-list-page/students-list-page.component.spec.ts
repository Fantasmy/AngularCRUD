import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsListPageComponent } from './students-list-page.component';

describe('StudentsListPageComponent', () => {
  let component: StudentsListPageComponent;
  let fixture: ComponentFixture<StudentsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
