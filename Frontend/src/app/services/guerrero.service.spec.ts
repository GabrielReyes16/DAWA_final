import { TestBed } from '@angular/core/testing';

import { GuerreroService } from './guerrero.service';

describe('GuerreroService', () => {
  let service: GuerreroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuerreroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
