import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { ActionSheetController, ModalController, NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-loadRecipes',
  templateUrl: 'loadRecipes.html'
})
export class LoadRecipesPage {

  allItems = [];
  errorMessage: string;


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider,
    private inputService: InputDialogServiceProvider,
    public modalCtrl: ModalController) {

      dataService.dataChanged$.subscribe((dataChanged: boolean) => {
        this.loadAll();
      });
  }

  ionViewWillEnter() {
    this.loadAll();
  }

  loadAll() {
    return this.dataService.loadAllRecipes().subscribe(
      allItems => this.allItems = allItems,
      error => this.errorMessage = <any>error 
    );
  }

  loadRecipe() {
    console.log('loadRecipe');
    const modalTitle = "Test";
    var modalPage = this.modalCtrl.create('ModalPage'); 
    modalPage.present();
  }

  viewDetails(item) {

  }

  addToFavorites(item) {
    const toast = this.toastCtrl.create({
      message: "Adding " + item.name + " to Favorites...",
      duration: 3000
    });
    toast.present();
    this.dataService.updateFavoriteStatus(item, true);
  }

}
