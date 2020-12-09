import { Component } from '@angular/core';
import { FavoritesPage } from '../favorites/favorites';
import { LoadRecipesPage } from '../loadRecipes/loadRecipes';
import { OnTheMenuPage } from '../onTheMenu/onTheMenu';
import { ShoppingListPage } from '../shoppingList/shoppingList';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OnTheMenuPage;
  tab2Root = LoadRecipesPage;
  tab3Root = FavoritesPage;
  tab4Root = ShoppingListPage;

  constructor() {

  }
}
