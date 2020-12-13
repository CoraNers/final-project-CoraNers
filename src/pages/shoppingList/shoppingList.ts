import { Component } from '@angular/core';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-shoppingList',
  templateUrl: 'shoppingList.html'
})
export class ShoppingListPage {

  itemsToShopFor = [];
  reformattedItems = [];
  errorMessage: string;
  isLoaded = false;

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
    this.itemsToShopFor.forEach(recipe => {
      recipe.ingredientList.forEach(ingredientListItem => {
        this.reformattedItems.push(ingredientListItem);
      });
    });
  }

}
