import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCmpComponent } from './activity-cmp.component';

describe('ActivityCmpComponent', () => {
  let component: ActivityCmpComponent;
  let fixture: ComponentFixture<ActivityCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
