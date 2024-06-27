import { TestBed } from '@angular/core/testing';

import { TransformacionService } from './transformacion.service';

describe('TransformacionService', () => {
  let service: TransformacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
