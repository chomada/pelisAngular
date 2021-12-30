import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/features/movies/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit,OnDestroy {

    movie:Movie | any;
    private subscription: Subscription | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // this.movieService.getDetail(this.activatedRoute.snapshot.params['id'])
    // .subscribe(movie=>this.cartService.addMovie(movie as Movie))
    this.subscription=this.movieService.getById(this.activatedRoute.snapshot.params['id'])
     .subscribe(movie=>this.movie=movie);
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    console.log("Hook On Destroy");
  }

}
