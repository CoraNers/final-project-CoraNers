import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { FavoritesServiceProvider } from '../../providers/favorites-service/favorites-service';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-getRecipes',
  templateUrl: 'getRecipes.html'
})
export class GetRecipesPage {

  selectedImage: string;
  detectedText: string;
  imageText: string;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider,
    public favoritesServiceProvider: FavoritesServiceProvider, private camera: Camera) {

  }

  getPhoto() { 
    console.log("In getPhoto");
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.selectedImage = base64Image;
      console.log("******** ", this.selectedImage);
    }, (err) => {
      console.log(err);
      // Handle error
    });
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

  recognizeImage() {
    console.log("in recognizeImage");
  }

}
