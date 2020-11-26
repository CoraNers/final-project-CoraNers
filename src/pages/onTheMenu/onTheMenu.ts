import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-onTheMenu',
  templateUrl: 'onTheMenu.html'
})
export class OnTheMenuPage {

  constructor(public navCtrl: NavController) {

  }

  menuItems = [
    {
      name: "Spicy Shrimp",
      id: 1
    },
    {
      name: "Quick Turkey Rolls",
      id: 3
    }
  ];

  loadOnTheMenu() {
    console.log('I am here');
    return this.menuItems;
  }
  
  addToFavorites(favoriteName, index) {
    console.log('in add to favorites');
  }

  captureMenuItem() {
    // TODO OCR for image in gallery or camera
  }

}
