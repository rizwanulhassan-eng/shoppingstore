import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-womensproduct',
  templateUrl: './womensproduct.component.html',
  styleUrls: ['./womensproduct.component.css']
})
export class WomensproductComponent implements OnInit{

  products: any[] = [];
  ngOnInit(): void {
    // Retrieve products from local storage
    const storedProducts = localStorage.getItem('products');
    
    if (storedProducts) {
      // Parse the JSON string back into an array
      const allProducts = JSON.parse(storedProducts);

      // Filter products with gender 'female'
      this.products = allProducts.filter((product: any) => product.gender === 'female');
    } else {
      console.warn('No products found in local storage');
    }
  }
  toastMessage: string | null = null;
  showtoast=false;
  hoveredProductId: number | null = null;

  constructor(private router: Router) {}

  addToCart(product: any) {
    const storedCart = sessionStorage.getItem('cart');
    let cart = storedCart ? JSON.parse(storedCart) : [];

    // Check if the product already exists in the cart
    const existingProduct = cart.find((item: any) => item.id === product.id);
    if (existingProduct) {
      this.showToast('Product is already added to the cart!');
    } else {
      const newProduct = {
        id: product.id,
        size: "",
        amount: 1, // Initial amount is 0
        price:product.price
      };
      cart.push(newProduct);
      sessionStorage.setItem('cart', JSON.stringify(cart));
      this.showToast('Product added to cart!');
    }
  }
  

  showToast(message: string) {
    this.toastMessage = message;
    this.showtoast=true;
    setTimeout(() => {
      this.toastMessage = null;
      this.showtoast=false;
    }, 2500);
  }


  showDetailsBox(productId: number) {
    this.hoveredProductId = productId;
  }

  hideDetailsBox() {
    this.hoveredProductId = null;
  }

  goToProductDetails(productId: number) {
    this.router.navigate([`/womenproduct/${productId}`]);
  }

}
