import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private authServ: AuthentificationService) {}
  Deconnecter() {
    this.authServ.deconnecter();
    this.router.navigateByUrl('/authentification');
   }


}
