import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {
  public pages = [
    {titre: 'Accueil', chemin: '/menu/home'},
    {titre: 'Présentation', chemin: '/menu/presentation'},
    {titre: 'Films proposés', chemin: '/menu/propose'},
    {titre: 'Localisation', chemin: '/menu/endroits'},
    {titre: 'Recherche films', chemin: '/menu/movies'},
    {titre: 'Avis', chemin: '/menu/contacts'},
    {titre: 'Déconnexion', chemin: 'deconnexion'}
   ];

  constructor(private router: Router, private autServ: AuthentificationService) { }

  ngOnInit() {
  }
 
   onMenuItem(p) {
    if (p.chemin === 'deconnexion') {
    this.autServ.deconnecter();
    this.router.navigateByUrl('/authentification');
    } else {
    this.router.navigateByUrl(p.chemin);
    }
   }

}
