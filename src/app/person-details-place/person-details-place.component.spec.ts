import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsPlaceComponent } from './person-details-place.component';

describe('PersonDetailsPlaceComponent', () => {
  let component: PersonDetailsPlaceComponent;
  let fixture: ComponentFixture<PersonDetailsPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailsPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailsPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
