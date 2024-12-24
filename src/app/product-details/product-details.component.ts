import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartCountService } from '../services/cart-count.service';

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
  cart: any[] = [];
  quantity: number = 1;
  toastMessage!: string;
  showtoast = false;
  selectedImage: string = '';

  constructor(private route: ActivatedRoute, private cartcountservice: CartCountService) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    const storedProducts = localStorage.getItem('products');

    if (storedProducts) {
      const allProducts = JSON.parse(storedProducts);
      this.product = allProducts.find((p: any) => p.id === this.productId);
      if (this.product && this.product.image) {
        this.selectedImage = this.product.image;
      }
    } else {
      console.warn('No products found in local storage');
    }

    const storedCart = sessionStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  selectImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  addToCart(product: any) {
    const storedCart = sessionStorage.getItem('cart');
    let cart = storedCart ? JSON.parse(storedCart) : [];

    // Check if the product already exists in the cart
    const existingProduct = cart.find((item: any) => item.id === product.id && item.size === this.selectedSize);
    if (existingProduct) {
      this.showToast('Product is already added to the cart!');
    } else if (!this.selectedSize) {
      this.showToast('Please select a size before adding to the cart!');
    } else {
      const newProduct = {
        id: product.id,
        size: this.selectedSize,
        amount: this.quantity,
        price: product.price * this.quantity
      };
      this.cartcountservice.updateCartLength();
      cart.push(newProduct);
      sessionStorage.setItem('cart', JSON.stringify(cart));
      this.showToast('Product added to cart!');
    }
  }

  showToast(message: string) {
    this.toastMessage = message;
    this.showtoast = true;
    setTimeout(() => {
      this.toastMessage = '';
      this.showtoast = false;
    }, 2500);
  }
}
