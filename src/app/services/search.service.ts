import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  getSuggestions(input: string, products: any[]): string[] {
    const lowerInput = input.toLowerCase();
    const matchingNames = products
      .map((product) => product.name.toLowerCase())
      .filter((category, index, self) => category.includes(lowerInput) && self.indexOf(category) === index);
    return matchingNames;
  }
}
