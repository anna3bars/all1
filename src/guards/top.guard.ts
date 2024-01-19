import { CanActivateFn } from '@angular/router';

export const topGuard: CanActivateFn = (route, state) => {
  return true;
};
