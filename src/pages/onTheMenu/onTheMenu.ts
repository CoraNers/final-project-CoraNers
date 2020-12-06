import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-onTheMenu',
  templateUrl: 'onTheMenu.html'
})
export class OnTheMenuPage {

  onTheMenuItems = [];
  errorMessage: string;

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadOnTheMenuItems();
    });
  }
  
  ionViewWillEnter() {
    this.loadOnTheMenuItems();
  }

  loadOnTheMenuItems() {
    console.log('I am here');
    this.onTheMenuItems = this.dataService.getOnTheMenuItems();
    // this.dataService.getOnTheMenuItems()
    //   .subscribe(
    //     onTheMenuItems => this.onTheMenuItems = onTheMenuItems,
    //     error => this.errorMessage = <any>error 
    //   );
  }

}
