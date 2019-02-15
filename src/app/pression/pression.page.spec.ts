import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressionPage } from './pression.page';

describe('PressionPage', () => {
  let component: PressionPage;
  let fixture: ComponentFixture<PressionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
