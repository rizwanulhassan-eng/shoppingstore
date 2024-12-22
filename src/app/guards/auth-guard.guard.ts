import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) {
        // Redirect to login if the user is not logged in
        this.router.navigate(['/login']);
        return false;
      }
      return true;
  }
  
}
