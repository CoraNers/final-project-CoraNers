import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-onTheMenu',
  templateUrl: 'onTheMenu.html'
})
export class OnTheMenuPage {

  onTheMenuItems = [];
  errorMessage: string;

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider, public modalCtrl: ModalController) {
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

  viewDetails(menuItem, index) {
    console.log('view details');
    const modalTitle = menuItem.name;
    var modalPage = this.modalCtrl.create('ModalPage', menuItem); 
    modalPage.present();

    // this.modalCtrl.showDetails(menuItem);
  }

  addToFavorites(menuItem, index) {
    console.log('add to favorites');
  }

}
