import { Component, OnInit } from '@angular/core';
import {Movie} from 'src/app/models/movie.model'
import { CartService } from '../../service/cart.service';
import {Store} from '@ngrx/store';
import { AppSetTitle } from '../../../../store/app.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public list:Movie[] | any=[];

  valor: boolean= true;

  constructor(
    private cartService: CartService,
    private store: Store
    ) { }

  ngOnInit(): void {
    this.store.dispatch(AppSetTitle({title: 'On Cart'}))
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
    localStorage.setItem('cart', JSON.stringify(this.list));

  }
  clearCart(){
    this.list=null
    this.cartService.clearCart();
    this.valor=false;

  }


}
