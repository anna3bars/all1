import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { candeactGuard } from './candeact.guard';

describe('candeactGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => candeactGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
