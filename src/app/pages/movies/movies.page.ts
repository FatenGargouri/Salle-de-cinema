import { Component, OnInit } from '@angular/core';
import{HttpClient}from'@angular/common/http';

import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  searchTitre:''; 
  movieApiUrl ='';
  movieData ={
  titre:'',
  description:'',
  imageUrl:''

};
  constructor(public http:HttpClient) {
   
   }

  ngOnInit() {
  }
readApi(url:string){
  return this.http.get(url);

}
searchMovie(){
  const search=encodeURIComponent(this.searchTitre).trim();
console.log('rechercher du film '+ search);
this.movieApiUrl='http://www.omdbapi.com/?&apikey=ffb23b0&t=' + search;

this.readApi(this.movieApiUrl)
   .subscribe((data)=>{
     console.log(data);
     
     this.movieData.titre=data['Titre'];
     this.movieData.description=data['Plot'];
     this.movieData.imageUrl=data['Poster'];
   });
}
}
