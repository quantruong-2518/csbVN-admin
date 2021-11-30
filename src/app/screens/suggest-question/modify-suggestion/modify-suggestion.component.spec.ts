import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySuggestionComponent } from './modify-suggestion.component';

describe('ModifySuggestionComponent', () => {
  let component: ModifySuggestionComponent;
  let fixture: ComponentFixture<ModifySuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifySuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
