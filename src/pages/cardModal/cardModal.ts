import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cardModal',
  templateUrl: 'cardModal.html',
})
export class CardModalPage {

  cardRecipeName: string;
  cardIngredients: any;
  cardIsFavorite: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.cardRecipeName = this.navParams.get('name');
    this.cardIngredients = this.navParams.get('ingredientList') || [];
    this.cardIsFavorite = this.navParams.get('isFavorite') || false;
  }

}
