import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesServiceProvider {

  constructor() {
  }

  favorites = [
    {
      name: "Spicy Shrimp",
      id: 1
    },
    {
      name: "Meatballs & Spaghetti Squash",
      id: 2
    },
    {
      name: "Quick Turkey Rolls",
      id: 3
    }
  ];

  getFavorites() {
    return this.favorites;
  }

}
