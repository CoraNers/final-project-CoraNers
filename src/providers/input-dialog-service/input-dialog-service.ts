import { _ParseAST } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { DataServiceProvider } from '../data-service/data-service';

@Injectable()
export class InputDialogServiceProvider {

  constructor(public dataService: DataServiceProvider, public alertCtrl: AlertController) {
  }

  showLoadRecipePrompt() {
    let alert = this.alertCtrl.create({
      title: "Add a new meal",
      message: 'Please enter name and ingredients',
      inputs: [
        {
          name: 'name',
          placeholder: 'Recipe Name',
          value: null
        },
        {
          name: 'ingredientList',
          placeholder: 'Ingredient',
          value: null,
        },
        {
          name: 'ingredient',
          placeholder: 'Ingredient',
          value: null,
        },
        {
          name: 'ingredient',
          placeholder: 'Ingredient',
          value: null,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel dialog');
          }
        },
        {
          text: 'Save',
          handler: data => {
            // if (item !== undefined) {
            //   // this.dataService.editItem(data, item._id);
            // } else {
            //   // this.dataService.addItem(data);
            // }
            this.dataService.saveMeal(data);
          }
        }
      ]
    });
    alert.present();
  }

}
