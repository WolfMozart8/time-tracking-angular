import { TestBed } from '@angular/core/testing';

import { SelectTimeService } from './select-time.service';

describe('SelectTimeService', () => {
  let service: SelectTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
