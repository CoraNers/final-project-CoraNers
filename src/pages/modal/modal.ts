import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  modalPageTitle: string;
  modalPageItems: any;
  modalPageIsFavorite: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.modalPageTitle = this.navParams.get('name');
    this.modalPageItems = this.navParams.get('ingredientList') || [];
    this.modalPageIsFavorite = this.navParams.get('isFavorite') || false;
  }

}
