import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressionconsequencesPage } from './pressionconsequences.page';

describe('PressionconsequencesPage', () => {
  let component: PressionconsequencesPage;
  let fixture: ComponentFixture<PressionconsequencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressionconsequencesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressionconsequencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
