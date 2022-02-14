import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/features/movies/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

import { Subscription } from 'rxjs';
import { CartService } from 'src/app/features/cart/service/cart.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

    movie:Movie | any;
    private subscription: Subscription | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private cartService: CartService

  ) { }

  ngOnInit(): void {

    this.subscription=this.movieService.getById(this.activatedRoute.snapshot.params['id'])
     .subscribe(movie=>this.movie=movie);
     console.log('Hola')
     console.log(this.movie)
  }


  addToCart(movie: Movie){
      this.cartService.addMovie(movie);



  }
}
