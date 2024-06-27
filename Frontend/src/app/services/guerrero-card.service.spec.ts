import { TestBed } from '@angular/core/testing';

import { GuerreroCardService } from './guerrero-card.service';

describe('GuerreroCardService', () => {
  let service: GuerreroCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuerreroCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
