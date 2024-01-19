import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const accountGuard: CanActivateFn = (route, state) => {
  const  token = localStorage.getItem('token');
  const  router = inject(Router);
  if(token){
    console.log(4627);
    console.log(token);
    
    // router.navigate(['l']);
    return true
  }
  router.navigate(['']);
  return false;
};
