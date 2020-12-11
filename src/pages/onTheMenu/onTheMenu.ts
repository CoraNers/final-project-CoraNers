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
    const modalTitle = menuItem.name;
    var modalPage = this.modalCtrl.create('ModalPage', menuItem); 
    modalPage.present();

    // this.modalCtrl.showDetails(menuItem);
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
