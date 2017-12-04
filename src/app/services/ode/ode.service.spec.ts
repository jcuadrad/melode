import { TestBed, inject } from '@angular/core/testing';

import { OdeService } from './ode.service';

describe('OdeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OdeService]
    });
  });

  it('should be created', inject([OdeService], (service: OdeService) => {
    expect(service).toBeTruthy();
  }));
});
