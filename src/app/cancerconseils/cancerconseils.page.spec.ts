import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerconseilsPage } from './cancerconseils.page';

describe('CancerconseilsPage', () => {
  let component: CancerconseilsPage;
  let fixture: ComponentFixture<CancerconseilsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancerconseilsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerconseilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
