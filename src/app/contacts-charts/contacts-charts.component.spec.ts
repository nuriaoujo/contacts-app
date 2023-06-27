import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsChartsComponent } from './contacts-charts.component';

describe('ContactsChartsComponent', () => {
  let component: ContactsChartsComponent;
  let fixture: ComponentFixture<ContactsChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
