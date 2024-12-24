import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartCountService } from '../services/cart-count.service';
import { FilterServiceService } from '../services/filter-service.service';
import { SearchService } from '../services/search.service';
@Component({
  selector: 'app-kidsproduct',
  templateUrl: './kidsproduct.component.html',
  styleUrls: ['./kidsproduct.component.css']
})
export class KidsproductComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  selectedCategory: any  = "all";
  priceRanges = [
    { label: 'All', value: 'all' },
    { label: '0 - 50', value: 'low' },
    { label: '50 - 100', value: 'medium' },
    { label: '100+', value: 'high' },
  ];
  selectedPriceRange: string = 'all';
  toastMessage!: string  ;
  showtoast=false;
  hoveredProductId: number | null = null;
  ngOnInit(): void {

    const storedProducts = localStorage.getItem('products');
    
    if (storedProducts) {
      
      const allProducts = JSON.parse(storedProducts);

      // Filter products with gender 'female'
      this.products = allProducts.filter((product: any) => product.gender === 'kid');
      this.filteredProducts = [...this.products];
      let categories = this.filterService.getCategoriesByGender('kid');
      
      this.categories = ['All',...new Set(categories.map(item => item.toLowerCase()))];
    // Add 'all' category and assign to this.categories
    
      console.log(this.categories);
      // this.categories.unshift('All'); 
    } else {
      console.warn('No products found in local storage');
    }
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
    this.applyFilters();
  }

  onPriceChange(priceRange: string) {
    this.selectedPriceRange = priceRange;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter((product) => {
      const matchesCategory = this.selectedCategory === 'All' ||  product.category.toLowerCase() === this.selectedCategory.toLowerCase();
      const matchesPrice =
        this.selectedPriceRange === 'all' ||
        (this.selectedPriceRange === 'low' && product.price <= 50) ||
        (this.selectedPriceRange === 'medium' && product.price > 50 && product.price <= 100) ||
        (this.selectedPriceRange === 'high' && product.price > 100);
      return matchesCategory && matchesPrice;
    });
  }


  constructor(private router: Router, private filterService: FilterServiceService,private searchService:SearchService,private cartcountservice:CartCountService) {}

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
      this.cartcountservice.updateCartLength();
      this.showToast('Product added to cart!');
    }
  }
  

  showToast(message: string) {
    this.toastMessage = message;
    this.showtoast=true;
    setTimeout(() => {
      this.toastMessage = '';
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
    this.router.navigate([`/kidproduct/${productId}`]);
  }




  searchInput: string = '';
  isSearchBoxVisible: boolean = false;
  searchSuggestions: string[] = [];
  onSearchInput() {
    if (this.searchInput.trim()) {
      this.searchSuggestions = this.searchService.getSuggestions(this.searchInput, this.products);
    } else {
      this.searchSuggestions = [];
    }
  }
  
  selectSuggestion(suggestion: string) {
    this.searchInput = suggestion;
    this.searchSuggestions = [];
    this.searchInput='';
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(suggestion.toLowerCase())
    );
    if(!(this.selectedCategory==='All')){
    this.filteredProducts=this.filteredProducts.filter((product)=>
    product.category.toLowerCase().includes(this.selectedCategory));
  }
  }
  
  // showSearchBox() {
  //   this.isSearchBoxVisible = true;
  // }
  
  // hideSearchBox() {
  //   this.isSearchBoxVisible = false;
  // }
  
  toggleSearchBox() {
    this.isSearchBoxVisible = !this.isSearchBoxVisible;
  }

}
