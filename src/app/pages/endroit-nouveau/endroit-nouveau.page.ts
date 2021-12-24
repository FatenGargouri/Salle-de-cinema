import { Component, OnInit } from '@angular/core';
import { Endroit } from 'src/app/model/endroit.model';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {EndroitsService} from '../../services/endroits.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-endroit-nouveau',
  templateUrl: './endroit-nouveau.page.html',
  styleUrls: ['./endroit-nouveau.page.scss'],
})
export class EndroitNouveauPage implements OnInit {

  constructor(private geolocation: Geolocation, private locService: EndroitsService,private router: Router) { }

  ngOnInit() {
  }
  CliqueFait = false;
  onAddLocation(value: Endroit) {
    this.CliqueFait = true;
    value.timestamp = new Date().getTime();
    value.photos = [];
    // Utilisation d'une promesse
    this.geolocation.getCurrentPosition({ timeout: 10000 }).then((resp) => {
    value.coordinates = {
    longitude: resp.coords.longitude,
    latitude: resp.coords.latitude
  }
  // console.log(data);
  this.locService.addLocation(value);
  this.router.navigate(['/menu/endroits']);
  } , (error) =>
  {
  console.log(error);
  this.locService.addLocation(value);
  this.router.navigate(['/menu/endroits']);
  });



}
}
