import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { OCR } from '@ionic-native/ocr/ngx';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ActionSheetController, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FavoritesPage } from '../pages/favorites/favorites';
import { LoadRecipesPage } from '../pages/loadRecipes/loadRecipes';
import { OnTheMenuPage } from '../pages/onTheMenu/onTheMenu';
import { ShoppingListPage } from '../pages/shoppingList/shoppingList';
import { TabsPage } from '../pages/tabs/tabs';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LoadRecipesPage,
    ShoppingListPage,
    OnTheMenuPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LoadRecipesPage,
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
    ActionSheetController,
    Camera,
    OCR
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
