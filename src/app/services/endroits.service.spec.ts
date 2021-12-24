import { TestBed } from '@angular/core/testing';

import { EndroitsService } from './endroits.service';

describe('EndroitsService', () => {
  let service: EndroitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndroitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
