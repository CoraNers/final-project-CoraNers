import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

// some code here for dynamically adding additional inputs referenced from here:
// https://www.joshmorony.com/dynamic-infinite-input-fields-in-an-ionic-application/

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public myForm: FormGroup;
  private ingredientCount: number = 1;
  private name: string; // bound to recipeName in modal
  private addToMenuCheckbox: boolean; // bound to checkbox in modal

  modalPageTitle: string;
  modalPageItems: any;
  modalPageIsFavorite: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private dataSvc: DataServiceProvider) {

    this.myForm = formBuilder.group({
      ingredient1: ['', Validators.required]
    });

  }

  ionViewDidLoad() {
    this.modalPageTitle = this.navParams.get('name');
    this.modalPageItems = this.navParams.get('ingredientList') || [];
    this.modalPageIsFavorite = this.navParams.get('isFavorite') || false;
  }

  addControl(){
    this.ingredientCount++;
    this.myForm.addControl('ingredient' + this.ingredientCount, new FormControl('', Validators.required));
  }

  removeControl(control){
    this.myForm.removeControl(control.key);
  }

  saveMeal() {

    console.log(this.addToMenuCheckbox);
    // get all values from the dynamically added ingredient fields - not sure how many there are, so check here
    let ingredientValues = Object.values(this.myForm.value);
    let ingredientListArray = [];
    for (let i = 0; i < ingredientValues.length; i++) {
      // make an object out of it and put it in the array to be sent to the service
      ingredientListArray.push({ "name": ingredientValues[i]})
    }

    let mealDataObj = {
      name: this.name,
      isFavorite: false,
      ingredientList: ingredientListArray,
      onMenu: this.addToMenuCheckbox
    };

    this.dataSvc.saveMeal(mealDataObj);

  }

}
