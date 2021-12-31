import { Component, OnInit } from '@angular/core';
import {Movie} from 'src/app/models/movie.model'
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public list:Movie[]=[];

  valor: boolean= true;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getList().subscribe(list=>this.list=list)
    if(this.list.length==0){
      this.valor=false;
    }else{
      this.valor=true;
    }
    console.log(this.list)
  }
  removeMovie(movie:Movie){
    this.cartService.removeMovie(movie);
    if(this.list.length==0){
      this.valor=false;
    }else{
      this.valor=true;
    }


  }
  clearCart(){
    this.list=this.cartService.clearCart();
    this.valor=false;
  }


}
