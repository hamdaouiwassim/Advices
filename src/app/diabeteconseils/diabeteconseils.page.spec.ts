import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabeteconseilsPage } from './diabeteconseils.page';

describe('DiabeteconseilsPage', () => {
  let component: DiabeteconseilsPage;
  let fixture: ComponentFixture<DiabeteconseilsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabeteconseilsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabeteconseilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
