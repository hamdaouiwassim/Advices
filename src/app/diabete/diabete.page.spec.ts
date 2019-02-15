import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetePage } from './diabete.page';

describe('DiabetePage', () => {
  let component: DiabetePage;
  let fixture: ComponentFixture<DiabetePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
