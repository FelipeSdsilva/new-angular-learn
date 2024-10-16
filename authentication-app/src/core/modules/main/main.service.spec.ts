import { TestBed } from '@angular/core/testing';
import { MainService } from '../../../core/modules/main/main.service';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
