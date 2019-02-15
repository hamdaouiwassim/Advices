import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressioncausesPage } from './pressioncauses.page';

describe('PressioncausesPage', () => {
  let component: PressioncausesPage;
  let fixture: ComponentFixture<PressioncausesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressioncausesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressioncausesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
