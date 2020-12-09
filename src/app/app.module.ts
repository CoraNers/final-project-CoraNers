import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ActionSheetController, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FavoritesPage } from '../pages/favorites/favorites';
import { GetRecipesPage } from '../pages/getRecipes/getRecipes';
import { OnTheMenuPage } from '../pages/onTheMenu/onTheMenu';
import { ShoppingListPage } from '../pages/shoppingList/shoppingList';
import { TabsPage } from '../pages/tabs/tabs';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { HttpClientModule } from  '@angular/common/http';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { OCR } from '@ionic-native/ocr/ngx';
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    GetRecipesPage,
    ShoppingListPage,
    OnTheMenuPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    GetRecipesPage,
    ShoppingListPage,
    OnTheMenuPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InputDialogServiceProvider,
    DataServiceProvider,
    Camera,
    ActionSheetController,
    OCR
  ]
})
export class AppModule {}
