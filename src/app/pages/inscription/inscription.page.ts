import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(private router: Router, private authServ: AuthentificationService, private toastController: ToastController) { }

  ngOnInit() {
  }
  onGoLogin () {
    this.router.navigateByUrl('/authentification');
   }
   

   async onCreerUtilisateur(value: any) {
    if (!this.authServ.creerNouvelUtilisateur(value.id, value.pass)) {
      const toast = await this.toastController.create({
        color: 'dark',
        duration: 2000,
        message: 'Id ou mot de passe vides'
        });
        await toast.present();
        } else {
        this.router.navigateByUrl('/menu/home');
        }
       }

  

}
