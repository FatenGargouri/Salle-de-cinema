import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { AuthentificationService } from 'src/app/services/authentification.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router,private authServ: AuthentificationService) {
    this.login();
    }
    login() {
      if (this.authServ.getConnecte() !== 'oui') {
      this.router.navigateByUrl('/authentification');
    } else {
      this.router.navigateByUrl('/menu/home');
      }
     
    }
   
  }    