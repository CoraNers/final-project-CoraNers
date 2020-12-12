import { Component } from '@angular/core';
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

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadShoppingList();
    });
  }

  ionViewWillEnter() {
    this.loadShoppingList();
  }

  loadShoppingList() {
    // gets all the items from the meals 'on the menu' only
    this.dataService.getOnTheMenuItems()
      .subscribe(data => {
        this.itemsToShopFor = data;
        this.reformatShoppingListAndDedupe();
      });
  }

  reformatShoppingListAndDedupe() {
    console.log(this.itemsToShopFor);
    this.itemsToShopFor.forEach(recipe => {
      recipe.ingredientList.forEach(ingredientListItem => {
        // array of the item
        // console.log(ingredientListItem);
        // console.log(ingredientListItem.name);
        this.reformattedItems.push(ingredientListItem);
      });
      // this.reformattedItems.push({ "val": });
    });
  }


  // public itemsToShopFor = [
  //   { val: 'Jalepeno Pepper', isChecked: false },
  //   { val: 'Cream Cheese', isChecked: false },
  //   { val: 'Cheddar Cheese', isChecked: false },
  //   { val: 'Bacon', isChecked: false }
  // ];

}
