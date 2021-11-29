import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestQuestionComponent } from './suggest-question.component';

describe('SuggestQuestionComponent', () => {
  let component: SuggestQuestionComponent;
  let fixture: ComponentFixture<SuggestQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
