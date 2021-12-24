import { Component, OnInit } from '@angular/core';
import {Endroit} from '../../model/endroit.model';
import {EndroitsService} from '../../services/endroits.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-endroit-details',
  templateUrl: './endroit-details.page.html',
  styleUrls: ['./endroit-details.page.scss'],
})
export class EndroitDetailsPage implements OnInit {
  private currentPlace: Endroit;

  constructor(private locService: EndroitsService, private camera: Camera,
     private alertCtrl: AlertController) { }

  ngOnInit() {
    this.currentPlace = this.locService.currentLocation;
  }
  public async onTakePicture() {
    const options1: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA
    };
    const options2: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    const alert = await this.alertCtrl.create({
    header: 'confirmation',
    message: 'Source?',
    buttons: [
    {
    text: 'Camera',
    handler: () => {
    this.getPicture(options1);
    }
  },
  {
  text: 'Library',
  handler: () => {
  this.getPicture(options2);
  }
  }
  ]
  });
  await alert.present();
 }
 private getPicture(params: CameraOptions) {
  this.camera.getPicture(params)
  .then(data => {
  const base64Image = 'data:image/jpeg;base64,' + data;
  this.locService.addPhoto(base64Image,
  this.currentPlace.timestamp);
  });
 }

}
