import { TestBed } from '@angular/core/testing';

import { Service2 } from './service2.service';

describe('Service2', () => {
  let service: Service2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
