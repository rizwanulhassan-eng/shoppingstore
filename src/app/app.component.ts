import { Component,AfterViewInit, ElementRef, ViewChild, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  // addToCart(product: any) {
  //   this.cart.push(product);
  //   console.log('Product added to cart:', product);
  // }

  cartCount: number = 0;

  

  updateCartCount(): void {
    const cart = sessionStorage.getItem('cart');
    this.cartCount = cart ? JSON.parse(cart).length : 0;
  }
  
  
  products = [
    {
      id: 1,
      name: 'leather Jacket',
      price: 120,
      category: 'Shirts',
      gender:'male',
      discount: 'Black Friday 50% Off',
      image: '../assets/men-1.jpg',
      rating: 4.5,
      description: 'A premium quality shirt for all your casual and formal needs.',
    },
    {
      id: 2,
      name: 'Cotton T-Shirt',
      price: 40,
      category: 'Shirts',
      gender: 'male',
      image: '../assets/men-2.jpg',
      rating: 5,
      description: 'Crafted from 100% organic cotton, this T-shirt offers unparalleled softness and breathability. Whether worn as a standalone piece or layered under a jacket, it ensures comfort all day long.',
    },
    {
      id: 3,
      name: 'Woolen Sweater',
      price: 80,
      category: 'Sweaters',
      gender: 'male',
      image: '../assets/men-3.jpg',
      rating: 4.5,
      description: 'Stay warm and stylish with this premium woolen sweater. Designed for a flattering fit, it is ideal for chilly evenings and cozy indoor gatherings.',
    },
    {
      id: 4,
      name: 'Denim Jacket',
      price: 90,
      category: 'Jackets',
      gender: 'male',
      image: '../assets/men-4.jpg',
      rating: 3.5,
      description: 'This rugged denim jacket combines timeless style with modern comfort. Perfect for layering over T-shirts or hoodies, it’s a must-have for every casual wardrobe.',
    },
    {
      id: 5,
      name: 'Fleece Hoodie',
      price: 60,
      category: 'Hoodies',
      gender: 'male',
      image: '../assets/men-5.jpg',
      rating: 4.8,
      description: 'Stay cozy with this fleece-lined hoodie. Featuring a modern design and kangaroo pocket, it’s ideal for workouts, weekend lounging, or running errands in style.',
    },
    {
      id: 6,
      name: 'Floral Dress',
      price: 110,
      category: 'skirts',
      gender: 'female',
      image: '../assets/women-1.jpg',
      rating: 5,
      description: 'This flowy floral dress is designed to make a statement. Perfect for both casual and formal occasions, it’s a staple for every wardrobe that demands elegance.',
    },
    {
      id: 7,
      name: 'Maxi Skirt',
      price: 70,
      category: 'Skirts',
      gender: 'female',
      image: '../assets/women-2.jpg',
      rating: 4.2,
      description: 'These slim-fit jeans are made from stretchable denim, offering comfort without compromising on style. They pair effortlessly with casual shirts or formal blazers.',
    },
    {
      id: 8,
      name: 'Classic Heels',
      price: 85,
      category: 'tops',
      gender: 'female',
      image: '../assets/women-3.jpg',
      rating: 4.7,
      description: 'Add sophistication to your look with these classic heels. Crafted with attention to detail, they are comfortable enough to wear from morning meetings to evening parties.',
    },
    {
      id: 9,
      name: 'Athletic Sneakers',
      price: 120,
      category: 'tops',
      gender: 'female',
      image: '../assets/women-4.jpg',
      rating: 4.3,
      description: 'These sneakers are designed for performance and style. Featuring lightweight materials and superior cushioning, they’re perfect for sports and casual wear.',
    },
    {
      id: 10,
      name: 'Summer Top',
      price: 30,
      category: 'Tops',
      gender: 'female',
      image: '../assets/women-5.jpg',
      rating: 4,
      description: 'This lightweight summer top is both stylish and breathable. Its vibrant colors and comfortable fit make it an essential choice for warm-weather outings.',
    },
    {
      id: 11,
      name: 'Casual jacket',
      price: 55,
      category: 'jacket',
      gender: 'male',
      image: '../assets/women-6.jpg',
      rating: 3.9,
      description: 'This casual shirt is made with a breathable fabric and designed to offer a relaxed yet polished look. Suitable for both casual Fridays at the office and weekend brunches.',
    },
    {
      id: 12,
      name: 'Smocked Bodice Dress',
      price: 95,
      category: 'jacket',
      gender: 'female',
      image: '../assets/women-7.jpg',
      rating: 5,
      description: 'This elegant maxi skirt flows gracefully and provides a chic look. Its lightweight material and versatile design make it a perfect choice for summer days or evening outings.',
    },
    {
      id: 13,
      name: 'Sequin Ball Gown',
      price: 150,
      category: 'Bodycon',
      gender: 'female',
      image: '../assets/women-8.jpg',
      rating: 4,
      description: 'This formal blazer is tailored to perfection, combining a sleek fit with premium fabric. Ideal for meetings, interviews, or formal events, it’s a wardrobe essential.',
    },
    {
      id: 14,
      name: 'Leather Boots',
      price: 200,
      category: 'Shoes',
      gender: 'kid',
      image: '../assets/kid-1.jpg',
      rating: 5,
      description: 'These handcrafted leather boots are built for durability and style. Perfect for all seasons, they complement both casual and semi-formal attire.',
    },
    {
      id: 15,
      name: 'Puffer Jacket',
      price: 180,
      category: 'Jackets',
      gender: 'kid',
      image: '../assets/kid-2.jpg',
      rating: 4.8,
      description: 'Stay warm and stylish with this puffer jacket. Its lightweight design and cozy insulation make it a perfect choice for winter adventures.',
    },
    {
      id: 16,
      name: 'Striped Polo',
      price: 50,
      category: 'Shirts',
      gender: 'kid',
      image: '../assets/kid-3.jpg',
      rating: 3,
      description: 'This striped polo shirt offers a timeless style with a comfortable fit. It’s perfect for casual outings or pairing with chinos for a smart-casual look.',
    },
    {
      id: 17,
      name: 'Pearl',
      price: 250,
      category: 'Bag',
      gender: 'all',
      image: '../assets/accessory-1.jpg',
      rating: 4,
      description: 'This luxurious evening gown is designed for elegance and grace. Its flattering silhouette and high-quality fabric make it a standout choice for formal events.',
    },
    {
      id: 18,
      name: 'Louis Vuitton',
      price: 65,
      category: 'Bag',
      gender: 'all',
      image: '../assets/accessory-2.jpg',
      rating: 5,
      description: 'These joggers combine comfort and style, making them ideal for workouts or casual wear. Their breathable fabric ensures all-day comfort.',
    },
    {
      id: 19,
      name: 'Lipstic',
      price: 85,
      category: 'Makeup',
      gender: 'all',
      image: '../assets/accessory-3.jpg',
      rating: 3,
      description: 'This trendy denim skirt is perfect for creating chic casual looks. Pair it with a blouse or T-shirt for a versatile outfit.',
    },
    {
      id: 20,
      name: 'Gucci Bag',
      price: 220,
      category: 'Bag',
      gender: 'all',
      image: '../assets/accessory-4.jpg',
      rating: 5,
      description: 'This bag offers superior warmth and a sophisticated look. Its modern design ensures you stay stylish even in the coldest temperatures.',
    },
    {
      id: 21,
      name: 'Nike Shoe',
      price: 220,
      category: 'Shoe',
      gender: 'all',
      image: '../assets/accessory-5.jpg',
      rating: 5,
      description: 'This shoe offers superior warmth and a sophisticated look. Its modern design ensures you stay stylish even in the coldest temperatures.',
    },
  ];

  isLoggedIn = false;

  ngOnInit(): void {
    this.updateCartCount();
    
    if (!sessionStorage.getItem('isLoggedIn')) {
      // If not present, set it to false
      sessionStorage.setItem('isLoggedIn', 'false');
  }
}
  
}
