import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {IonicStorageModule} from '@ionic/storage-angular';
import {Camera} from '@ionic-native/camera/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCcCCSotPD9GXxNLQz3teHZbi6XTKzazIg&='
        }),
      IonicStorageModule.forRoot()
    ],
  providers: [
  Geolocation,
  Camera,
  SQLite,

  

    { provide: RouteReuseStrategy, 
     useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
