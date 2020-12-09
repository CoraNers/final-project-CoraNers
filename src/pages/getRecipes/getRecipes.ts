import { Component } from '@angular/core';
import { ActionSheetOptions } from '@ionic-native/action-sheet/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { OCR, OCRResult, OCRSourceType } from '@ionic-native/ocr/ngx';
import { ActionSheetController, NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-getRecipes',
  templateUrl: 'getRecipes.html'
})
export class GetRecipesPage {

  detectedText: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider,
    private camera: Camera, private actionSheetCtrl: ActionSheetController) {
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

  // setupForOCR(sourceSelected) {
  //   console.debug('CORA inside OCR setup with source: ', sourceSelected);
  //   let options = this.setCameraOptions(sourceSelected);
  //   // TODO error handling
  //   this.camera.getPicture(options).then(imageUri => {
  //     console.debug('CORA imageURI', imageUri);
  //     this.recognizeText(imageUri);
  //   });
  // }

  // recognizeText(imageURI) {
  //   console.log("CORA in recognizeImage");
  //   console.log("****CORA****");
  //   console.log(imageURI);
  //   this.ocr.recText(OCRSourceType.NORMFILEURL, imageURI)
  //   .then((res: OCRResult) => console.log(JSON.stringify(res)))
  //   .catch((error: any) => console.error(error));
  //   // this.ocr.recText(OCRSourceType.NORMFILEURL, imageURI).then(ocrResult => {
  //   //   console.log('CORA OCR DATA');
  //   //   console.log(ocrResult);
  //   // }).catch(error => {
  //   //   console.log('CORA REJECTED PROMISE');
  //   //   console.log(error);
  //   // });

  // }

}
