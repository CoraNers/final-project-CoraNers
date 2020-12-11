import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  favoriteItems = [];
  errorMessage: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadFavorites();
    });
  }

  ionViewWillEnter() {
    this.loadFavorites();
  }

  loadFavorites() {
    return this.dataService.getFavorites().subscribe(
      favoriteItems => this.favoriteItems = favoriteItems,
      error => this.errorMessage = <any>error 
    );
  }

  removeFromFavorites(favoriteItem) {
    const toast = this.toastCtrl.create({
      message: "Removing favorite - " + favoriteItem.name + " ...",
      duration: 3000
    });
    toast.present();
    this.dataService.updateFavoriteStatus(favoriteItem, false);
  }

  addToMenu(favoriteItem) {
    const toast = this.toastCtrl.create({
      message: "Adding " + favoriteItem.name + " to Menu...",
      duration: 3000
    });
    toast.present();
    this.dataService.updateOnTheMenuFlag(favoriteItem, true);
  }

}
