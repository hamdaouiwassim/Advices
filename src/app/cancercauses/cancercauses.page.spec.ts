import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancercausesPage } from './cancercauses.page';

describe('CancercausesPage', () => {
  let component: CancercausesPage;
  let fixture: ComponentFixture<CancercausesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancercausesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancercausesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
