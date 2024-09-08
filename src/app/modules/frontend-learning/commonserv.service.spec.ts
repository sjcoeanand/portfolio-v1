import { TestBed } from '@angular/core/testing';

import { CommonservService } from './commonserv.service';

describe('CommonservService', () => {
  let service: CommonservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
