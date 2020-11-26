import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { FavoritesServiceProvider } from '../../providers/favorites-service/favorites-service';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  constructor(public navCtrl: NavController, public favService: FavoritesServiceProvider, public toastCtrl: ToastController, public dataService: DataServiceProvider) {

  }

  loadFavorites() {
    return this.favService.getFavorites();
  }

  removeFromFavorites(favoriteName, index) {
    console.log('favorite id', favoriteName);
    const toast = this.toastCtrl.create({
      message: "Removing favorite - " + favoriteName + " ...",
      duration: 3000
    });
    toast.present();
    this.dataService.removeFavorite(index);
  }

}
