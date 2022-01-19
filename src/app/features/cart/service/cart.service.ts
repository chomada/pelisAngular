import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Movie} from 'src/app/models/movie.model'

@Injectable(
  {
   providedIn: 'root'
  }
)
export class CartService {
  private list : Movie[] | any=[] ;
  constructor() { }

  getList():Observable<Movie[]>{
    if(localStorage.getItem("cart")!=null){
      this.list=JSON.parse(localStorage.getItem("cart") || "")
    }


    return of(this.list);

  }


  addMovie(movie:Movie){


    localStorage.setItem('cart', JSON.stringify(this.list));
    if(!this.list.includes(movie)){
    this.list.push(movie)
    alert("Se agrego correctamente")
    }
    else{
      alert("Esta movie ya se encuentra en el carrito")
    }
    localStorage.setItem('cart', JSON.stringify(this.list));

  }
  removeMovie(movie:Movie){
    let index= this.list.indexOf(movie);
    return this.list.splice(index,1)
  }
  clearCart(){
    localStorage.removeItem('cart');
    this.list=null
  }
}
