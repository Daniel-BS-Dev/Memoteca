import { TestBed } from '@angular/core/testing';

import { ThinkingService } from './thinking.service';

describe('ThinkingService', () => {
  let service: ThinkingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThinkingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
