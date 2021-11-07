import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvoDetailComponent } from './convo-detail.component';

describe('ConvoDetailComponent', () => {
  let component: ConvoDetailComponent;
  let fixture: ComponentFixture<ConvoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
