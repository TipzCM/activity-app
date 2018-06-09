import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCmpComponent } from './message-cmp.component';

describe('MessageCmpComponent', () => {
  let component: MessageCmpComponent;
  let fixture: ComponentFixture<MessageCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
