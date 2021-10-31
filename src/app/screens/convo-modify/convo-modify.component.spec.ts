import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvoModifyComponent } from './convo-modify.component';

describe('ConvoModifyComponent', () => {
  let component: ConvoModifyComponent;
  let fixture: ComponentFixture<ConvoModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvoModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvoModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
