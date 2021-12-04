import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskgetComponent } from './taskget.component';

describe('TaskgetComponent', () => {
  let component: TaskgetComponent;
  let fixture: ComponentFixture<TaskgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
