import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadWordsComponent } from './bad-words.component';

describe('BadWordsComponent', () => {
  let component: BadWordsComponent;
  let fixture: ComponentFixture<BadWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
