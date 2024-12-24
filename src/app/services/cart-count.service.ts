import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCountService {

  private cartLengthSubject = new BehaviorSubject<number>(0); 
  cartLength$ = this.cartLengthSubject.asObservable(); 

  constructor() {
    this.updateCartLength(); // Initialize the cart length
  }

  // Method to update cart length based on localStorage
  updateCartLength(): void {
    
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    console.log(cart.length);
    this.cartLengthSubject.next(cart.length);
  }

  // Method to get the current cart length directly
  getCartLength(): number {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    return cart.length;
  }
}
