import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerconsequencesPage } from './cancerconsequences.page';

describe('CancerconsequencesPage', () => {
  let component: CancerconsequencesPage;
  let fixture: ComponentFixture<CancerconsequencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancerconsequencesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerconsequencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
