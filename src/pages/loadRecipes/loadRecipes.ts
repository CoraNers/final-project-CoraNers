import { Component } from '@angular/core';
import { ActionSheetOptions } from '@ionic-native/action-sheet/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController, ModalController, NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-loadRecipes',
  templateUrl: 'loadRecipes.html'
})
export class LoadRecipesPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider,
    private camera: Camera, private actionSheetCtrl: ActionSheetController, private inputService: InputDialogServiceProvider,
    public modalCtrl: ModalController) {
  }

  loadRecipe() {
    console.log('loadRecipe');
    const modalTitle = "Test";
    var modalPage = this.modalCtrl.create('ModalPage'); 
    modalPage.present();
  }

  setCameraOptions(sourceType) {
    var options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType === 0 ? this.camera.PictureSourceType.PHOTOLIBRARY : this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true
    }
   return options;
  }

  getPhoto() { 
    console.debug("CORA In getPhoto");
    let sourceSelected;

    const actionSheet = this.actionSheetCtrl.create({
      buttons: [{
        text: 'Use Library',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.debug('CORA library clicked');
          sourceSelected = 0;
          // this.setupForOCR(sourceSelected);
        }
      }, {
        text: 'Use Camera',
        icon: 'share',
        handler: () => {
          console.debug('CORA camera clicked');
          sourceSelected = 1;
          // this.setupForOCR(sourceSelected);
        }
      }]
    });
    actionSheet.present();
  }

}
