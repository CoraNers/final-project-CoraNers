import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { FavoritesServiceProvider } from '../../providers/favorites-service/favorites-service';

@Component({
  selector: 'page-getRecipes',
  templateUrl: 'getRecipes.html'
})
export class GetRecipesPage {

  selectedImage: string;
  detectedText: string;
  imageText: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider,
    public favoritesServiceProvider: FavoritesServiceProvider) {

  }

  selectSource() { 
    console.log("In selectSource");
    // let actionSheet = this.actionSheetCtrl.create({
    //   buttons: [
    //     {
    //       text: 'Use Library',
    //       handler: () => {
    //         this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
    //       }
    //     }, {
    //       text: 'Capture Image',
    //       handler: () => {
    //         this.getPicture(this.camera.PictureSourceType.CAMERA);
    //       }
    //     }, {
    //       text: 'Cancel',
    //       role: 'cancel'
    //     }
    //   ]
    // });
    // actionSheet.present();
  }

  // getPicture(sourceType: PictureSourceType) {
    // this.camera.getPicture(onSuccess, onFail, {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   sourceType: sourceType,
    //   allowEdit: true,
    //   saveToPhotoAlbum: false,
    //   correctOrientation: true
    // }).then((imageData) => {
    //   this.selectedImage = `data:image/jpeg;base64,${imageData}`;
    // });

  // }

  recognizeImage() {
    console.log("in recognizeImage");
  }


  // recognizeImage() {
  //   console.log("in recognizeImage");
    // .then(result => {
    //   console.log("In recognizeImage callback");
    //   this.imageText = result.data;
    // });
    // Tesseract.recognize(this.selectedImage)
    // .progress(message => {
    //   if (message.status === 'recognizing text')
    //   this.progress.set(message.progress);
    // })
    // .catch(err => console.error(err))
    // .then(result => {
    //   this.imageText = result.text;
    // })
    // .finally(resultOrError => {
    //   this.progress.complete();
    // });
  // }

}
