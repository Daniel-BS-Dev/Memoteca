import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThinkingComponent } from './view-thinking.component';

describe('ViewThinkingComponent', () => {
  let component: ViewThinkingComponent;
  let fixture: ComponentFixture<ViewThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewThinkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
