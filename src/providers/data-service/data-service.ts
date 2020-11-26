import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceProvider {

  constructor() {
  }

  favorites= [];

  addToFavorites() {
    // TODO 
  }

  removeFavorite(index) {
    this.favorites.splice(index, 1);
  }

}
