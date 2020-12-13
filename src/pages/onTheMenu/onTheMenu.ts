import { Component } from '@angular/core';
import { ModalController, NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';

@Component({
  selector: 'page-onTheMenu',
  templateUrl: 'onTheMenu.html'
})
export class OnTheMenuPage {

  onTheMenuItems = [];
  errorMessage: string;
  loadDetailsCard = false;
  isLoaded = false;

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider, public modalCtrl: ModalController,
    public toastCtrl: ToastController, private spinnerDialog: SpinnerDialog) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadOnTheMenuItems();
    });
  }
  
  ionViewWillEnter() {
    this.spinnerDialog.show();
    this.loadOnTheMenuItems();
  }

  loadOnTheMenuItems() {
    this.dataService.getOnTheMenuItems()
      .subscribe(onTheMenuItems => {
        this.onTheMenuItems = onTheMenuItems;
        this.spinnerDialog.hide();
        this.isLoaded = true;
      });
  }

  viewDetails(menuItem) {
    this.loadDetailsCard = true;
    var cardModal = this.modalCtrl.create('CardModalPage', menuItem); 
    cardModal.present();

    cardModal.onDidDismiss(data => {
    });
  }

  addToFavorites(menuItem) {
    const toast = this.toastCtrl.create({
      message: "Adding " + menuItem.name + " to Favorites...",
      duration: 3000
    });
    toast.present();
    this.dataService.updateFavoriteStatus(menuItem, true);
  }

  removeFromMenu(menuItem, isOnTheMenu) {
    const toast = this.toastCtrl.create({
      message: "Removing " + menuItem.name + "...",
      duration: 3000
    });
    toast.present();
    this.dataService.removeFromMenu(menuItem, isOnTheMenu);
  }

}
