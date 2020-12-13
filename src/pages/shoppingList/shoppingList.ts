import { Component } from '@angular/core';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import _ from 'lodash';

@Component({
  selector: 'page-shoppingList',
  templateUrl: 'shoppingList.html'
})
export class ShoppingListPage {

  itemsToShopFor = [];
  reformattedItems = [];
  dedupedList = [];
  errorMessage: string;
  isLoaded = false;
  quantity = 1;

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider, public spinnerDialog: SpinnerDialog) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadShoppingList();
    });
  }

  ionViewWillEnter() {
    this.spinnerDialog.show();
    this.loadShoppingList();
  }

  loadShoppingList() {
    this.reformattedItems = [];
    this.isLoaded = false;
    // gets all the items from the meals 'on the menu' only
    this.dataService.getOnTheMenuItems()
      .subscribe(data => {
        this.itemsToShopFor = data;
        this.reformatShoppingListAndDedupe();
        this.spinnerDialog.hide();
        this.isLoaded = true;
      });
  }

  reformatShoppingListAndDedupe() {
    this.dedupedList = [];
    this.itemsToShopFor.forEach(item => {
      // console.log(item);
      item.ingredientList.forEach(ingredientListItem => {
        console.log(ingredientListItem.name);
        if (this.dedupedList.length === 0) {
          this.dedupedList.push({name: ingredientListItem.name, quantity: 1});
        } else {
          // we have data, and we need to check it for duplicates
          // iterate over the list -> names to find a match
          let found = false;
          this.dedupedList.forEach(element => {
            // element => Json object
            if (element.name === ingredientListItem.name) {
              // we have a match, increment quantity
              found = true;
              element.quantity = element.quantity + 1;
              return;
            } 
          });
          if (!found) {
            this.dedupedList.push({name: ingredientListItem.name, quantity: 1});
          }
        }
        
      });
    });
  }

}
