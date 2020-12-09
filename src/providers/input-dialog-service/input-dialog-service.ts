import { _ParseAST } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { DataServiceProvider } from '../data-service/data-service';

@Injectable()
export class InputDialogServiceProvider {

  constructor(public dataService: DataServiceProvider, public alertCtrl: AlertController) {
  }

  showDetails(menuItem?) {
    let alert = this.alertCtrl.create({
      title: menuItem.name,
      message: 'Details...',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: data => {
            console.log('Close dialog');
          }
        }
      ]
    });
    console.log(menuItem);
    console.log(menuItem.ingredientList);
    alert.present();
  }
//   showPrompt(menuItem?) {
//     let alert = this.alertCtrl.create({
//       title: menuItem,
//       message: 'Details...',
//       inputs: [
//         {
//           name: 'name',
//           placeholder: 'Name',
//           value: item? item.name : null
//         },
//         {
//           name: 'quantity',
//           placeholder: 'Quantity',
//           value: item? item.quantity : null,
//           type: "number"
//         }
//       ],
//       buttons: [
//         {
//           text: 'Close',
//           role: 'cancel',
//           handler: data => {
//             console.log('Close dialog');
//           }
//         }
//       ]
//     });
//     alert.present();
//   }

}
