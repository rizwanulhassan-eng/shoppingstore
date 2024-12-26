import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartCountService } from '../services/cart-count.service';
@Component({
  selector: 'app-order-page',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderPageComponent implements OnInit {
  product:any;
  paymentForm: FormGroup;
  orderItems: any[] = []; // To hold the products in the cart
  subtotal = 0;
  tax = 0;
  total = 0;
  months: string[] = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
  ];
  years: string[] = Array.from({ length: 20 }, (_, i) =>
    (new Date().getFullYear() + i).toString()
  );

  constructor(private fb: FormBuilder,private router:Router,private cartcountservice:CartCountService) {
    this.paymentForm = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      zipcode: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expMonth: ['', Validators.required],
      expYear: ['', Validators.required],
      agreement: [false, Validators.requiredTrue],
    });
  }

  ngOnInit() {
    // Fetch the cart and products from localStorage
    const cart: number[] = JSON.parse(sessionStorage.getItem('cart') || '[]'); // Array of product IDs
    const products: any[] = JSON.parse(localStorage.getItem('products') || '[]'); // Array of all products
    // Map cart items to corresponding products
    this.product=products;
    this.orderItems = cart.map((id) => id);
    
    

    // Calculate subtotal, tax, and total
    this.calculateTotals();
  }

  calculateTotals() {
    console.log(this.orderItems);
    this.subtotal = this.orderItems.reduce((sum, item) => sum + item.price, 0);
    this.tax = +(this.subtotal * 0.075).toFixed(2); // 7.5% tax
    this.total = +(this.subtotal + this.tax).toFixed(2);
  }

  get fullName() {
    return this.paymentForm.get('fullName');
  }

  get address() {
    return this.paymentForm.get('address');
  }

  get zipcode() {
    return this.paymentForm.get('zipcode');
  }

  get country() {
    return this.paymentForm.get('country');
  }

  get cardNumber() {
    return this.paymentForm.get('cardNumber');
  }

  get expMonth() {
    return this.paymentForm.get('expMonth');
  }

  get expYear() {
    return this.paymentForm.get('expYear');
  }

  get agreement() {
    return this.paymentForm.get('agreement');
  }

  placeOrder() {
    if (this.paymentForm.valid) {
      const orderDetails = {
        items: this.orderItems,
        address: this.paymentForm.value.address,
        payment: {
          cardNumber: this.paymentForm.value.cardNumber,
          expMonth: this.paymentForm.value.expMonth,
          expYear: this.paymentForm.value.expYear,
        },
        total: this.total,
      };

      // Save the order to localStorage or perform API call
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      existingOrders.push(orderDetails);
      localStorage.setItem('orders', JSON.stringify(existingOrders));

      // Optionally, clear the cart after placing the order
      sessionStorage.removeItem('cart');
      this.cartcountservice.updateCartLength();
      this.router.navigate(['']);
    }
  }
}
