import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: any[] = [];
  
    
  

  selectedSize: string | null = null;
  availableSizes: string[] = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  productId: number | null = null;
  product: any = null;
  cart:any[]=[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    const storedProducts = localStorage.getItem('products');
    
    if (storedProducts) {
      const allProducts = JSON.parse(storedProducts);
      this.product = allProducts.find((p:any) => p.id === this.productId);
    } else {
      console.warn('No products found in local storage');
    }
    const storedCart = sessionStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }
  selectSize(size: string) {
    this.selectedSize = size;
  }
  addToCart(product: any) {
    
    const existingProduct = this.cart.find((item: any) => item.id === product.id);
    this.cart = this.cart.filter((item: any) => item.id !== product.id);
      const newProduct = {
        id: product.id,
        size: this.selectedSize,
        amount: 1 
      };
      this.cart.push(newProduct);
      sessionStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }


