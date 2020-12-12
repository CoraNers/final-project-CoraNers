import { Component } from '@angular/core';
import { ModalController, NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-onTheMenu',
  templateUrl: 'onTheMenu.html'
})
export class OnTheMenuPage {

  onTheMenuItems = [];
  errorMessage: string;
  loadDetailsCard = false;

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider, public modalCtrl: ModalController,
    public toastCtrl: ToastController) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadOnTheMenuItems();
    });
  }
  
  ionViewWillEnter() {
    this.loadOnTheMenuItems();
  }

  loadOnTheMenuItems() {
    this.dataService.getOnTheMenuItems()
      .subscribe(
        onTheMenuItems => this.onTheMenuItems = onTheMenuItems,
        error => this.errorMessage = <any>error 
      );
  }

  viewDetails(menuItem) {
    console.log('view details');
    this.loadDetailsCard = true;
    var cardModal = this.modalCtrl.create('CardModalPage', menuItem); 
    cardModal.present();

  }

  addToFavorites(menuItem) {
    const toast = this.toastCtrl.create({
      message: "Adding " + menuItem.name + " to Favorites...",
      duration: 3000
    });
    toast.present();
    this.dataService.updateFavoriteStatus(menuItem, true);
  }

}
