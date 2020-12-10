import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public myForm: FormGroup;
  private ingredientCount: number = 1;
  private name: string;

  modalPageTitle: string;
  modalPageItems: any;
  modalPageIsFavorite: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
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
    console.log('save meal');
    let ingredientList = [];


    const meal: any = {
      "name": this.name,
      "ingredientList": [
        {

        }
      ]
    }

    console.log(this.myForm.value);

    let ingredientValues = Object.values(this.myForm.value);
    console.log(ingredientValues);


    console.log(this.name);

  }

}
