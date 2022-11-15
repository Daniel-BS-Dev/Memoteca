import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewThinkingComponent } from './modal-view-thinking.component';

describe('ModalViewThinkingComponent', () => {
  let component: ModalViewThinkingComponent;
  let fixture: ComponentFixture<ModalViewThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViewThinkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalViewThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
