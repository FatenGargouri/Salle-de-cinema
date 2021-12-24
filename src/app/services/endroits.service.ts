import { Injectable } from '@angular/core';
import { Endroit } from '../model/endroit.model';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class EndroitsService {
  private locations: Array<Endroit> = [];
  public currentLocation: Endroit;

  constructor(private storage: Storage) {
    this.locations.push({title: 'A'});
    this.locations.push({title: 'B'});
    this.locations.push({title: 'C'});
    //create sert a cree La base
    this.storage.create();
    //set permet d'ajouter un attribut au storage
    this.storage.set('locations',this.locations);

   }
   public getLocations(){
     return this.storage.get('locations').then(data => {
       this.locations = data != null ? data : [];
       return this.locations.slice();
     });
   }
   public addLocation(endroit: Endroit){
     this.locations.push(endroit);
     this.storage.set('locations',this.locations);
   }
   public updateLocations(locations) {
    this.storage.set('locations', locations);
    this.locations = locations;
    }
    addPhoto(base64Image: string, timestamp: number) {
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0; i < this.locations.length ; i++) {
       if (this.locations[i].timestamp === timestamp){
       this.locations[i].photos.push(base64Image);
       this.updateLocations(this.locations);
       break;
       }
      }
      }

}
