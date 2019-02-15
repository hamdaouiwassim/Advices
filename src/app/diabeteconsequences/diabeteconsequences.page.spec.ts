import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabeteconsequencesPage } from './diabeteconsequences.page';

describe('DiabeteconsequencesPage', () => {
  let component: DiabeteconsequencesPage;
  let fixture: ComponentFixture<DiabeteconsequencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabeteconsequencesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabeteconsequencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
