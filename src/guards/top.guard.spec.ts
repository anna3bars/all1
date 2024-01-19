import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { topGuard } from './top.guard';

describe('topGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => topGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
