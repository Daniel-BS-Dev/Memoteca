import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThinkingComponent } from './add-thinking.component';

describe('AddThinkingComponent', () => {
  let component: AddThinkingComponent;
  let fixture: ComponentFixture<AddThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddThinkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
