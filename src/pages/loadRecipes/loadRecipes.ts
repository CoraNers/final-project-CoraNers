import { Component } from '@angular/core';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { ModalController, NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-loadRecipes',
  templateUrl: 'loadRecipes.html'
})
export class LoadRecipesPage {

  allItems = [];
  errorMessage: string;
  isLoaded = false;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider,
    public modalCtrl: ModalController, public spinnerDialog: SpinnerDialog) {

      dataService.dataChanged$.subscribe((dataChanged: boolean) => {
        this.loadAll();
      });
  }

  ionViewWillEnter() {
    this.spinnerDialog.show();
    this.loadAll();
  }

  loadAll() {
    this.dataService.loadAllRecipes()
      .subscribe(recipes => {
        this.allItems = recipes;
        this.spinnerDialog.hide();
        this.isLoaded = true;
      });
  }

  loadRecipe() {
    var modalPage = this.modalCtrl.create('ModalPage'); 
    modalPage.present();

    modalPage.onDidDismiss(data => {
      let toast;
      if (data) {
        toast = this.toastCtrl.create({
          message: "Recipe saved!",
          duration: 3000
        });
      } else {
        toast = this.toastCtrl.create({
          message: "Your changes have not been saved.",
          duration: 3000
        });
      }
      toast.present();
    });
  }

  viewDetails(item) {
    var cardModal = this.modalCtrl.create('CardModalPage', item); 
    cardModal.present();
    cardModal.onDidDismiss(data => {
    });
  }

  addToFavorites(item) {
    const toast = this.toastCtrl.create({
      message: "Adding " + item.name + " to Favorites...",
      duration: 3000
    });
    toast.present();
    this.dataService.updateFavoriteStatus(item, true);
  }

  addToMenu(item) {
    const toast = this.toastCtrl.create({
      message: "Adding " + item.name + " to Menu...",
      duration: 3000
    });
    toast.present();
    this.dataService.updateOnTheMenuFlag(item, true);
  }

}
