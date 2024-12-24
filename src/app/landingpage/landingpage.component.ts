import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  title = 'e-commerce';
  @ViewChild('carousel') carousel!: ElementRef;
  scrollInterval: any;
  autoScrollSpeed = 1; 

  products = [
    { id:1,name: 'Product 1', price: '$120', category: 'Shirts', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { id:2,name: 'Product 2', price: '$150', category: 'T-Shirts', discount: 'Black Friday 50% Off', image: '../assets/men-1.jpg' },
    { id:3,name: 'Product 3', price: '$100', category: 'Jackets', discount: 'Black Friday 50% Off', image: '../assets/men-2.jpg' },
    { id:4,name: 'Product 4', price: '$80', category: 'Jeans', discount: 'Black Friday 50% Off', image: '../assets/women-1.jpg' },
    { id:5,name: 'Product 5', price: '$200', category: 'Coats', discount: 'Black Friday 50% Off', image: '../assets/women-2.jpg' },
    { id:6,name: 'Product 6', price: '$200', category: 'Jeans', discount: 'Black Friday 50% Off', image: '../assets/men-3.jpg' },
    { id:7,name: 'Product 7', price: '$200', category: 'Jeans', discount: 'Black Friday 50% Off', image: '../assets/kid-1.jpg' }
  ];
  cart: any[] = [];
  ngAfterViewInit() {

  }

  
  

  
  
  
  scrollLeft() {
    
    const container = this.carousel.nativeElement;
    container.scrollLeft -= 400; 
  }

  
  scrollRight() {
    
    const container = this.carousel.nativeElement;
    container.scrollLeft += 400; 
  }
  ngOnInit(): void {
  }
 

}
