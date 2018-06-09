import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySignupComponent } from './activity-signup.component';

describe('ActivitySignupComponent', () => {
  let component: ActivitySignupComponent;
  let fixture: ComponentFixture<ActivitySignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitySignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
