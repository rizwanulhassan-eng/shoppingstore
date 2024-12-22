import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any[] = [];
  orders: any[] = [];
  products: any[] = [];

  constructor(private router: Router) {
    // Retrieve cart from sessionStorage
    const storedCart = sessionStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];

    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      // Parse the JSON string back into an array
      this.products = JSON.parse(storedProducts);

      // Filter products with gender 'female'
      
    } else {
      console.warn('No products found in local storage');
    }
  }

  // Decrease quantity or remove item
  decreaseQuantity(index: number): void {
    if (this.cart[index].amount > 1) {
      this.cart[index].amount--;
    } else {
      this.cart.splice(index, 1); // Remove item if quantity is 1
    }
    this.updateCart();
  }

  
  // Increase quantity
  increaseQuantity(index: number): void {
    this.cart[index].amount++;
    this.updateCart();
    
  }
  

  // Calculate total price
  getTotalPrice(): number {
    const val=this.cart.reduce((total, item) => total +(item.price * item.amount), 0);
    console.log(val);
    return val;
  }
  
  
  // Update cart in sessionStorage
  updateCart(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Place order
  placeOrder() {
    const isLoggedIn = this.checkLoginStatus();
    console.log(isLoggedIn);
    if(isLoggedIn)
    {
      confirm('Do you want to place the order?');
      alert('Your order has been placed!');
      // const orderSummary = JSON.stringify(this.cart);
      // localStorage.setItem('orderSummary', orderSummary);
      // console.log('Order Summary:', orderSummary);
      this.router.navigate(['/order']);

      // Clear cart
      this.cart = [];
    }
    else {
      alert('You are not logged in. Redirecting to the login page.');
      this.router.navigate(['/login']); // Redirect to the login component
      return;
    }

    
  }

  checkLoginStatus(): boolean {
    // Example logic: Check for a token or logged-in status in localStorage
    const val = sessionStorage.getItem('isLoggedIn');
    return val == 'true'; // Explicitly compare the string to 'true'
  }
}
