import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';
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
  private imageData;

  modalPageTitle: string;
  modalPageItems: any;
  modalPageIsFavorite: boolean;

  private options: CameraOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private dataSvc: DataServiceProvider, private actionSheetCtrl: ActionSheetController, private camera: Camera, 
    private file: File) {

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
      onMenu: this.addToMenuCheckbox,
      imageData: this.imageData
    };

    this.dataSvc.saveMeal(mealDataObj);
  }

  takeOrUploadPhoto() {
    console.debug("CORA In takeOrUploadPhoto");
    let sourceSelected;

    const actionSheet = this.actionSheetCtrl.create({
      buttons: [{
        text: 'Use Library',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.debug('CORA library clicked');
          sourceSelected = 0;
          this.options = this.setCameraOptions(sourceSelected);
          this.processPicture(this.options);
        }
      }, {
        text: 'Use Camera',
        icon: 'share',
        handler: () => {
          console.debug('CORA camera clicked');
          sourceSelected = 1;
          this.options = this.setCameraOptions(sourceSelected);
          this.processPicture(this.options);
        }
      }]
    });
    actionSheet.present();
  }

  processPicture(options) {
    this.camera.getPicture(options).then(imageData => {
      console.log("TEMPIMAGE");
      let base64data = 'data:image/jpeg;base64,' + imageData;
      this.imageData = base64data;

    }).catch(err => {
      console.log('no photo selected');
      alert(err);
      console.error('Error', err)
    });
  }

  setCameraOptions(sourceType) {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType === 0 ? this.camera.PictureSourceType.PHOTOLIBRARY : this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
   return options;
  }

}
