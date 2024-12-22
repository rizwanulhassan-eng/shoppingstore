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
  autoScrollSpeed = 1; // Adjust the speed of the automatic scroll

  products = [
    { id:1,name: 'Product 1', price: '$120', category: 'Shirts', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { id:2,name: 'Product 2', price: '$150', category: 'T-Shirts', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { id:3,name: 'Product 3', price: '$100', category: 'Jackets', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { id:4,name: 'Product 4', price: '$80', category: 'Jeans', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { id:5,name: 'Product 5', price: '$200', category: 'Coats', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { id:6,name: 'Product 6', price: '$200', category: 'Jeans', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { id:7,name: 'Product 7', price: '$200', category: 'Jeans', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' }
  ];
  cart: any[] = [];
  ngAfterViewInit() {
    this.startAutoScroll();
  }

  
  

  // Automatically scroll the carousel
  startAutoScroll() {
    this.stopAutoScroll(); // Clear any existing interval
    let i=0;
    let j=0;
    this.scrollInterval = setInterval(() => {
      const container = this.carousel.nativeElement;
      const firstItemWidth = container.children[0].children[0].offsetWidth;
      
      container.scrollLeft += this.autoScrollSpeed;
      
      
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0; // Reset to the beginning for looping effect
        this.startAutoScroll()
      }
    }, 10); // Adjust for smoother or faster animation
  }

  // Stop the automatic scrolling
  stopAutoScroll() {
    clearInterval(this.scrollInterval);
  }

  // Scroll manually to the left
  scrollLeft() {
    this.stopAutoScroll();
    const container = this.carousel.nativeElement;
    container.scrollLeft -= 300; // Adjust scroll distance as needed
  }

  // Scroll manually to the right
  scrollRight() {
    this.stopAutoScroll();
    const container = this.carousel.nativeElement;
    container.scrollLeft += 300; // Adjust scroll distance as needed
  }
  ngOnInit(): void {
  }

}
