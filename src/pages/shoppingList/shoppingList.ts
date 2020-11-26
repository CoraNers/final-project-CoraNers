import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-shoppingList',
  templateUrl: 'shoppingList.html'
})
export class ShoppingListPage {

  constructor(public navCtrl: NavController) {

  }

  public itemsToShopFor = [
    { val: 'Jalepeno Pepper', isChecked: false },
    { val: 'Cream Cheese', isChecked: false },
    { val: 'Cheddar Cheese', isChecked: false },
    { val: 'Bacon', isChecked: false }
  ];

}
