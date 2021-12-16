import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

    movie:Movie | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.movieService.getDetail(this.activatedRoute.snapshot.params['id'])
    .subscribe(movie=>this.cartService.addMovie(movie as Movie))
  }

}
