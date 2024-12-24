import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService  {

  constructor() {}
  getloggedininfo(){
    return sessionStorage.getItem('isLoggedIn')==='true';
  }
  setloggedininfo(){
    sessionStorage.setItem('isLoggedIn','true');
  }
}
