import { Component } from '@angular/core';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  favoriteItems = [];
  errorMessage: string;
  isLoaded = false;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider,
    private spinnerDialog: SpinnerDialog) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadFavorites();
    });
  }

  ionViewWillEnter() {
    this.spinnerDialog.show();
    this.loadFavorites();
  }

  loadFavorites() {
    this.dataService.getFavorites()
      .subscribe(favorites => {
        this.favoriteItems = favorites;
        this.spinnerDialog.hide();
        this.isLoaded = true;
      });
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
