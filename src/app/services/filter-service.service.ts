import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  private allProducts: any[] = [];
  constructor() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.allProducts = JSON.parse(storedProducts);
    } else {
      console.warn('No products found in local storage');
    }
  }

  getCategoriesByGender(gender: string): string[] {
    // Filter products by gender
    const filteredProducts = this.allProducts.filter(product => product.gender === gender);

    // Get unique categories
    const categories = new Set(filteredProducts.map(product => product.category));

    // Convert Set to Array and return
    return Array.from(categories);
  }
}
