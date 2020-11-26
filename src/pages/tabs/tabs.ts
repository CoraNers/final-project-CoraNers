import { Component } from '@angular/core';
import { FavoritesPage } from '../favorites/favorites';
import { GetRecipesPage } from '../getRecipes/getRecipes';
import { OnTheMenuPage } from '../onTheMenu/onTheMenu';
import { ShoppingListPage } from '../shoppingList/shoppingList';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OnTheMenuPage;
  tab2Root = GetRecipesPage;
  tab3Root = FavoritesPage;
  tab4Root = ShoppingListPage;

  constructor() {

  }
}
