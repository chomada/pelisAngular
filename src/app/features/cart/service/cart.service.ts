import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Movie} from 'src/app/models/movie.model'

@Injectable(
  {
   providedIn: 'root'
  }
)
export class CartService {
  private list : Movie[]=[];
  constructor() { }

  getList():Observable<Movie[]>{

    return of(this.list);

  }


  addMovie(movie:Movie){
    if(!this.list.includes(movie)){
    this.list.push(movie)
    alert("Se agrego correctamente")
    }
    else{
      alert("Esta movie ya se encuentra en el carrito")
    }


  }
  removeMovie(movie:Movie){
    let index= this.list.indexOf(movie);
    return this.list.splice(index,1)
  }
  clearCart(){
    return this.list=[]
  }
}
