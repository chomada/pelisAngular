import { Injectable } from '@angular/core';
import {Movie} from '../models/movie.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private list:Movie[]=[];

  constructor() { }
  getList(): Observable<Movie[]>{
    return of (this.list);
  }
  addMovie(movie:Movie){
    if(!this.list.includes(movie)){
      this.list.push(movie);
    }
    console.log(this.list);
  }
  removeMovie(movie:Movie){
    //remover el movie que coincida del array
  }
}
